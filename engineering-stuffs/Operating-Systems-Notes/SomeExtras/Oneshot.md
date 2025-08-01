# 📘 Operating Systems Notes

---

## ✅ UNIT 1: Introduction to Operating System

### 1. Function of Operating Systems

- Manages hardware and software resources.
- Provides a stable environment for applications.
- Handles process management, memory, I/O, file systems, etc.

### 2. Evolution of Operating Systems

- **Serial processing** → **Batch systems** → **Multiprogramming** → **Time-sharing** → **Distributed systems** → **Mobile OS**

### 3. Types of Operating Systems

- **Batch OS**: No user interaction, jobs are processed in batches.
- **Time-Sharing OS**: Allows multiple users to use system simultaneously.
- **Distributed OS**: Resources distributed across multiple computers.
- **Real-Time OS**: Responds to input within a fixed time.
- **Network OS**: Provides services over network.
- **Mobile OS**: Designed for mobile devices.

### 4. Operating System Services

- Program execution
- I/O operations
- File system manipulation
- Communication
- Error detection
- Resource allocation
- Protection and security

### 5. System Calls

- Provide interface between user programs and OS.
- Types:

  - Process control (create, terminate)
  - File management (open, read, write)
  - Device management (request, release)
  - Information maintenance (get time, date)
  - Communication (send, receive messages)

### 6. System Programs

- Provide environment for program development and execution.
- Types:

  - File manipulation
  - Status information
  - Programming language support
  - Communication programs

### 7. OS Structure

- **Monolithic**: All OS services run in kernel space.
- **Layered**: OS divided into layers.
- **Microkernel**: Minimal OS runs in kernel mode, rest in user mode.
- **Modules**: Loadable kernel modules.
- **Hybrid**: Combination of monolithic and microkernel.

### 8. OS Operations

- Interrupt handling
- Dual-mode operation (user mode vs kernel mode)
- Timer for preventing infinite loops
- Device and resource management

### 9. Virtual Machines

- Abstraction of physical hardware.
- Allows multiple OS on single hardware.
- Examples: VirtualBox, VMware, Hyper-V

---

## ✅ UNIT 2: Process Management

### 1. Process Concept

- A process is a program in execution.
- Has PCB (Process Control Block) with process details.

### 2. Process Scheduling

- Determines which process runs next.
- Types:

  - Long-term
  - Short-term
  - Medium-term

### 3. Scheduling Criteria

- CPU utilization
- Throughput
- Turnaround time
- Waiting time
- Response time

### 4. Scheduling Algorithms

- **FCFS** – First Come First Serve
- **SJF** – Shortest Job First
- **Priority** – Based on priority
- **Round Robin** – Time slicing
- **Multilevel Queue**

### 5. Threads

- Light-weight process.
- Share same memory but have own registers.
- Types:

  - User threads
  - Kernel threads

### 6. Multithreading Models

- Many-to-One
- One-to-One
- Many-to-Many

### 7. Interprocess Communication (IPC)

- Mechanism to allow processes to communicate.
- Methods:

  - Shared Memory
  - Message Passing

### 8. Process Synchronization

- Ensures orderly execution when processes share resources.
- Critical Section Problem – Only one process in critical section at a time.

### 9. Synchronization Tools

- Semaphores
- Mutex
- Monitors

### 10. Classical Synchronization Problems

- Producer-Consumer
- Readers-Writers
- Dining Philosophers

### 11. Deadlock

- Processes wait indefinitely for resources.

### 12. Deadlock Handling

- **Prevention** – Negate one of four necessary conditions.
- **Avoidance** – Banker’s Algorithm.
- **Detection & Recovery**

---

## ✅ UNIT 3: Memory Management

### 1. Memory Management Background

- Main memory: volatile, fast access.
- Managed by OS to allocate memory to processes.

### 2. Swapping

- Moving processes between main memory and disk.

### 3. Contiguous Memory Allocation

- Each process in one contiguous block.
- Strategies: First-fit, Best-fit, Worst-fit.

### 4. Paging

- Divides memory into fixed-size blocks (pages/frames).
- Removes external fragmentation.

### 5. Segmentation

- Divides memory based on logical divisions (code, data, stack).

### 6. Virtual Memory

- Uses disk as extension of RAM.
- Processes can execute without being entirely in memory.

### 7. Demand Paging

- Pages loaded only when needed.

### 8. Page Replacement Algorithms

- FIFO, LRU, Optimal

### 9. Thrashing

- Excessive paging reduces performance.

---

## ✅ UNIT 4: Storage Management

### 1. File Concept

- Files are stored data with attributes (name, type, size).

### 2. File Access Methods

- Sequential
- Direct
- Indexed

### 3. Directory Structure

- Single-level
- Two-level
- Tree
- Acyclic Graph
- General Graph

### 4. File System Mounting

- Make file system available to OS.

### 5. File Sharing and Protection

- Access rights (read, write, execute).

### 6. Allocation Methods

- Contiguous
- Linked
- Indexed

### 7. Free Space Management

- Bit Map
- Linked List
- Grouping
- Counting

### 8. Disk Structure and Scheduling

- Disk Scheduling:

  - FCFS
  - SSTF
  - SCAN
  - C-SCAN
  - LOOK
  - C-LOOK

### 9. RAID

- Redundant Array of Independent Disks
- RAID levels (0–6) for performance & redundancy

---

## ✅ UNIT 5: Security and Protection

### 1. Goals

- Ensure system integrity, confidentiality, and availability.

### 2. Protection

- Mechanisms to control access to resources.
- Access control matrix, ACLs, capability lists.

### 3. Security

- Defense against threats.

### 4. Types of Threats

- Trojan horses, viruses, worms, denial-of-service, spoofing, phishing.

### 5. Authentication

- User identification:

  - Passwords
  - Biometrics
  - Two-factor authentication

### 6. Encryption

- Protect data in transit or storage.
- Symmetric & Asymmetric key cryptography.

### 7. Firewalls

- Protect internal network from external threats.

### 8. Audit Trails

- Logs user/system activity for monitoring.

### 9. Security Policies

- Define rules for secure system behavior.

---

## ✅ UNIT 6: I/O System and Device Management

### 1. Introduction

- Manages CPU-device communication.

### 2. I/O Hardware

- Devices: keyboard, mouse, disk, USB, etc.
- Controller: handles data transfer.

### 3. I/O Communication Techniques

- Programmed I/O
- Interrupt-driven I/O
- Direct Memory Access (DMA)

### 4. I/O Software Layers

- User-level
- Device-independent
- Drivers
- Interrupt Handlers

### 5. Device Drivers

- Interface between OS and hardware.
- Handles read, write, error, init, etc.

### 6. Buffering

- Smooth speed mismatch.
- Types: single, double, circular.

### 7. Caching

- Stores frequent data for fast access.

### 8. Spooling

- Queues data to devices (e.g., printers).

### 9. Error Handling

- Retry, fallback, logs, etc.

### 10. I/O Protection

- Restrict unauthorized access.

### 11. Disk Performance

- Seek time, latency, transfer rate.

### 12. I/O System Calls

- read(), write(), ioctl(), open(), close()

---
