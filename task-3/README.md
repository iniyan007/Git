# 📘 Git Task-3: Undoing Changes and Reverting Commits

## ✅ Task Status: **Completed Successfully (Branch: `task-3`)**

---

## 🎯 Objective

* Undo changes in the working directory
* Undo commits safely
* Understand the difference between `restore`, `revert`, and `reset`

---

## 🛠️ Implementation

---

## 🔹 Step 1: Switch to Task-3 Branch

```bash
git switch task-3
```

### Output:

```
branch 'task-3' set up to track 'origin/task-3'.
Switched to a new branch 'task-3'
```

---

## 🔹 Step 2: Initial Commit

```bash
git add .
git commit -m "First commit"
```

### Output:

```
[task-3 0d46ac7] First commit
 2 files changed, 11 insertions(+)
 create mode 100644 task-3/README.md
 create mode 100644 task-3/index.html
```

---

## 🔹 Step 3: Undo Changes in Working Directory

```bash
git restore index.html
```

### ✅ Observation:

* No changes were present, so nothing was undone
* Working directory remained clean

---

## 🔹 Step 4: Push Changes to Remote

```bash
git push
```

---

## 🔹 Step 5: Make Another Commit

```bash
git add .
git commit -m "second commit"
```

### Output:

```
[task-3 3303b85] second commit
 1 file changed, 2 insertions(+)
```

---

## 🔹 Step 6: Revert the Last Commit (Safe Undo)

```bash
git revert HEAD
```

### Output:

```
[task-3 785da3a] Revert "second commit"
 1 file changed, 2 deletions(-)
```

### ✅ Observation:

* A **new commit** was created
* Previous changes were safely reversed
* History remains intact

---

## 🔹 Step 7: Add Another Commit

```bash
git add .
git commit -m "third commit after revert command"
```

### Output:

```
[task-3 c89ddd9] third commit after revert command
 1 file changed, 1 insertion(+)
```

---

## 🔹 Step 8: Push Changes

```bash
git push
```

---

## 🔹 Step 9: Undo Commit Using Reset

```bash
git reset --soft HEAD~1
git reset --soft HEAD~2
```

### ✅ Observation:

* Commits were removed locally
* Changes were still preserved in staging area
* No data loss occurred

---

## 🔹 Step 10: Sync with Remote

```bash
git fetch
git pull
```

### Output:

```
Updating 0d46ac7..c89ddd9
Fast-forward
 task-3/index.html | 1 +
 1 file changed, 1 insertion(+)
```

---

## 🧠 Key Concepts Learned

---

### 🔸 1. Undo Working Directory Changes

```bash
git restore <file>
```

✔ Restores file to last committed state
✔ Does not affect commit history

---

### 🔸 2. Revert Commit (Safe Method)

```bash
git revert HEAD
```

✔ Creates a new commit
✔ Safe for shared repositories
✔ Maintains history

---

### 🔸 3. Reset Commit (Advanced Method)

```bash
git reset --soft HEAD~1
```

✔ Removes commit
✔ Keeps changes staged

```bash
git reset --hard HEAD~1
```

⚠ Removes commit and changes permanently

---

## ⚖️ Difference Between Methods

| Feature          | `git restore` | `git revert` | `git reset`         |
| ---------------- | ------------- | ------------ | ------------------- |
| Scope            | File changes  | Commit undo  | Commit removal      |
| History affected | ❌ No          | ✅ Yes        | ✅ Yes               |
| Safe for remote  | ✅ Yes         | ✅ Yes        | ❌ No                |
| Data loss risk   | ❌ No          | ❌ No         | ⚠️ Yes (hard reset) |

---

## 📌 Summary

* Used `git restore` to undo file changes
* Used `git revert` to safely undo a commit
* Used `git reset --soft` to experiment with commit removal
* Synced changes using `git fetch` and `git pull`

---

## 🎉 Conclusion

This task demonstrates:

* Practical understanding of undoing changes in Git
* Safe vs unsafe ways to undo commits
* Real-world usage of `restore`, `revert`, and `reset`

✔ All requirements successfully completed
✔ Commands tested and verified
