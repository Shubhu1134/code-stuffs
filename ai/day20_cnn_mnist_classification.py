# Day 20 – CNN for MNIST Classification using PyTorch

import torch
import torch.nn as nn
import torchvision
import torchvision.transforms as transforms
import matplotlib.pyplot as plt

# 1. Device
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# 2. Load MNIST dataset
transform = transforms.Compose([
    transforms.ToTensor(),
    transforms.Normalize((0.5,), (0.5,))
])

train_data = torchvision.datasets.MNIST(
    root='./datasets', train=True, download=True, transform=transform)
test_data = torchvision.datasets.MNIST(
    root='./datasets', train=False, download=True, transform=transform)

train_loader = torch.utils.data.DataLoader(
    train_data, batch_size=64, shuffle=True)
test_loader = torch.utils.data.DataLoader(
    test_data, batch_size=64, shuffle=False)

# 3. Define CNN
class CNN(nn.Module):
    def __init__(self):
        super().__init__()
        self.conv1 = nn.Conv2d(1, 16, kernel_size=3, padding=1)
        self.conv2 = nn.Conv2d(16, 32, kernel_size=3, padding=1)
        self.pool = nn.MaxPool2d(2, 2)
        self.fc1 = nn.Linear(32 * 7 * 7, 128)
        self.fc2 = nn.Linear(128, 10)
        self.relu = nn.ReLU()

    def forward(self, x):
        x = self.pool(self.relu(self.conv1(x)))  # [1, 28, 28] → [16, 14, 14]
        x = self.pool(self.relu(self.conv2(x)))  # [32, 7, 7]
        x = x.view(-1, 32 * 7 * 7)
        x = self.relu(self.fc1(x))
        return self.fc2(x)

model = CNN().to(device)

# 4. Loss and Optimizer
criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), lr=0.001)

# 5. Train
epochs = 5
losses = []

for epoch in range(epochs):
    running_loss = 0.0
    for images, labels in train_loader:
        images, labels = images.to(device), labels.to(device)

        optimizer.zero_grad()
        outputs = model(images)
        loss = criterion(outputs, labels)
        loss.backward()
        optimizer.step()

        running_loss += loss.item()

    avg_loss = running_loss / len(train_loader)
    losses.append(avg_loss)
    print(f"Epoch {epoch + 1}/{epochs}, Loss: {avg_loss:.4f}")

# 6. Evaluate
correct = 0
total = 0

with torch.no_grad():
    for images, labels in test_loader:
        images, labels = images.to(device), labels.to(device)
        outputs = model(images)
        _, preds = torch.max(outputs, 1)
        correct += (preds == labels).sum().item()
        total += labels.size(0)

accuracy = correct / total
print(f"\n✅ Final Test Accuracy: {accuracy:.2f}")

# 7. Plot training loss
plt.plot(losses)
plt.title("Training Loss (CNN on MNIST)")
plt.xlabel("Epoch")
plt.ylabel("Loss")
plt.tight_layout()
plt.savefig("datasets/day20_cnn_mnist_loss.png")
plt.show()
