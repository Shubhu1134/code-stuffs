# 📘 Day 4: CPU Scheduling Algorithms

---

## 🔹 What is CPU Scheduling?

CPU scheduling determines which process will run next on the CPU when multiple processes are in the **ready queue**.

> 🚀 The main goal is to maximize CPU utilization and throughput, and minimize waiting time, response time, and turnaround time.

---

## 🔸 Scheduling Criteria

| Criteria        | Description                                 |
| --------------- | ------------------------------------------- |
| CPU Utilization | Keep the CPU as busy as possible            |
| Throughput      | Number of processes completed per time unit |
| Turnaround Time | Time from submission to completion          |
| Waiting Time    | Time process waits in ready queue           |
| Response Time   | Time from submission to first response      |
| Fairness        | All processes get fair share of CPU         |

---

## 🔄 Types of Scheduling Algorithms

---

### 1. **First-Come, First-Served (FCFS)**

- Processes are served in the order they arrive
- Non-preemptive

📉 **Drawback**: Long waiting time for short processes (convoy effect)

---

### 2. **Shortest Job Next (SJN) / Shortest Job First (SJF)**

- Process with the **shortest burst time** is executed first
- Can be preemptive (**Shortest Remaining Time First**) or non-preemptive

✅ Optimal in minimizing waiting time  
❌ Requires knowledge of future burst times

---

### 3. **Round Robin (RR)**

- Each process gets a **fixed time slice (quantum)**
- Preemptive

✅ Good for time-sharing systems  
❌ Too small quantum → high overhead; too big → FCFS

---

### 4. **Priority Scheduling**

- Each process is assigned a priority
- Process with the **highest priority** runs first

❌ Starvation possible  
✅ Can use **aging** to prevent starvation

---

### 5. **Multilevel Queue Scheduling**

- Multiple queues based on priority/type
- Queues can be handled independently with their own scheduling algorithms

---

### 🔍 Example Comparison (Gantt Chart)

Assume 3 processes:  
P1 = 10ms, P2 = 5ms, P3 = 2ms (arrival at time 0)

- **FCFS**: `P1 → P2 → P3` → Total waiting time = 0 + 10 + 15 = 25
- **SJF**: `P3 → P2 → P1` → Total waiting time = 0 + 2 + 7 = 9

---

## ⚙️ Summary Table

| Algorithm | Preemptive | Optimal For               | Drawback                    |
| --------- | ---------- | ------------------------- | --------------------------- |
| FCFS      | ❌         | Simplicity                | Long waiting for short jobs |
| SJF       | ✔️ / ❌    | Minimal avg. waiting time | Hard to predict burst time  |
| RR        | ✔️         | Fairness, responsiveness  | Depends on time quantum     |
| Priority  | ✔️ / ❌    | Important processes first | Starvation of low priority  |

---
