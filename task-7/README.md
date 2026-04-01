# 🍒 Cherry-Picking Commits Between Branches

## 🎯 Objective

Selectively apply a commit from one branch to another using `git cherry-pick`.

---

## 🛠️ Steps Performed

### 1️⃣ Created Branches with Distinct Commits

* Created branch **`task-7`**

  ```bash
  git switch task-7
  ```

* Added a new file:

  ```bash
  git add .
  git commit -m "Added index.html file"
  git push
  ```

---

* Created another branch **`task-7-branch-2`**

  ```bash
  git switch task-7-branch-2
  ```

* Added another commit:

  ```bash
  git add .
  git commit -m "Added navbar"
  git push
  ```

---

## 🔍 2️⃣ Identified Commit to Cherry-Pick

From `task-7` branch:

```bash
git log --oneline
```

Commit selected:

```
e9b38f7 Added index.html file
```

---

## 🔄 3️⃣ Cherry-Pick Commit to Another Branch

Switched to target branch:

```bash
git checkout task-7-branch-2
```

Applied cherry-pick:

```bash
git cherry-pick e9b38f7
```

---

## ⚠️ 4️⃣ Conflict Handling

A conflict occurred:

```
CONFLICT (add/add): Merge conflict in task-7/index.html
```

### Resolution Steps:

1. Opened the conflicted file and resolved manually

2. Marked the file as resolved:

   ```bash
   git add .
   ```

3. Continued cherry-pick:

   ```bash
   git cherry-pick --continue
   ```

---

## ✅ 5️⃣ Verification

Checked commit history:

```bash
git log --oneline
```

Output:

```
9a87a70 (HEAD -> task-7-branch-2) Added index.html file
405e8e0 Added navbar
e9b38f7 (task-7) Added index.html file
```

✔️ Cherry-picked commit successfully applied

---

## 🧠 Key Learnings

* `git cherry-pick <commit-hash>` applies a specific commit to another branch
* Conflicts can occur if both branches modify the same file
* Use:

  * `git add .` → mark resolved
  * `git cherry-pick --continue` → proceed
* Always verify using `git log`

---

## 🚀 Conclusion

Cherry-picking is useful when:

* You want specific changes without merging entire branches
* You need to apply bug fixes across branches
* You want selective commit control

---
