# Day 9 – Feature Selection + Feature Scaling

import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler, StandardScaler
from sklearn.metrics import accuracy_score
import matplotlib.pyplot as plt
import seaborn as sns

# Load dataset
df = pd.read_csv("datasets/titanic_cleaned.csv")

# --------------------------
# STEP 1: Feature Selection (manual)
correlation = df.corr()
plt.figure(figsize=(8, 6))
sns.heatmap(correlation, annot=True, cmap='coolwarm')
plt.title("🔍 Correlation Heatmap for Feature Selection")
plt.savefig("datasets/feature_correlation.png")
plt.show()

# Drop 'SibSp' and 'Parch' as they’re weakly correlated
X = df.drop(['Survived', 'SibSp', 'Parch'], axis=1)
y = df['Survived']

# --------------------------
# STEP 2: Train-Test Split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42)

# --------------------------
# STEP 3: Feature Scaling

# Min-Max Scaling
minmax = MinMaxScaler()
X_train_minmax = minmax.fit_transform(X_train)
X_test_minmax = minmax.transform(X_test)

# Standard Scaling
standard = StandardScaler()
X_train_std = standard.fit_transform(X_train)
X_test_std = standard.transform(X_test)

# --------------------------
# STEP 4: Model Training and Evaluation

def train_and_evaluate(X_tr, X_te, name):
    model = LogisticRegression(max_iter=200)
    model.fit(X_tr, y_train)
    y_pred = model.predict(X_te)
    acc = accuracy_score(y_test, y_pred)
    print(f"✅ Accuracy with {name}: {acc:.2f}")

train_and_evaluate(X_train, X_test, "No Scaling")
train_and_evaluate(X_train_minmax, X_test_minmax, "MinMax Scaling")
train_and_evaluate(X_train_std, X_test_std, "Standard Scaling")
