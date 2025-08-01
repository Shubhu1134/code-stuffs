# 📘 Operating Systems – Unit 3 Notes

## ✅ UNIT 3: CPU Scheduling

---

### 1. Introduction to CPU Scheduling

**CPU scheduling** is the process by which the operating system decides which process gets the CPU when multiple processes are ready.

> Objective: Maximize CPU utilization and throughput, minimize waiting time, turnaround time, and response time.

---

### 2. Scheduling Criteria

| Criteria            | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| **CPU Utilization** | Keep the CPU as busy as possible (goal: 100%)                |
| **Throughput**      | Number of processes completed per time unit                  |
| **Turnaround Time** | Time from submission to completion of a process              |
| **Waiting Time**    | Total time a process waits in the ready queue                |
| **Response Time**   | Time from request to first response (important in real-time) |
| **Fairness**        | Equal CPU time for all processes                             |

---

### 3. Scheduling Algorithms

#### A. First Come First Serve (FCFS)

- Non-preemptive
- Processes served in order of arrival

##### Drawback:

- **Convoy effect**: Short jobs wait behind long jobs

---

#### B. Shortest Job Next (SJN) or Shortest Job First (SJF)

- Non-preemptive
- Process with smallest burst time scheduled first

##### Optimal in terms of average waiting time, but:

- Requires knowledge of future burst time (not practical)

---

#### C. Shortest Remaining Time First (SRTF)

- Preemptive version of SJF
- If a new process arrives with shorter remaining time, preempts current

---

#### D. Round Robin (RR)

- Each process gets a small unit of CPU time (Time Quantum)
- After this time, process is preempted and added to the end of the ready queue

##### Ideal for:

- Time-sharing systems

---

#### E. Priority Scheduling

- Each process assigned a priority
- Highest priority process scheduled first

##### Types:

- **Preemptive**
- **Non-preemptive**

##### Starvation:

- Low priority processes may never execute

##### Solution:

- **Aging**: Gradually increase priority over time

---

### 4. Comparison of Scheduling Algorithms

| Algorithm | Preemptive | Starvation | Fairness | Best for                  |
| --------- | ---------- | ---------- | -------- | ------------------------- |
| FCFS      | ❌         | ❌         | ✅       | Simple batch systems      |
| SJF       | ❌         | ✅         | ❌       | Minimum avg waiting time  |
| SRTF      | ✅         | ✅         | ❌       | Theoretically optimal     |
| RR        | ✅         | ❌         | ✅       | Time-sharing environments |
| Priority  | ✅ / ❌    | ✅         | ❌       | Real-time systems         |

---

### 5. Multilevel Queue Scheduling

- Processes divided into **multiple queues** based on type (foreground, background, etc.)
- Each queue has its own scheduling algorithm
- Fixed priority between queues

##### Example:

| Queue       | Scheduling |
| ----------- | ---------- |
| System      | RR         |
| Interactive | RR         |
| Batch       | FCFS       |

---

### 6. Multilevel Feedback Queue Scheduling

- Like multilevel queue, **but allows movement** between queues
- Dynamic adjustment of priority

##### Used in:

- Complex systems where process behavior changes over time

---

### 7. Real-Time Scheduling

- **Hard real-time systems**: Must meet deadlines (e.g., medical equipment)
- **Soft real-time systems**: Preferably meet deadlines (e.g., video playback)

##### Algorithms:

- Rate Monotonic Scheduling (RMS)
- Earliest Deadline First (EDF)

---

### 8. Context Switching (Recap)

When the CPU switches from one process to another:

- Save state (PCB of old process)
- Load state (PCB of new process)

This introduces **overhead** but is necessary for multitasking.

---

## 📌 Summary Table

| Term            | Meaning                        |
| --------------- | ------------------------------ |
| FCFS            | First come first serve         |
| SJF/SJN         | Shortest job first             |
| SRTF            | Shortest remaining time first  |
| RR              | Round robin                    |
| Priority        | Based on predefined priority   |
| MLFQ            | Multilevel feedback queue      |
| Throughput      | Completed processes per time   |
| Turnaround Time | Completion time - Arrival time |
| Waiting Time    | Turnaround time - Burst time   |

---
