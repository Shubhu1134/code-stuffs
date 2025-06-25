# Day 13 – Hyperparameter Tuning with GridSearchCV

import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV, train_test_split
from sklearn.metrics import accuracy_score, classification_report

# Load dataset
df = pd.read_csv("datasets/titanic_cleaned.csv")

# Drop weak features
X = df.drop(['Survived', 'SibSp', 'Parch'], axis=1)
y = df['Survived']

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42)

# --------------------------
# Step 1: Define Model & Hyperparameter Grid

rf = RandomForestClassifier(random_state=42)

param_grid = {
    'n_estimators': [50, 100, 150],
    'max_depth': [4, 6, 8],
    'criterion': ['gini', 'entropy']
}

# --------------------------
# Step 2: Grid Search with Cross-Validation

grid_search = GridSearchCV(
    estimator=rf,
    param_grid=param_grid,
    cv=5,             # 5-fold cross-validation
    scoring='accuracy',
    n_jobs=-1,        # Use all CPU cores
    verbose=1
)

grid_search.fit(X_train, y_train)

# --------------------------
# Step 3: Best Model Evaluation

print("✅ Best Hyperparameters:", grid_search.best_params_)

best_model = grid_search.best_estimator_
y_pred = best_model.predict(X_test)

print(f"\n📈 Accuracy: {accuracy_score(y_test, y_pred):.2f}")
print("\n📊 Classification Report:\n", classification_report(y_test, y_pred))
