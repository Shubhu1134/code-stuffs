# Day 12 – Random Forest Classifier on Titanic Dataset

import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report
import matplotlib.pyplot as plt
import seaborn as sns

# Load dataset
df = pd.read_csv("datasets/titanic_cleaned.csv")

# Drop weak features
X = df.drop(['Survived', 'SibSp', 'Parch'], axis=1)
y = df['Survived']

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train Random Forest
rf_model = RandomForestClassifier(n_estimators=100, max_depth=6, random_state=42)
rf_model.fit(X_train, y_train)

# Predict
y_pred = rf_model.predict(X_test)

# Evaluate
print(f"✅ Accuracy: {accuracy_score(y_test, y_pred):.2f}")
print("\n📊 Classification Report:")
print(classification_report(y_test, y_pred))

# -------------------------------
# Feature Importance Plot
importances = rf_model.feature_importances_
features = X.columns
importance_df = pd.DataFrame({"Feature": features, "Importance": importances})
importance_df = importance_df.sort_values(by="Importance", ascending=False)

plt.figure(figsize=(8, 5))
sns.barplot(x="Importance", y="Feature", data=importance_df, palette="viridis")
plt.title("🔍 Feature Importance from Random Forest")
plt.tight_layout()
plt.savefig("datasets/random_forest_feature_importance.png")
plt.show()
