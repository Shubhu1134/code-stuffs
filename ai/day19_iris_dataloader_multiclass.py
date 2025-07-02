# Day 19 – PyTorch Datasets, DataLoader, and Multiclass Classification (Iris)

import torch
import torch.nn as nn
from torch.utils.data import Dataset, DataLoader
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt

# 1. Load and preprocess data
iris = load_iris()
X = iris['data']
y = iris['target']

scaler = StandardScaler()
X = scaler.fit_transform(X)

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42)

# 2. Create custom Dataset
class IrisDataset(Dataset):
    def __init__(self, X, y):
        self.X = torch.tensor(X, dtype=torch.float32)
        self.y = torch.tensor(y, dtype=torch.long)  # For CrossEntropyLoss

    def __len__(self):
        return len(self.X)

    def __getitem__(self, idx):
        return self.X[idx], self.y[idx]

train_dataset = IrisDataset(X_train, y_train)
test_dataset = IrisDataset(X_test, y_test)

train_loader = DataLoader(train_dataset, batch_size=16, shuffle=True)
test_loader = DataLoader(test_dataset, batch_size=16)

# 3. Define model
class IrisNet(nn.Module):
    def __init__(self):
        super().__init__()
        self.hidden = nn.Linear(4, 10)
        self.output = nn.Linear(10, 3)

    def forward(self, x):
        x = torch.relu(self.hidden(x))
        return self.output(x)  # No softmax needed with CrossEntropyLoss

model = IrisNet()

# 4. Loss and Optimizer
criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), lr=0.01)

# 5. Training loop
epochs = 100
losses = []

for epoch in range(epochs):
    epoch_loss = 0
    for X_batch, y_batch in train_loader:
        outputs = model(X_batch)
        loss = criterion(outputs, y_batch)

        optimizer.zero_grad()
        loss.backward()
        optimizer.step()

        epoch_loss += loss.item()
    avg_loss = epoch_loss / len(train_loader)
    losses.append(avg_loss)

    if epoch % 10 == 0:
        print(f"Epoch {epoch}: Loss = {avg_loss:.4f}")

# 6. Evaluation
correct = 0
total = 0

with torch.no_grad():
    for X_batch, y_batch in test_loader:
        outputs = model(X_batch)
        _, predicted = torch.max(outputs, 1)
        total += y_batch.size(0)
        correct += (predicted == y_batch).sum().item()

accuracy = correct / total
print(f"\n✅ Test Accuracy: {accuracy:.2f}")

# 7. Plot loss
plt.plot(losses)
plt.title("Training Loss (Iris Multiclass)")
plt.xlabel("Epoch")
plt.ylabel("Loss")
plt.tight_layout()
plt.savefig("datasets/day19_iris_loss.png")
plt.show()
