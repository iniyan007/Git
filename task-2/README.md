# 📘 Git Task-2 Completion: Using `.gitignore` and Tracking Files

## ✅ Task Status: **Completed Successfully**

---

## 🎯 Objective

- Create and configure a `.gitignore` file  
- Exclude specific files like `.env`, logs, and temporary files  
- Verify that ignored files are not tracked by Git  

---

## 🛠️ Implementation

### 1. Created `.gitignore` File

```gitignore
# Ignore environment files
.env

# Ignore log files
*.log

# Ignore temporary files
*.tmp
```

---

### 2. Created Project Files

| File Name   | Status      |
|------------|------------|
| `.gitignore` | Tracked ✅ |
| `README.md`  | Tracked ✅ |
| `index.js`   | Tracked ✅ |
| `.env`       | Ignored ❌ |

---

### 3. Verified Using `git status`

```bash
git status
```

### Output:

```bash
On branch task-2
Your branch is up to date with 'origin/task-2'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   .gitignore
        new file:   README.md
        new file:   index.js
```

### ✅ Observation:
- `.env` file is **not listed**, confirming it is ignored successfully.

---

### 4. Committed Changes

```bash
git commit -m "Task-2 completed"
```

### Output:

```bash
[task-2 4b2b48a] Task-2 completed
 3 files changed, 16 insertions(+)
 create mode 100644 task-2/.gitignore
 create mode 100644 task-2/README.md
 create mode 100644 task-2/index.js
```

---

## 🔐 Key Learning

- `.gitignore` prevents sensitive files (like `.env`) from being tracked  
- Ignored files do not appear in `git status`  
- Helps maintain clean and secure repositories  

---

## 📌 Conclusion

This task demonstrates:
- Proper use of `.gitignore`  
- Understanding of tracked vs ignored files  
- Verification using Git commands  

✔️ `.gitignore` configured correctly  
✔️ `.env` successfully ignored  
✔️ Required files committed  

---

## 🎉 Final Result

The task was successfully completed with all requirements met.  
