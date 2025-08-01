# 📘 Operating Systems – Unit 5 Notes

## ✅ UNIT 5: FILE SYSTEM

---

### 1. Introduction to File System

A **file system** manages how data is stored and retrieved. It provides:

- Structure for storing data as **files**
- Mechanisms to manage files and directories
- Access permissions

---

### 2. File Concept

A file is a **named collection of related data** stored on secondary storage.

#### File Attributes:

- Name
- Type (e.g., .txt, .exe)
- Location
- Size
- Protection
- Time/date

#### File Operations:

- Create
- Read
- Write
- Reposition (seek)
- Delete
- Truncate

---

### 3. File Access Methods

| Access Method       | Description                             |
| ------------------- | --------------------------------------- |
| **Sequential**      | Read/write from start to end            |
| **Direct (Random)** | Access by position/index                |
| **Indexed**         | Use an index (like a book) to find data |

---

### 4. Directory Structure

A directory contains information about files. It supports:

- File organization
- Navigation
- Permissions

#### Types of Directory Structures:

1. **Single-level** – All files in one directory
2. **Two-level** – Separate directories for each user
3. **Tree-structured** – Hierarchy of directories
4. **Acyclic Graph** – Allows shared subdirectories/files
5. **General Graph** – Allows cycles (requires garbage collection)

---

### 5. File Allocation Methods

How files are stored on disk blocks.

| Method         | Description                       | Pros             | Cons             |
| -------------- | --------------------------------- | ---------------- | ---------------- |
| **Contiguous** | All blocks together               | Fast access      | Fragmentation    |
| **Linked**     | Blocks linked with pointers       | No fragmentation | Slow access      |
| **Indexed**    | Index block points to file blocks | Direct access    | Uses extra space |

---

### 6. Free Space Management

Tracks free blocks on disk.

| Technique       | Description                                      |
| --------------- | ------------------------------------------------ |
| **Bit Map**     | Each bit represents a block (0 = free, 1 = used) |
| **Linked List** | Free blocks linked together                      |
| **Grouping**    | Stores addresses of free blocks in groups        |
| **Counting**    | Stores starting address and count of free blocks |

---

### 7. File System Mounting

Mounting allows a file system to be **made available** to the OS hierarchy.

- Example: USB drive mounted under `/media/usb`

---

### 8. File Protection

Ensures unauthorized access is prevented.

#### Types of Access:

- Read (R)
- Write (W)
- Execute (X)

#### Access Control:

- **Access Control Lists (ACL)**: Specify permissions for each user
- **User-Group-Other** model

---

### 9. Disk Structure

A disk has:

- **Platters** with **tracks**
- Tracks divided into **sectors**

#### Disk Addressing:

- **CHS**: Cylinder, Head, Sector
- **LBA**: Logical Block Addressing

---

### 10. Disk Scheduling Algorithms

When multiple read/write requests exist, the OS schedules them to optimize time.

| Algorithm                           | Description                                       |
| ----------------------------------- | ------------------------------------------------- |
| **FCFS** (First Come First Serve)   | Simple but slow                                   |
| **SSTF** (Shortest Seek Time First) | Closer request served first                       |
| **SCAN** (Elevator)                 | Moves back and forth across disk                  |
| **C-SCAN**                          | Only one direction, then jumps back               |
| **LOOK/C-LOOK**                     | Like SCAN but stops at final request in direction |

---

### 11. Disk Formatting

- **Low-level Formatting**: Divides disk into sectors
- **Logical Formatting**: Creates file system (FAT, NTFS, ext4)

---

### 12. Swap Space Management

- Area on disk for **virtual memory**
- Stores parts of memory temporarily
- Can be **preallocated** or **allocated dynamically**

---

### 13. Recovery

- OS must handle system crashes and restore file system integrity.
- Uses:
  - Journaling
  - Checkpoints
  - Backups

---

## ✅ Summary Table

| Concept             | Summary                         |
| ------------------- | ------------------------------- |
| File System         | Manages data storage and access |
| Directory Structure | Organizes files hierarchically  |
| Allocation Methods  | Contiguous, Linked, Indexed     |
| Disk Scheduling     | FCFS, SSTF, SCAN, C-SCAN        |
| Protection          | Read/Write/Execute permissions  |
| Recovery            | Journals & Backups              |

---
