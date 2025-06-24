# Day 11 – Decision Trees with sklearn and visualization

import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.tree import DecisionTreeClassifier, plot_tree
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report

# Load dataset
df = pd.read_csv("datasets/titanic_cleaned.csv")

# Use selected features
X = df.drop(['Survived', 'SibSp', 'Parch'], axis=1)
y = df['Survived']

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Build Decision Tree
tree_model = DecisionTreeClassifier(max_depth=4, random_state=42)
tree_model.fit(X_train, y_train)

# Predict
y_pred = tree_model.predict(X_test)

# Evaluation
print(f"✅ Accuracy: {accuracy_score(y_test, y_pred):.2f}")
print("\n📊 Classification Report:")
print(classification_report(y_test, y_pred))

# ----------------------
# Plot Decision Tree
plt.figure(figsize=(20, 10))
plot_tree(tree_model, feature_names=X.columns, class_names=['Not Survived', 'Survived'], filled=True)
plt.title("🌳 Decision Tree Visualization")
plt.savefig("datasets/decision_tree.png")
plt.show()
