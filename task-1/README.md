# 📘 Git Task Documentation: Initialize, Commit, and Branch

## 🎯 Objective

* Initialize a Git repository
* Create and commit files
* Create a branch and make changes
* Merge branch back to main
* Verify commit history

---

## 🚀 Step 1: Initialize Repository

```bash
git clone https://github.com/iniyan007/Git.git
```

---

## 🌿 Step 2: Check Existing Branches

```bash
git branch
```

### Output:

```
* main
```

---

## 🌱 Step 3: Create and Switch to New Branch

```bash
git checkout -b footer
```

### Output:

```
Switched to a new branch 'footer'
```

---

## 🌿 Step 4: Create Additional Branch (Optional)

```bash
git branch master
```

### Check branches:

```bash
git branch
```

### Output:

```
* footer
  main
  master
```

---

## 🔄 Step 5: Switch Back to Main Branch

```bash
git checkout main
```

### Output:

```
A       task-1/index.html
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
```

---

## 📂 Step 6: Add and Commit Files in Main Branch

```bash
git add .
git commit -m "first commit in branch main"
```

### Output:

```
[main 0c2d6fe] first commit in branch main
 1 file changed, 11 insertions(+)
 create mode 100644 task-1/index.html
```

---

## ☁️ Step 7: Push to Remote Repository

```bash
git push
```

### Output:

```
To https://github.com/iniyan007/Git.git
   18beb49..0c2d6fe  main -> main
```

---

## 🌿 Step 8: Switch to Footer Branch

```bash
git checkout footer
```

---

## ✏️ Step 9: Add and Commit Changes in Footer Branch

```bash
git add .
git commit -m "first commit in footer branch"
```

### Output:

```
[footer d87301c] first commit in footer branch
 2 files changed, 12 insertions(+)
 create mode 100644 task-1/footer.html
 create mode 100644 task-1/index.html
```

---

## 🔄 Step 10: Switch Back to Main Branch

```bash
git checkout main
```

---

## 🔀 Step 11: Merge Footer Branch into Main

```bash
git merge footer
```

### Output:

```
Merge made by the 'ort' strategy.
 task-1/footer.html | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 task-1/footer.html
```

---

## 📜 Step 12: Verify Commit History

```bash
git log --oneline
```

### Output:

```
06415b2 (HEAD -> main) Merge branch 'footer'
d87301c (footer) first commit in footer branch
0c2d6fe (origin/main, origin/HEAD) first commit in branch main
18beb49 (master) Initial commit
```

---

## 📊 Final Branch Structure

* `main` → merged branch with footer changes
* `footer` → feature branch
* `master` → initial branch (not used further)

---

## 📌 Summary

| Step            | Command                   |
| --------------- | ------------------------- |
| Initialize repo | `git init`                |
| Create branch   | `git checkout -b footer`  |
| Switch branch   | `git checkout main`       |
| Add files       | `git add .`               |
| Commit          | `git commit -m "message"` |
| Merge           | `git merge footer`        |
| View history    | `git log --oneline`       |

---

## 🎉 Conclusion

You have successfully:

* Created and managed multiple branches
* Committed changes in different branches
* Merged a feature branch (`footer`) into `main`
* Verified commit history
