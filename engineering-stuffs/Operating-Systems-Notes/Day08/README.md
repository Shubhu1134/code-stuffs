# 📘 Day 8: Virtual Memory – Demand Paging & Page Replacement

---

## 🧠 What is Virtual Memory?

- Technique that gives programs the illusion of having **more memory than physically available**.
- Uses **secondary storage (disk)** to extend memory via paging.

---

## 🔁 Demand Paging

- **Pages** are loaded into memory **only when needed**, not in advance.
- If a page is not in memory → **Page Fault** occurs.
- Useful because many pages may never be used during execution.

---

## 🛠️ Page Fault Handling

When a page fault occurs, the OS:

1. Pauses the faulting process.
2. Finds which page to **replace** in memory.
3. Reads the required page from disk into memory.
4. Updates page tables and resumes the process.

---

## 📊 Page Replacement Algorithms

### 1. FIFO (First-In, First-Out)

- Replaces the **oldest** page in memory first.
- Simple, but may replace frequently used pages.

---

### 2. LRU (Least Recently Used)

- Replaces the page that **has not been used for the longest time**.
- Good performance; requires tracking use-time.

---

### 3. Optimal (Belady’s)

- Replaces the page that **won’t be used for the longest time in the future**.
- Theoretical best but not practical (needs future knowledge).

---

### 4. Clock (Second Chance)

- Circular list of pages with **use bits**.
- If a page’s use bit is 1 → set it to 0 and skip.
- If 0 → replace that page.

---

## 🧩 Belady’s Anomaly

- For **FIFO**, increasing the number of frames **can increase page faults**.
- Not seen in LRU or OPT.

---

## 🧾 Metrics

- **Page Fault Rate** = (# page faults) / (# memory references)
- **Effective Access Time** considers hits and page faults.

---

## ✅ Summary Table

| Algorithm | Pros                              | Cons                             |
| --------- | --------------------------------- | -------------------------------- |
| FIFO      | Simple to implement               | Can remove frequently used pages |
| LRU       | Good performance                  | Overhead for tracking use times  |
| OPT       | Minimal fault rate                | Requires future knowledge        |
| Clock     | Approx LRU, performance-efficient | Slightly more complex            |

---

## 📌 Key Takeaways

- Virtual Memory enables large logical memory via disk page loading.
- Effective page replacement is critical to performance.
- Only Clock and LRU are widely used in modern systems.
