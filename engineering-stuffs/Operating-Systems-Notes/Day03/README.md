# 📘 Day 3: Threads & Multithreading

---

## 🔹 What is a Thread?

A **thread** is the smallest unit of CPU execution within a process.

- Each process can have **one or more threads**.
- Threads within the same process share:
  - Code segment
  - Data segment
  - Open files and signals

> 🔸 Each thread has its own stack, program counter, and register set.

---

## 🧠 Why Use Threads?

| Benefit                     | Description                                          |
| --------------------------- | ---------------------------------------------------- |
| ✅ Faster context switching | Less overhead compared to process switching          |
| ✅ Shared memory space      | Easy communication between threads                   |
| ✅ Responsiveness           | Allows background tasks in apps (e.g., autosave, UI) |

---

## 🛠️ Types of Threads

### 1. **User-Level Threads (ULT)**

- Managed by **user-level libraries**
- Kernel unaware of threads
- Fast to create/manage
- If one thread blocks, **entire process blocks**

### 2. **Kernel-Level Threads (KLT)**

- Managed directly by **OS kernel**
- Slower than ULT due to kernel involvement
- True parallelism possible

---

## 🧵 Multithreading Models

### 1. **Many-to-One**

- Many user threads → 1 kernel thread
- Only 1 thread runs at a time
- Blocking is a problem

### 2. **One-to-One**

- Each user thread → 1 kernel thread
- Supports parallelism
- High resource usage

### 3. **Many-to-Many**

- Many user threads → Many kernel threads
- Flexible and efficient

---

## ⚙️ Thread Libraries

- **POSIX Pthreads** (Unix/Linux)
- **Java Threads**
- **Win32 Threads**

Example (Pthreads in C):

```c
#include <pthread.h>
#include <stdio.h>

void* myFunc(void* arg) {
    printf("Hello from Thread!\n");
    return NULL;
}

int main() {
    pthread_t tid;
    pthread_create(&tid, NULL, myFunc, NULL);
    pthread_join(tid, NULL);
    return 0;
}
```
