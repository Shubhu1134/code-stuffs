# 📘 Day 11: File System Implementation – Inodes, Free Space Management, Mounting

---

## 🗂️ File System Implementation

A **file system** handles how files are stored, retrieved, and managed on storage media (like hard disks or SSDs).

---

## 🔸 File Control Block (FCB)

Each file has a **File Control Block**, which contains metadata:

- File permissions
- Ownership (UID, GID)
- Size
- Timestamps
- File pointers (direct, indirect blocks)

---

## 📦 Inodes (Index Nodes)

- **Used in UNIX/Linux file systems**.
- An inode stores metadata about a file except the name.
- File name is stored separately in the directory structure.

### 🔹 Inode Structure Includes:

- File type & permissions
- Owner and group ID
- Size
- Access/modification time
- Pointers to data blocks:
  - Direct pointers (12)
  - Single Indirect
  - Double Indirect
  - Triple Indirect

### 🔹 Example of Block Structure:
