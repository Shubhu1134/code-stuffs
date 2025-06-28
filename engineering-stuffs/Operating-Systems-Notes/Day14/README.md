# 📘 Day 14: Deadlock Avoidance – Banker's Algorithm

---

## 🧠 What is Deadlock Avoidance?

Deadlock **avoidance** ensures the system will **never enter an unsafe state** by carefully analyzing resource allocation decisions _before_ they are made.

---

## 💰 Banker’s Algorithm – Overview

Named after how a banker evaluates loan requests based on availability of funds.

### 🔹 Goal:

Decide whether a resource allocation will leave the system in a **safe state**.

---

## 🔄 Key Terms:

| Term       | Description                                   |
| ---------- | --------------------------------------------- |
| Max        | Maximum demand of each process                |
| Allocation | Currently allocated resources to each process |
| Need       | Remaining resources needed = Max - Allocation |
| Available  | Total available resources in the system       |

---

## ✅ Safe State

A state where the system can allocate resources to every process in some order and **avoid deadlock**.

> If the system is in a safe state → no deadlock.  
> If the system is in an unsafe state → deadlock may occur.

---

## 🧮 Data Structures Used

For **n** processes and **m** resource types:

- `Available[m]`
- `Max[n][m]`
- `Allocation[n][m]`
- `Need[n][m] = Max[n][m] - Allocation[n][m]`

---

## 📝 Safety Algorithm

1. **Initialize**:

   - Work = Available
   - Finish[i] = false for all i

2. **Find a process** `i` such that:

   - `Finish[i] == false`
   - `Need[i] <= Work`

3. If found:

   - Work += Allocation[i]
   - Finish[i] = true
   - Repeat step 2

4. If all Finish[i] == true → safe state  
   Else → unsafe state

---

## 🔁 Resource-Request Algorithm

When a process `P[i]` requests resources `Request[i]`:

1. If `Request[i] <= Need[i]` → valid request
2. If `Request[i] <= Available` → resources are available
3. Pretend to allocate:
   - Available -= Request[i]
   - Allocation[i] += Request[i]
   - Need[i] -= Request[i]
4. Run Safety Algorithm
   - If system is still safe → grant request
   - Else → rollback (do not grant)

---

## 🧪 Example

Given:
