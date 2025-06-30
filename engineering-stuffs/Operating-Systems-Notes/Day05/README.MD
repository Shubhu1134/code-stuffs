# 📘 Day 5: Process Synchronization

---

## 🔹 What is Process Synchronization?

When multiple processes access **shared resources** (e.g., variables, files), synchronization ensures **data consistency** and prevents race conditions.

> ⚠️ Without proper synchronization, outcomes may vary depending on execution order.

---

## 🌀 Race Condition

A **race condition** occurs when multiple processes/threads read and write shared data simultaneously, and the final result depends on the timing of their execution.

**Example:**

```c
// Two threads incrementing counter
counter++; // read → increment → write (non-atomic)
```
