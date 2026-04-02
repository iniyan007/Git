# 📘 Advanced Git Workflow: Forced Push & Recovery

## 🎯 Objective

Simulate an advanced Git workflow involving:

* Multiple branches (feature, task)
* Interactive rebase
* Forced push (`git push --force`)
* Recovering lost commits using `git reflog`

---

## 📂 Repository Setup

We started by fetching remote branches:

```bash
git fetch
```

New branches fetched:

* `feature/dashboard`
* `feature/login`
* `task-10`

---

## 🌿 Branch Workflow

### 1. Working on `task-10`

```bash
git switch task-10
git add .
git commit -m "Added index.html file"
git push
```

✅ Created and pushed `index.html` to remote.

---

### 2. Working on `feature/login`

```bash
git switch feature/login
git add .
git commit -m "added login.html"
```

---

### 3. Working on `feature/dashboard`

```bash
git switch feature/dashboard
git add .
git commit -m "Added dashboard.html"
```

---

### 4. Merging Feature into Task Branch

```bash
git switch task-10
git merge feature/dashboard
```

✅ Successfully merged dashboard feature into `task-10`.

---

## 🔄 Multiple Commits & Rebase

On `feature/login`:

```bash
git checkout feature/login

git commit -m "Added login form"
git commit -m "Added some design"
```

Now we have **multiple commits**, which we clean up using **interactive rebase**:

```bash
git rebase -i HEAD~2
```

### ✨ Result:

* Squashed commits into one:

```
Added login form and added some design
```

---

## 🚨 Forced Push Scenario

Since rebase rewrites history:

```bash
git push --force
```

### ⚠️ Why Force Push?

* Remote history differed from local rewritten history
* Normal push would be rejected

---

## ❌ Simulating Mistake (Losing a Commit)

Added an important commit:

```bash
git commit -m "Important feature added"
```

Then mistakenly removed it:

```bash
git reset --hard HEAD~1
git push --force
```

🚨 The commit is now **lost from branch history**

---

## 🔍 Recovering Lost Commit using `git reflog`

```bash
git reflog
```

### Output (important entries):

```
10c56fa HEAD@{1}: commit: Important feature added
```

### 🔁 Recovery:

```bash
git reset --hard 10c56fa
```

✅ Successfully restored the lost commit

---

## 🧠 Key Concepts

### 🔹 What is `git reflog`?

* Tracks all HEAD movements
* Works even after:

  * reset
  * rebase
  * force push

👉 It is a **lifesaver for recovering lost commits**

---

### 🔹 What is `git push --force`?

Force push overwrites remote history:

```bash
git push --force
```

Used when:

* Rewriting commit history (rebase, amend)

---

## ⚠️ Risks of Force Push

* Deletes commits from remote
* Affects team members
* Can cause data loss

---

## ✅ Best Practices for Teams

### 1. Prefer `--force-with-lease`

```bash
git push --force-with-lease
```

✔ Safer than `--force`
✔ Prevents overwriting others' work

---

### 2. Avoid Force Push on Shared Branches

* Never force push on:

  * `main`
  * `master`
  * `release`

---

### 3. Communicate with Team

* Inform before rewriting history
* Use Slack/Teams/GitHub comments

---

### 4. Use Feature Branches

* Rewrite history only on:

  * `feature/*`
  * personal branches

---

### 5. Take Backup Before Risky Operations

```bash
git branch backup-branch
```

---

### 6. Use Pull Requests

* Avoid direct pushes to shared branches
* Review before merging

---

## 🏁 Conclusion

This workflow demonstrated:

* Multi-branch development
* Clean commit history using rebase
* Safe use of force push
* Recovery of lost commits using `git reflog`

👉 **Key takeaway:**
Even if commits seem lost, `git reflog` can help recover them.


