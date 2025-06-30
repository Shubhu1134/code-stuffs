# 📘 Day 18: File Systems – Structure, Access Methods & Allocation Techniques

---

## 📂 What is a File System?

A **file system** manages how data is stored and retrieved on a storage device.  
It organizes data into **files and directories**.

---

## 🧱 File System Structure

### 🔹 Layers of a File System

1. **Application Programs**
2. **Logical File System** – Metadata, directory structure, file naming
3. **File Organization Module** – Maps files to blocks
4. **Basic File System** – Issues commands to device
5. **I/O Control** – Drivers & interrupt handlers
6. **Devices** – HDD, SSD, USB, etc.

---

## 🧾 File Attributes

- Name
- Type
- Size
- Location
- Protection
- Timestamps (created, accessed, modified)

---

## 🗂️ Directory Structure

| Structure         | Description                                  |
| ----------------- | -------------------------------------------- |
| **Single-level**  | One directory for all files                  |
| **Two-level**     | Separate directory for each user             |
| **Tree**          | Hierarchical, flexible, widely used          |
| **Acyclic Graph** | Allows shared subdirectories/files           |
| **General Graph** | Can have cycles, requires garbage collection |

---

## 🔍 Access Methods

| Method | Description |
| ------ | ----------- |

| **Sequent**
