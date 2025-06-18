# Day 5 – Data Preprocessing using Pandas

import pandas as pd

# Load dataset
df = pd.read_csv("datasets/titanic.csv")

print("🛳️ First 5 Rows:")
print(df.head())

# ----------------------
# 1. Check missing values
print("\n🔎 Missing Values:")
print(df.isnull().sum())

# ----------------------
# 2. Drop columns
df = df.drop(['PassengerId', 'Name', 'Ticket', 'Cabin'], axis=1)
print("\n🗑️ Dropped unneeded columns")

# ----------------------
# 3. Fill missing 'Age' with median
df['Age'] = df['Age'].fillna(df['Age'].median())

# 4. Fill 'Embarked' with mode
df['Embarked'] = df['Embarked'].fillna(df['Embarked'].mode()[0])

# ----------------------
# 5. Encode categorical features
df['Sex'] = df['Sex'].map({'male': 0, 'female': 1})
df = pd.get_dummies(df, columns=['Embarked'], drop_first=True)

print("\n✅ Cleaned and Encoded Data:")
print(df.head())

# ----------------------
# 6. Save the cleaned file (optional)
df.to_csv("datasets/titanic_cleaned.csv", index=False)
