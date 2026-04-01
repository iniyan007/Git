# 📦 Task: Stashing Changes for Context Switching

## ✅ Objective

To learn how to use `git stash` to temporarily save uncommitted changes, switch branches, and reapply them later.

---

## 🧾 Task Completion Summary

I successfully performed the following:

* Made changes in the working directory without committing
* Used `git stash` to temporarily save changes
* Switched between branches and continued work
* Reapplied stashed changes using `git stash pop`
* Managed multiple stashes using `git stash list` and `git stash drop`
* Resolved merge conflicts during stash pop

---

## 🔧 Steps Performed

### 1. Created Changes Without Commit

```bash
git status
```

* Modified files (e.g., `task-6/index.html`) without committing.

---

### 2. Stashed Changes

```bash
git stash
```

✔ Saved uncommitted work:

```
Saved working directory and index state WIP on task-6
```

---

### 3. Switched Branch

```bash
git checkout task-6-branch-2
```

✔ Successfully switched context to another branch.

---

### 4. Applied Stash

```bash
git stash pop
```

✔ Reapplied stashed changes.

---

### 5. Handled Merge Conflict

During stash pop:

```
CONFLICT (content): Merge conflict in task-6/index.html
```

✔ Resolved conflict manually
✔ Staged and committed changes:

```bash
git add .
git commit -m "after stashing"
```

---

### 6. Managed Multiple Stashes

```bash
git stash list
```

Example:

```
stash@{0}: WIP on task-6
stash@{1}: WIP on task-6-branch-2
```

✔ Viewed multiple stashes
✔ Applied and removed stashes using:

```bash
git stash pop
git stash drop
```

---

### 7. Final Commit and Push

```bash
git add .
git commit -m "Stashing pop is done"
git push
```

✔ Successfully updated remote repository

---

## 📌 Output Evidence

From my terminal session :

* Stash created successfully
* Branch switching performed
* Stash reapplied with conflict
* Conflict resolved and committed
* Multiple stashes listed and managed
* Changes pushed to GitHub

---

## 🎯 Conclusion

This task helped me understand how to:

* Safely pause work using `git stash`
* Switch between branches without losing progress
* Reapply and manage stashed changes efficiently
* Handle merge conflicts during stash application

---

## 🚀 Result

✅ Task completed successfully
✅ All requirements fulfilled

