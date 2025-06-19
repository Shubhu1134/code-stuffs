# Day 6 – Data Visualization with Matplotlib and Seaborn

import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Load cleaned dataset
df = pd.read_csv("datasets/titanic_cleaned.csv")

# Set style for seaborn
sns.set(style="whitegrid")

# -----------------------
# 1. Bar plot: Survival count
plt.figure(figsize=(6, 4))
sns.countplot(x='Survived', data=df)
plt.title("Survival Count")
plt.xlabel("Survived (0 = No, 1 = Yes)")
plt.ylabel("Count")
plt.savefig("datasets/survival_count.png")  # Save the figure
plt.show()

# -----------------------
# 2. Histogram: Age distribution
plt.figure(figsize=(6, 4))
sns.histplot(df['Age'], kde=True, color='purple', bins=30)
plt.title("Age Distribution")
plt.xlabel("Age")
plt.ylabel("Frequency")
plt.savefig("datasets/age_distribution.png")
plt.show()

# -----------------------
# 3. Boxplot: Age vs Survived
plt.figure(figsize=(6, 4))
sns.boxplot(x='Survived', y='Age', data=df)
plt.title("Age vs Survival")
plt.savefig("datasets/age_vs_survived.png")
plt.show()

# -----------------------
# 4. Heatmap: Correlation matrix
plt.figure(figsize=(8, 6))
sns.heatmap(df.corr(), annot=True, cmap='coolwarm')
plt.title("Correlation Heatmap")
plt.savefig("datasets/correlation_heatmap.png")
plt.show()
