# Day 2 - Python Data Structures

# ------------------------
# LIST (ordered, mutable)
fruits = ['apple', 'banana', 'mango']
fruits.append('orange')
print("List:", fruits)

# ------------------------
# TUPLE (ordered, immutable)
coordinates = (10, 20)
print("Tuple:", coordinates)

# ------------------------
# SET (unordered, unique items)
unique_numbers = {1, 2, 2, 3, 4}
unique_numbers.add(5)
print("Set:", unique_numbers)

# ------------------------
# DICTIONARY (key-value pairs)
student = {
    'name': 'Dev',
    'age': 20,
    'marks': [85, 90, 95]
}
student['age'] = 21
print("Dict:", student)
print("Student Name:", student['name'])

# Bonus: Loop through dictionary
for key, value in student.items():
    print(f"{key}: {value}")
