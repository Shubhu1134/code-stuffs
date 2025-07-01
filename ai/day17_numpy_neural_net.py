# Day 17 – Neural Network from Scratch using NumPy

import numpy as np
from sklearn.datasets import make_moons
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import matplotlib.pyplot as plt

# Generate simple binary dataset
X, y = make_moons(n_samples=1000, noise=0.2, random_state=42)
y = y.reshape(-1, 1)  # Ensure it's a column vector

# Normalize input
X = (X - X.mean(axis=0)) / X.std(axis=0)

# Split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Activation
def sigmoid(z):
    return 1 / (1 + np.exp(-z))

def sigmoid_deriv(z):
    return sigmoid(z) * (1 - sigmoid(z))

# Initialize weights
np.random.seed(42)
input_size = 2
hidden_size = 4
output_size = 1

W1 = np.random.randn(input_size, hidden_size)
b1 = np.zeros((1, hidden_size))

W2 = np.random.randn(hidden_size, output_size)
b2 = np.zeros((1, output_size))

# Training
lr = 0.1
epochs = 1000
losses = []

for epoch in range(epochs):
    # Forward
    Z1 = np.dot(X_train, W1) + b1
    A1 = sigmoid(Z1)

    Z2 = np.dot(A1, W2) + b2
    A2 = sigmoid(Z2)

    # Loss (Binary Cross-Entropy)
    loss = -np.mean(y_train * np.log(A2 + 1e-8) + (1 - y_train) * np.log(1 - A2 + 1e-8))
    losses.append(loss)

    # Backprop
    dZ2 = A2 - y_train
    dW2 = np.dot(A1.T, dZ2) / len(X_train)
    db2 = np.mean(dZ2, axis=0, keepdims=True)

    dA1 = np.dot(dZ2, W2.T)
    dZ1 = dA1 * sigmoid_deriv(Z1)
    dW1 = np.dot(X_train.T, dZ1) / len(X_train)
    db1 = np.mean(dZ1, axis=0, keepdims=True)

    # Update
    W2 -= lr * dW2
    b2 -= lr * db2
    W1 -= lr * dW1
    b1 -= lr * db1

    if epoch % 100 == 0:
        print(f"Epoch {epoch} ➤ Loss: {loss:.4f}")

# Predict
def predict(X):
    A1 = sigmoid(np.dot(X, W1) + b1)
    A2 = sigmoid(np.dot(A1, W2) + b2)
    return (A2 > 0.5).astype(int)

y_pred = predict(X_test)
acc = accuracy_score(y_test, y_pred)
print(f"\n✅ Final Test Accuracy: {acc:.2f}")

# Plot loss
plt.plot(losses)
plt.title("Training Loss over Epochs")
plt.xlabel("Epoch")
plt.ylabel("Loss")
plt.tight_layout()
plt.savefig("datasets/day17_nn_loss.png")
plt.show()
