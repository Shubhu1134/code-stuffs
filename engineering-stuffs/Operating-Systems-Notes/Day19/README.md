# 📘 Day 19: Disk Scheduling Algorithms

---

## 💿 What is Disk Scheduling?

Disk scheduling algorithms determine the **order in which disk I/O requests** are serviced.  
Objective: Minimize total **seek time** and **response time**.

---

## 🔍 Key Terms

| Term                   | Description                                                     |
| ---------------------- | --------------------------------------------------------------- |
| **Seek Time**          | Time to move disk arm to the desired track                      |
| **Rotational Latency** | Time for the desired sector to rotate under the read-write head |
| **Transfer Time**      | Time to transfer data to/from disk                              |

---

## 🚀 Disk Scheduling Algorithms

---

### 1. **FCFS (First-Come, First-Served)**

- Requests are serviced in the order they arrive.

**Example:**  
Head = 50, Requests = [82, 170, 43, 140, 24, 16, 190]  
Movement = 50→82→170→43→140→24→16→190

✅ Simple  
❌ Long total seek time

---

### 2. **SSTF (Shortest Seek Time First)**

- Services the request **closest** to current head position.

✅ Better than FCFS  
❌ May cause **starvation**

---

### 3. **SCAN (Elevator Algorithm)**

- Head moves in one direction, servicing all requests, then reverses.

✅ Fair & reduces starvation  
✅ Efficient in heavy loads

---

### 4. **LOOK**

- Like SCAN, but reverses direction when there are **no more requests** in current direction.

✅ Avoids unnecessary head movement  
✅ More efficient than SCAN

---

### 5. **C-SCAN (Circular SCAN)**

- Moves in one direction and **jumps to start** without servicing on the return.

✅ More uniform wait time  
❌ Slightly longer overall seek

---

### 6. **C-LOOK**

- Like C-SCAN, but only goes as far as the **last request** in the direction.

✅ Avoids full sweep  
✅ Fast and efficient

---

## 🧮 Example Walkthrough (SSTF)

Head Start: 50  
Requests: [82, 170, 43, 140, 24, 16, 190]

Order of service (shortest seek first):  
50 → 43 → 24 → 16 → 82 → 140 → 170 → 190

Total Seek Distance = |50-43| + |43-24| + ... = 208

---

## 📊 Comparison Table

| Algorithm | Best For         | Worst Case                 | Starvation Risk | Efficiency  |
| --------- | ---------------- | -------------------------- | --------------- | ----------- |
| FCFS      | Low loads        | High seek time             | ❌ No           | 😐 Medium   |
| SSTF      | Moderate loads   | Long wait for far requests | ✅ Yes          | ✅ High     |
| SCAN      | Heavy loads      | Long sweep                 | ❌ No           | ✅ High     |
| LOOK      | Better than SCAN | Far requests only          | ❌ No           | ✅✅ Better |
| C-SCAN    | Uniform access   | High total movement        | ❌ No           | ✅ High     |
| C-LOOK    | Optimized C-SCAN | Far requests only          | ❌ No           | ✅✅ Best   |

---

## ✅ Key Takeaways

- **SSTF** is better than FCFS, but may starve.
- **SCAN/LOOK** are preferred for fairness.
- **C-LOOK** offers high performance and low overhead.
- Choice depends on workload and priority.
