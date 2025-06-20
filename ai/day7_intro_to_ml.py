# Day 7 – Intro to Machine Learning with Logistic Regression

import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report

# Load cleaned Titanic dataset
df = pd.read_csv("datasets/titanic_cleaned.csv")

# Step 1: Define features and label
X = df.drop('Survived', axis=1)  # Features
y = df['Survived']               # Label

# Step 2: Train-test split (80/20)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Step 3: Create and train model
model = LogisticRegression(max_iter=200)
model.fit(X_train, y_train)

# Step 4: Predict
y_pred = model.predict(X_test)

# Step 5: Evaluate
accuracy = accuracy_score(y_test, y_pred)
print(f"✅ Accuracy: {accuracy:.2f}")
print("\n📊 Classification Report:")
print(classification_report(y_test, y_pred))
