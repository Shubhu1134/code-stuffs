# Day 4 – Pandas Basics

import pandas as pd

# 1. Create a DataFrame from dictionary
data = {
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Age': [25, 30, 22],
    'Score': [85, 90, 95]
}

df = pd.DataFrame(data)
print("📋 DataFrame:")
print(df)

# 2. View basic info
print("\n🔍 Basic Info:")
print(df.info())

# 3. Accessing columns
print("\n🎯 Names:", df['Name'].tolist())
print("🎯 Ages > 23:")
print(df[df['Age'] > 23])

# 4. Add new column
df['Passed'] = df['Score'] > 80
print("\n✅ Added 'Passed' Column:")
print(df)

# 5. Load data from CSV (Assuming sample.csv exists)
# If you have a CSV, uncomment this:
# loaded_df = pd.read_csv("sample.csv")
# print("\n📂 Loaded CSV Data:")
# print(loaded_df.head())
