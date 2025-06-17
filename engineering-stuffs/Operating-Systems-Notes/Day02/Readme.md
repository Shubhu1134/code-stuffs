# 📘 Day 2: Process Management & CPU Scheduling – Operating Systems

---

## 📌 1. What is a Process?

A **process** is an instance of a program in execution. It includes:

- Program counter
- Stack (function calls)
- Heap (dynamic memory)
- Data section (global/static variables)

> Example: Opening Chrome creates a process with its own memory, execution state, and resources.

---

## 📌 2. Process States

A process typically transitions between the following **5 states**:

1. **New** – Being created
2. **Ready** – Waiting to be scheduled
3. **Running** – Currently executing
4. **Waiting** – Waiting for an event (e.g., I/O)
5. **Terminated** – Finished execution

---

## 📌 3. Process Control Block (PCB)

Each process has a **PCB** that contains:

| Field            | Description                     |
| ---------------- | ------------------------------- |
| Process ID (PID) | Unique identifier               |
| Process state    | New, Ready, Running, etc.       |
| Program counter  | Address of the next instruction |
| CPU registers    | Register data                   |
| Memory limits    | Memory allocated                |
| I/O status       | Devices and files used          |

---

## 📌 4. Context Switching

**Context switch** happens when CPU moves from one process to another.  
It involves saving the current process state and loading the new one.

> Overhead is incurred, but it's necessary for multitasking.

---

## 📌 5. Types of Schedulers

| Scheduler Type        | Role                                         |
| --------------------- | -------------------------------------------- |
| Long-term Scheduler   | Decides which jobs are admitted              |
| Short-term Scheduler  | Picks process from ready queue for execution |
| Medium-term Scheduler | Suspends/resumes processes                   |

---

## 📌 6. Scheduling Criteria

| Metric          | Description                       |
| --------------- | --------------------------------- |
| CPU Utilization | Keep CPU busy                     |
| Throughput      | Completed processes per unit time |
| Turnaround Time | Completion - Arrival time         |
| Waiting Time    | Time spent in ready queue         |
| Response Time   | First response - Arrival time     |

---

## 📌 7. Scheduling Algorithms

### 🔹 FCFS (First Come First Serve)

- Non-preemptive
- Simple, but can cause **convoy effect**

### 🔹 SJF (Shortest Job First)

- Optimal for average waiting time
- Can be **preemptive (SRTF)** or non-preemptive

### 🔹 Priority Scheduling

- Highest priority first
- **Starvation** possible → use **Aging** to prevent it

### 🔹 Round Robin (RR)

- Time quantum used
- Preemptive; ideal for time-sharing

### 🔹 Multilevel Queue

- Multiple queues for foreground/background
- Each with own scheduling algorithm

---

## 📌 8. CPU-Bound vs I/O-Bound

| Type      | Description                    |
| --------- | ------------------------------ |
| CPU-bound | More computation, less I/O     |
| I/O-bound | More I/O, less CPU computation |

Balanced mix ensures good CPU and I/O utilization.

---

## 📌 9. Preemptive vs Non-Preemptive

| Non-Preemptive              | Preemptive                      |
| --------------------------- | ------------------------------- |
| CPU is released voluntarily | CPU forcibly taken              |
| Simple to implement         | More responsive                 |
| Used in SJF, FCFS           | Used in RR, Preemptive Priority |

---

## 📌 10. Sample Problems to Try

- Calculate Waiting & Turnaround Times for:
  - FCFS
  - SJF
  - RR with given time quantum

---

## ✅ Summary Table

| Concept         | Description                       |
| --------------- | --------------------------------- |
| Process         | Program in execution              |
| PCB             | Holds process-specific info       |
| Context Switch  | Switching CPU between processes   |
| Scheduler       | Selects which process to execute  |
| CPU Utilization | % of CPU being used               |
| Throughput      | Processes completed per unit time |
| Waiting Time    | Time process waits in ready queue |

---

### 🔜 Up Next: Day 3 - Memory Management
