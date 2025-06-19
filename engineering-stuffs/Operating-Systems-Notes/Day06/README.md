# 📘 Day 6: Deadlock in Operating Systems

---

## 🔒 What is Deadlock?

A **deadlock** is a situation in which a group of processes are all waiting for each other to release resources, but none can proceed.

> 🔁 Circular waiting where each process is blocked by the next.

---

## 🧠 Conditions for Deadlock

A deadlock **can occur** if all 4 conditions hold **simultaneously**:

| Condition           | Description                                        |
| ------------------- | -------------------------------------------------- |
| 1. Mutual Exclusion | At least one resource must be non-shareable        |
| 2. Hold and Wait    | Process holding resources while waiting for others |
| 3. No Preemption    | Resources cannot be forcibly taken away            |
| 4. Circular Wait    | A set of processes are waiting in a circular chain |

---

## 🔄 Resource Allocation Graph (RAG)

- **Vertices**: Processes (circles), Resources (squares)
- **Edges**:
  - Request edge: P → R
  - Assignment edge: R → P

### Deadlock Detection:

- If **no cycle** in RAG → No deadlock
- If **cycle exists**:
  - With 1 instance per resource → Deadlock
  - With multiple instances → Possibly deadlock

---

## 🧯 Methods for Handling Deadlock

### 1. **Deadlock Prevention** (Negate one of the 4 conditions)

| Condition        | Prevention Strategy                   |
| ---------------- | ------------------------------------- |
| Mutual Exclusion | Make resources sharable               |
| Hold and Wait    | Request all resources at once         |
| No Preemption    | Forcefully release resource if needed |
| Circular Wait    | Impose ordering on resource requests  |

---

### 2. **Deadlock Avoidance** – _Banker’s Algorithm_

- Each process must declare **maximum resource need** in advance.
- System only allocates resources if it leads to a **safe state**.

#### Safe State:

A state where all processes can complete without leading to deadlock.

---

### 3. **Deadlock Detection and Recovery**

- Allow deadlock to occur, then detect and recover.

#### Detection:

- Check for cycles in the resource allocation graph.
- Use algorithms (like Banker's deadlock detection version) to detect.

#### Recovery:

- Abort a process or forcibly take resources (preemption).

---

### 4. **Ignore Deadlock** – "Ostrich Algorithm"

- Used in UNIX, Linux.
- If chance of deadlock is minimal, **do nothing**.

---

## ⚙️ Banker’s Algorithm (Brief)

- Based on process maximum needs and available resources.
- System checks whether granting resources will leave it in a **safe state**.
- If not, the process must wait.

---

## 🔁 Summary Table

| Method               | Approach           | Pros                       | Cons                      |
| -------------------- | ------------------ | -------------------------- | ------------------------- |
| Prevention           | Deny one condition | Guarantees safety          | May reduce resource usage |
| Avoidance            | Use safe state     | Avoids deadlock completely | Requires future knowledge |
| Detection & Recovery | Handle after fact  | Efficient use of resources | Costly detection/recovery |
| Ignorance            | Do nothing         | Simple, efficient          | Risky in critical systems |

---

## 🧪 Deadlock vs Starvation

| Feature   | Deadlock                       | Starvation                                  |
| --------- | ------------------------------ | ------------------------------------------- |
| Cause     | Cyclic waiting of resources    | Process waiting indefinitely                |
| Detection | Can be detected via algorithms | Harder to detect                            |
| Recovery  | Needs external intervention    | Avoided using fair scheduling (e.g., aging) |

---

## ✅ Key Takeaways

- Deadlocks arise from the interaction of multiple resource-holding processes.
- Prevention, Avoidance, and Detection are key techniques to manage it.
- Avoidance (like Banker’s Algorithm) works best in systems with predictable workloads.
