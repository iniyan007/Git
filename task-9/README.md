# 🚀 Working with Remote Repositories and Collaboration

## 📌 Objective

Simulate a collaborative workflow using Git and a remote repository (GitHub), including branching, pull requests, merging, and syncing changes.

---

## 🛠️ Repository Setup

### 🔗 Remote Repository

Repository URL:
👉 [GitHub Repository](https://github.com/iniyan007/Git.git?utm_source=chatgpt.com)

### ✅ Verify Remote Connection

```bash
git remote -v
```

**Output:**

```
origin  https://github.com/iniyan007/Git.git (fetch)
origin  https://github.com/iniyan007/Git.git (push)
```

---

## 📁 Step 1: Initial Commit to Main Branch

```bash
git add .
git commit -m "Created index.html file"
git push
```

**Result:**

* `index.html` file created inside `task-9/`
* Changes pushed to `main` branch successfully

---

## 🌿 Step 2: Create Feature Branch

```bash
git checkout -b task-9-feature-branch
```

**Result:**

* New branch `task-9-feature-branch` created and switched

---

## ✏️ Step 3: Add Feature & Commit

```bash
git add .
git commit -m "Added feature branch and footer.html"
```

**Changes:**

* Added `footer.html` inside `task-9/`

---

## ☁️ Step 4: Push Feature Branch to Remote

```bash
git push origin task-9-feature-branch
```

**Result:**

* Feature branch pushed to GitHub
* Pull Request link generated:

```
https://github.com/iniyan007/Git/pull/new/task-9-feature-branch
```

---

## 🔁 Step 5: Pull Request & Merge (Simulated)

* Opened Pull Request using GitHub link
* Reviewed changes (simulated code review)
* Merged feature branch into `main`

---

## 🔄 Step 6: Pull Latest Changes to Local

```bash
git checkout main
git pull
```

**Result:**

* Local `main` updated with merged changes
* `footer.html` successfully added

---

## 🧹 Step 7: Delete Feature Branch

### 🔹 Delete Local Branch

```bash
git branch -d task-9-feature-branch
```

### 🔹 Delete Remote Branch

```bash
git push origin --delete task-9-feature-branch
```

**Note:**

* Initial deletion failed due to typo:

```
task-9-heature-branch ❌
```

* Corrected and successfully deleted:

```
task-9-feature-branch ✅
```

---

## ✅ Final Outcome

* Successfully created and pushed a repository
* Implemented feature branching workflow
* Simulated Pull Request and code review
* Merged feature branch into main
* Synced local repository with remote
* Cleaned up branches

---

## 💡 Key Learnings

* 🌿 Feature branching improves code organization
* 🔁 Pull Requests enable collaboration and review
* 🔄 `git pull` keeps local repo updated
* 🧹 Branch cleanup maintains repository hygiene
* ⚠️ Small mistakes (like typos) can cause Git errors

---

## 📌 Conclusion

This task demonstrated a complete collaborative Git workflow, including branching, committing, pushing, pull request creation, merging, and synchronization with the remote repository. This process is widely used in real-world software development teams.
