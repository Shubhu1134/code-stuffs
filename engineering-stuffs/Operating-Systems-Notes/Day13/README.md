# 📘 Day 13: Deadlocks – Concepts, Detection & Prevention

---

## 🔒 What is a Deadlock?

A **deadlock** is a situation in which a group of processes are **permanently blocked** because each process is holding a resource and waiting for another.

---

## 🎯 Conditions for Deadlock (Coffman Conditions)

All 4 must hold simultaneously:

1. **Mutual Exclusion** – At least one resource is non-shareable.
2. **Hold and Wait** – A process is holding one resource while waiting for another.
3. **No Preemption** – Resources cannot be forcibly taken from a process.
4. **Circular Wait** – A circular chain of processes exists, each waiting for a resource held by the next.

---

## 🔁 Resource Allocation Graph (RAG)

- Used to model deadlocks.
- Vertices: Processes (circles), Resources (squares).
- Edge P → R = Request
- Edge R → P = Allocation

🔸 **Cycle in RAG**:

- For single instance of each resource → **deadlock exists**
- For multiple instances → cycle _may_ lead to deadlock

---

## 🧩 Deadlock Handling Strategies

### 1. **Deadlock Prevention**

- Ensure at least one Coffman condition **never holds**.

| Condition        | Prevention Strategy                                    |
| ---------------- | ------------------------------------------------------ |
| Mutual Exclusion | Use shareable resources                                |
| Hold & Wait      | Allocate all at once or require release before request |
| No Preemption    | Forcefully remove resource if needed                   |
| Circular Wait    | Impose resource ordering (e.g., R1 < R2 < R3)          |

---

### 2. **Deadlock Avoidance**

Use **Banker’s Algorithm**:

- Each process declares **maximum resource needs**.
- System checks if allocation keeps it in a **safe state**.

#### Safe State

- A sequence exists to execute all processes without deadlock.

---

### 3. **Deadlock Detection and Recovery**

- Allow deadlock to occur, then **detect and recover**.

#### Detection:

- For single resource instance: Use cycle detection in RAG.
- For multiple instances: Use **Wait-For Graph** or Banker-like algorithm.

#### Recovery Methods:

- **Kill processes** (one-by-one or all)
- **Preempt resources**
- **Rollback** process to a safe state

---

## 🧠 Starvation vs Deadlock

| Feature    | Starvation                              | Deadlock                               |
| ---------- | --------------------------------------- | -------------------------------------- |
| Cause      | Indefinite waiting (e.g., low priority) | Circular wait for resources            |
| Detection  | Hard to detect                          | Detectable with algorithms (e.g., RAG) |
| Resolution | Use aging                               | Avoid, prevent, or detect & recover    |

---

## ✅ Key Takeaways

- Deadlocks arise due to four specific conditions.
- Prevention and avoidance are better than recovery.
- Banker’s algorithm and resource allocation graphs are core concepts.
