# 🧠 Computer Organization & Architecture – Day 01

## 📌 UNIT 1: Basic Structure of Computer

---

### 🔹 1. Structure of Desktop Computers

A basic computer system includes:

- **Central Processing Unit (CPU)** – Controls all operations.
- **Main Memory (RAM)** – Stores data and instructions temporarily.
- **Secondary Storage** – Hard disk, SSD, used for permanent storage.
- **Input/Output Devices** – Keyboard, mouse, printer, display.
- **System Bus** – Interconnects CPU, memory, and I/O.

---

### 🔹 2. CPU: General Register Organization

Registers are small, fast memory units inside the CPU used to hold temporary data and instructions.

- **Program Counter (PC):** Holds address of next instruction.
- **Instruction Register (IR):** Holds currently executing instruction.
- **Memory Address Register (MAR):** Holds address for memory access.
- **Memory Data Register (MDR):** Holds data to/from memory.
- **General-Purpose Registers (R0 - Rn):** Used for arithmetic/data manipulation.
- **Control Word Register:** Holds control signals for operations.

---

### 🔹 3. Stack Organization

Stack follows **Last-In-First-Out (LIFO)**.

- **Push:** Add data onto stack.
- **Pop:** Remove data from stack.
- Used for: function calls, recursion, interrupts.

---

### 🔹 4. Instruction Format

An instruction format defines how a computer instruction is structured.

**Typical Fields:**

- **Opcode** – Operation code (what to do)
- **Source Operand** – Source register/memory
- **Destination Operand** – Result register
- **Address Field** – Immediate or memory address

---

### 🔹 5. ALU – Arithmetic Logic Unit

Responsible for performing arithmetic and logical operations:

- Arithmetic: `ADD`, `SUB`, `INC`, `DEC`, `MUL`, `DIV`
- Logical: `AND`, `OR`, `NOT`, `XOR`

---

### 🔹 6. I/O System

Provides interface to external devices:

- Handled via ports, buses, and I/O instructions.
- Two methods: **Memory-mapped I/O** and **Isolated I/O**

---

### 🔹 7. Bus Structure

**Bus** is a set of parallel wires for data transfer:

- **Data Bus** – Carries data (bi-directional)
- **Address Bus** – Carries address (unidirectional)
- **Control Bus** – Carries control signals (read/write)

---

### 🔹 8. Register Transfer Language (RTL)

Used to specify operations in microarchitecture level.

#### Example RTL Operations:

- `R1 ← R2` → Copy content of R2 to R1
- `M[AR] ← R1` → Store value of R1 into memory at address AR
- `DR ← M[AR]` → Load from memory to Data Register

---

### 🔹 9. Bus and Memory Transfer

#### Read:

---

## ✅ Practice Questions

1. What is the role of MAR and MDR?
2. Differentiate between control bus and data bus.
3. Write RTL for transferring data from R3 to memory location M[500].

---

## ✅ Sample MCQ

**Q:** Which component holds the address of the next instruction to be executed?  
**A.** IR  
**B.** MDR  
**C.** PC  
**D.** MAR  
✅ **Answer:** C

---

## 📚 Summary

- Desktop computers consist of CPU, memory, storage, I/O.
- CPU uses registers like PC, IR, MAR, MDR.
- Stack is used for temporary LIFO storage.
- Instruction format determines how an instruction is decoded.
- RTL describes low-level register operations.

---
