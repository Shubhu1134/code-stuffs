# Day 3 – NumPy Basics

import numpy as np

# Create arrays
a = np.array([1, 2, 3])
b = np.array([[1, 2, 3], [4, 5, 6]])

print("1D Array:", a)
print("2D Array:\n", b)

# Array attributes
print("Shape:", b.shape)
print("Data type:", b.dtype)

# Array of zeros, ones, and random
print("Zeros:\n", np.zeros((2, 3)))
print("Ones:\n", np.ones((3, 3)))
print("Random:\n", np.random.rand(2, 2))

# Element-wise operations
x = np.array([10, 20, 30])
y = np.array([1, 2, 3])
print("Addition:", x + y)
print("Multiplication:", x * y)

# Indexing and slicing
arr = np.array([10, 20, 30, 40, 50])
print("First Element:", arr[0])
print("Slice [1:4]:", arr[1:4])
