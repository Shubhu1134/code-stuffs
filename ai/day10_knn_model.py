# Day 10 – KNN: Sklearn and from Scratch

import pandas as pd
import numpy as np
from collections import Counter
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score

# Load dataset
df = pd.read_csv("datasets/titanic_cleaned.csv")

# Use selected features
X = df.drop(['Survived', 'SibSp', 'Parch'], axis=1)
y = df['Survived']

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Standard scaling
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# ----------------------------
# ✅ KNN Using Sklearn
knn = KNeighborsClassifier(n_neighbors=5)
knn.fit(X_train_scaled, y_train)
y_pred = knn.predict(X_test_scaled)
print(f"📦 Sklearn KNN Accuracy: {accuracy_score(y_test, y_pred):.2f}")

# ----------------------------
# ✅ KNN From Scratch
def euclidean_distance(x1, x2):
    return np.sqrt(np.sum((x1 - x2)**2))

def knn_predict(X_train, y_train, x_test, k=5):
    distances = [euclidean_distance(x_test, x_train) for x_train in X_train]
    k_indices = np.argsort(distances)[:k]
    k_nearest_labels = [y_train[i] for i in k_indices]
    most_common = Counter(k_nearest_labels).most_common(1)
    return most_common[0][0]

# Run manual KNN for 10 test samples
manual_preds = []
for i in range(10):  # Limit for speed
    pred = knn_predict(X_train_scaled, list(y_train), X_test_scaled[i], k=5)
    manual_preds.append(pred)

print("🧠 Manual KNN predictions (first 10):", manual_preds)
print("📌 Actual values:", list(y_test[:10]))
