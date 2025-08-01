#### Transitions:

- **Dispatch**: Ready → Running
- **Interrupt**: Running → Ready
- **I/O wait**: Running → Waiting
- **I/O complete**: Waiting → Ready
- **Exit**: Running → Terminated

---

### 3. Process Control Block (PCB)

A PCB contains all info the OS needs to manage a process.

#### PCB Fields:

- PID (Process ID)
- Process State
- Program Counter
- CPU Registers
- Memory Limits
- Accounting Info
- I/O Status

---

### 4. Threads

A **thread** is the smallest unit of CPU execution. A process can have multiple threads sharing:

- Code
- Data
- Open files

#### Types:

- **User-Level Threads (ULT)**
- **Kernel-Level Threads (KLT)**

> Multithreading improves concurrency without overhead of multiple processes.

---

### 5. Types of Threads

| Type   | Description                                     |
| ------ | ----------------------------------------------- |
| ULT    | Managed by user libraries, fast context switch  |
| KLT    | Managed by OS, better integration with hardware |
| Hybrid | Mix of both, e.g., Windows, Linux               |

---

### 6. Process Scheduling

The OS decides **which process runs next** using a scheduler.

#### Types:

- **Long-term scheduler**: selects jobs
- **Short-term scheduler**: selects ready process
- **Medium-term scheduler**: suspends/resumes

---

### 7. Scheduling Queues

OS maintains several queues:

- **Job Queue**: All processes in the system
- **Ready Queue**: Processes in memory, ready to run
- **Device Queue**: Waiting for I/O

#### Context Switching:

Switching CPU from one process to another.
Involves saving and restoring PCB. It's overhead but essential for multitasking.

---

### 8. Operations on Processes

- **Create**: `fork()` in UNIX
- **Terminate**: Normal or abnormal (e.g., crash)
- **Wait**: Parent waits for child to finish
- **Exec**: Replaces process memory with a new program

---

### 9. Interprocess Communication (IPC)

Processes may need to communicate (e.g., client-server model).

#### Types:

- **Direct** (send/receive)
- **Indirect** (via mailbox/message queue)

#### Mechanisms:

- **Shared Memory**
- **Message Passing**

---

### 10. Process Synchronization

Processes must cooperate correctly when sharing data.

#### Problems Solved:

- Race conditions
- Critical section violations

> **Example**: Two threads updating a shared counter.

---

### 11. Critical Section Problem

#### Requirements (by Peterson’s or Dekker’s Algorithm):

1. **Mutual Exclusion**
2. **Progress**
3. **Bounded Waiting**

#### Solutions:

- Software (Peterson’s)
- Hardware (TSL instruction)
- OS primitives (mutex, semaphores)

---

### 12. Semaphores

Semaphores are integer variables for synchronization.

#### Types:

- **Binary Semaphore (Mutex)** – Only 0 or 1
- **Counting Semaphore** – >1, used for resource management

#### Operations:

- `wait(S)`: if S > 0 → S--; else wait
- `signal(S)`: S++

---

## 📌 Summary Table

| Concept               | Key Points                                       |
| --------------------- | ------------------------------------------------ |
| Process Concept       | Program in execution with states                 |
| Process Control Block | Stores metadata (PID, state, PC, etc.)           |
| Threads               | Lightweight execution units                      |
| Scheduling            | Decides which process/thread runs next           |
| IPC                   | Shared memory or message passing                 |
| Synchronization       | Avoid race conditions, ensure cooperation        |
| Semaphores            | Used for synchronization via wait() and signal() |

---
