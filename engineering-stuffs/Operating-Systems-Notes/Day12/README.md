# 📘 Day 12: I/O Systems & Interrupt Handling

---

## 🔌 What is an I/O System?

- An I/O System allows the OS to communicate with external devices (disk, keyboard, mouse, network, etc.).
- Handles **input/output operations**, **device management**, and **interrupt handling**.

---

## 🖥️ Types of I/O Devices

1. **Block Devices**

   - Store data in blocks (e.g., hard disks, SSDs)
   - Random access

2. **Character Devices**

   - Stream of characters (e.g., keyboard, mouse)
   - Sequential access

3. **Network Devices**
   - Communicate with other systems

---

## ⚙️ I/O Techniques

### 1. **Programmed I/O (PIO)**

- CPU actively waits and checks the status of the I/O device.
- Inefficient, CPU is blocked.

### 2. **Interrupt-Driven I/O**

- Device sends an **interrupt** signal to CPU when it’s ready.
- CPU executes an **interrupt handler**.
- More efficient than PIO.

### 3. **Direct Memory Access (DMA)**

- Device communicates **directly with memory**, bypassing the CPU.
- CPU sets up DMA controller and continues other tasks.
- Used for **fast I/O operations**.

---

## 🚨 What is an Interrupt?

An **interrupt** is a signal from hardware or software to the CPU indicating an event that needs attention.

### Types:

- **Hardware Interrupt** – from devices (e.g., I/O complete)
- **Software Interrupt** – triggered by program/system call

---

## 🧠 Interrupt Handling Steps

1. Device signals interrupt to CPU.
2. CPU:
   - Saves current state (Program Counter, registers)
   - Transfers control to the **Interrupt Service Routine (ISR)**
3. ISR executes required service
4. CPU restores previous state and resumes execution

---

## 🧩 Interrupt Vector Table

- Stores addresses of all ISRs.
- Helps CPU quickly jump to the correct routine when an interrupt occurs.

---

## 🔁 Polling vs Interrupts

| Feature     | Polling                      | Interrupts            |
| ----------- | ---------------------------- | --------------------- |
| Method      | CPU repeatedly checks device | Device interrupts CPU |
| CPU Usage   | Wasted CPU cycles            | Efficient use of CPU  |
| Performance | Poor for multiple devices    | Better scalability    |

---

## 📦 Device Drivers

- Software that allows OS to interact with hardware.
- Translates generic I/O instructions into device-specific commands.

---

## 🧠 Buffering in I/O

- Temporary storage area between sender and receiver
- Used when:
  - Producer and consumer operate at different speeds
  - Device can’t keep up with data rate

---

## ✅ Key Takeaways

- Interrupts increase efficiency by allowing CPU to perform other tasks.
- DMA enables high-speed I/O with minimal CPU intervention.
- Device drivers and buffering are essential for smooth I/O operations.
