# 📘 Git Task-4: Simulating and Resolving Merge Conflicts

### 🌿 Branches Used:

* `task-4` (main working branch)
* `task-4-branch-2` (sub-branch from same base commit)

---

## 🎯 Objective

* Create a merge conflict scenario
* Modify the same line in two branches
* Merge branches and observe conflict
* Resolve conflict manually using Git tools

---

## 🛠️ Implementation Steps

---

## 🔹 Step 1: Create and Switch to Branch

```bash
git switch task-4
```

---

## 🔹 Step 2: Create Sub-Branch

```bash
git switch task-4-branch-2
```

✔ Both branches originate from the same commit

---

## 🔹 Step 3: Modify Same File in Both Branches

### 📁 File: `task-4/index.html`

* In `task-4` branch:

```html
<h1>Content modified in task-4 branch</h1>
```

* In `task-4-branch-2` branch:

```html
<h1>Content modified in task-4-branch-2</h1>
```

---

## 🔹 Step 4: Commit Changes in Both Branches

### In `task-4-branch-2`:

```bash
git add .
git commit -m "This is the commit from branch 2 of task 4 modified"
git push
```

---

### In `task-4`:

```bash
git add .
git commit -m "This is the commit from task-4 branch with modified content"
git push
```

---

## 🔹 Step 5: Attempt Merge (Conflict Occurs)

```bash
git merge task-4-branch-2
```

### 💥 Output:

```
Auto-merging task-4/index.html
CONFLICT (content): Merge conflict in task-4/index.html
Automatic merge failed; fix conflicts and then commit the result.
```

---

## 🔍 Step 6: Identify Conflict

### Using `git status`:

```bash
git status
```

### Output:

```
Unmerged paths:
  both modified: task-4/index.html
```

---

### Using `git diff`:

```bash
git diff
```

### Output:

```diff
<<<<<<< HEAD
<h1>Hello everyone</h1>
=======
<h1>Task 4 in the branch 2</h1>
>>>>>>> task-4-branch-2
```

---

## 🔧 Step 7: Resolve Conflict Manually

Edited `index.html` and removed conflict markers:

```html
<h1>Resolved: Combined content from both branches</h1>
```

---

## 🔹 Step 8: Mark Conflict as Resolved

```bash
git add .
git commit -m "Conflict resolved"
```

---

## 🔹 Step 9: Push Final Changes

```bash
git push
```

---

## 🧠 Key Concepts Learned

| Concept           | Explanation                                               |
| ----------------- | --------------------------------------------------------- |
| Merge Conflict    | Occurs when same lines are modified in different branches |
| `git status`      | Identifies conflicted files                               |
| `git diff`        | Shows exact conflicting changes                           |
| Manual Resolution | Required to fix conflicts                                 |

---

## ⚖️ Important Observations

* Conflict occurred only after modifying the **same line** in both branches
* Git prevented automatic merge to avoid data loss
* Manual intervention was required to resolve conflict

---

## 📌 Conclusion

✔ Successfully created a merge conflict
✔ Used `git status` to identify conflict
✔ Used `git diff` to inspect differences
✔ Resolved conflict manually
✔ Merged branches successfully

---

## 🎉 Final Result

The merge conflict was successfully simulated and resolved using Git commands in:

* `task-4` branch
* `task-4-branch-2` sub-branch
