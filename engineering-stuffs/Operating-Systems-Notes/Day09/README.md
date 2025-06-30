# 📘 Day 9: Page Replacement Algorithms (Continued) & Thrashing

---

## 🔁 Recap: Page Replacement

When a **page fault** occurs and memory is full, the OS must **replace a page**. The goal is to **minimize page faults**.

---

## 🧠 Page Replacement Algorithms (In-depth)

### 🔹 1. FIFO (First-In, First-Out)

- Replaces the oldest loaded page.
- May lead to **Belady’s Anomaly**.

**Example:**

---

### 🔹 2. LRU (Least Recently Used)

- Replaces the page **not used for the longest time**.
- Requires **tracking access times**.

**Example:**
