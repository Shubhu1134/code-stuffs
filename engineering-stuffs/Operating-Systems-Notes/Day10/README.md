# 📘 Day 10: Disk Scheduling & File System Concepts

---

## 💽 Disk Scheduling

Disk scheduling manages the order in which **read/write requests** to the disk are serviced.

---

## 🔁 Why Disk Scheduling?

- Minimize **seek time** (time to move the disk arm to the track).
- Improve overall **I/O performance**.

---

## 📊 Disk Scheduling Algorithms

### 1. **FCFS (First Come First Serve)**

- Requests are processed in the order they arrive.
- Simple but can result in **long wait times**.

---

### 2. **SSTF (Shortest Seek Time First)**

- Choose the request with the **least seek time** from current head position.
- Can cause **starvation** for far requests.

---

### 3. **SCAN (Elevator Algorithm)**

- Disk arm moves in one direction, servicing requests.
- Reverses direction at end.

> Moves like an elevator: up → down → up → ...

---

### 4. **LOOK**

- Like SCAN but **only goes as far as the last request** in each direction before reversing.
- More efficient than SCAN.

---

### 5. **C-SCAN (Circular SCAN)**

- Head moves in one direction only.
- Jumps to the beginning after reaching end.
- More **uniform wait times**.

---

### 6. **C-LOOK**

- Like C-SCAN but **only services requests in the current range** before jumping back.

---

## 🧪 Comparison Table

| Algorithm | Pros                     | Cons                   |
| --------- | ------------------------ | ---------------------- |
| FCFS      | Simple                   | Long waits possible    |
| SSTF      | Better seek time         | Starvation             |
| SCAN      | Fair, efficient          | Reverses direction     |
| LOOK      | Avoids unnecessary moves | Slightly complex       |
| C-SCAN    | Uniform wait times       | Jump to start is slow  |
| C-LOOK    | Efficient & fair         | May miss some fairness |

---

## 🗂️ File System Concepts

A **File System** manages how data is stored and retrieved on disk.

---

### 📄 File Attributes

- Name
- Type (text, binary)
- Size
- Permissions (read/write/execute)
- Timestamps (creation, last modified)

---

### 📚 File Operations

- **Create**
- **Open / Close**
- **Read / Write**
- **Rename / Delete**
- **Append / Truncate**

---

### 🗃️ File Allocation Methods

1. **Contiguous Allocation**

   - All blocks of file stored together
   - ✅ Fast access, ❌ External fragmentation

2. **Linked Allocation**

   - Each block points to next block
   - ✅ No fragmentation, ❌ Slow for random access

3. **Indexed Allocation**
   - Index block stores all pointers
   - ✅ Fast direct access, ❌ Overhead for small files

---

## 📦 Directory Structure

- **Single-Level** – All files in one directory
- **Two-Level** – Separate directories for users
- **Tree-Structured** – Hierarchical directories
- **Acyclic Graph** – Allows shared subdirectories/files

---

### 🔐 Access Control

- Based on **user, group, others**
- Common types:
  - **Read (r)**
  - **Write (w)**
  - **Execute (x)**

---

## ✅ Key Takeaways

- Disk scheduling improves I/O efficiency by reducing seek times.
- File systems organize, store, and secure data on disk.
- Allocation and directory structures directly affect performance and accessibility.
