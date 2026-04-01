# 📘 Git Task-5: Interactive Rebasing for Clean Commit History

## ✅ Task Status: **Completed Successfully (Branch: `task-5`)**

---

## 🎯 Objective

* Use interactive rebase to tidy commit history
* Fix commit message typos
* Combine multiple commits into a single meaningful commit

---

## 🛠️ Implementation

---

## 🔹 Step 1: Create Multiple Commits

Three commits were created with small changes and typos:

```bash
git add .
git commit -m "added headding"

git add .
git commit -m "aedded navbar"

git add .
git commit -m "added lines"
```

### 📌 Observation:

* Commit messages contained typos
* Changes were split across multiple commits

---

## 🔹 Step 2: View Commit History

```bash
git log --oneline
```

### Output:

```text
f0c7255 added lines
6e9e36d aedded navbar
a888e99 added headding
```

---

## 🔹 Step 3: Start Interactive Rebase

```bash
git rebase -i HEAD~3
```

---

## 🔹 Step 4: Modify Rebase Instructions

Editor opened with:

```text
pick a888e99 added headding
pick 6e9e36d aedded navbar
pick f0c7255 added lines
```

### Modified to:

```text
pick a888e99 added headding
squash 6e9e36d aedded navbar
squash f0c7255 added lines
```

---

## 🔹 Step 5: Edit Commit Message

Final cleaned commit message:

```text
Added headding, navbar and lines
```

---

## 🔹 Step 6: Complete Rebase

### Output:

```text
Successfully rebased and updated refs/heads/task-5.
```

---

## 🔹 Step 7: Verify Clean History

```bash
git log --oneline
```

### Output:

```text
946a788 Added headding, navbar and lines
7ba5310 Task-4 completed
2afbd74 Task-3 Completed
```

---

## 🧠 Key Concepts

---

### 🔸 Interactive Rebase

```bash
git rebase -i HEAD~n
```

* Allows editing of last `n` commits
* Enables squashing, reordering, and renaming commits

---

### 🔸 Squashing Commits

* Combines multiple commits into one
* Removes unnecessary intermediate commits
* Helps fix messy commit history

---

## ⚖️ Before vs After Rebasing

### ❌ Before (Messy History):

```text
added headding
aedded navbar
added lines
```

### ✅ After (Clean History):

```text
Added headding, navbar and lines
```

---

## 🎯 Benefits of Squashing

* Cleaner and more readable commit history
* Easier code review
* Removes redundant commits
* Improves project maintainability

---

## 📌 Conclusion

✔ Created multiple commits with minor changes and typos
✔ Used interactive rebase to squash commits
✔ Cleaned and improved commit history
✔ Verified final output using `git log`

---

## 🎉 Final Result

* Commit history is now clean and organized
* Ready for merging into the main branch
* Demonstrates professional Git workflow

---

## 💡 Viva Answer

**Q: Why is squashing used in Git?**
👉 Squashing combines multiple small or unnecessary commits into a single meaningful commit, making the commit history clean and easier to understand before merging into the main branch.
