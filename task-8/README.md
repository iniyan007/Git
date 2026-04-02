# 🚀 Git Hooks for Automated Checks (Pre-commit Hook)

## 📌 Objective

Set up a Git hook to automatically run checks before a commit is finalized. This ensures that required files exist and prevents invalid commits.

---

## 🛠️ Implementation

### 1. Created a Pre-commit Hook

The pre-commit hook was created inside:

```
.git/hooks/pre-commit
```

---

### 2. Pre-commit Script

```sh
#!/usr/bin/env sh

# Check if index.html exists BEFORE anything else
if [ ! -f "index.html" ]; then
  echo "❌ Error: index.html not found!"
  echo "👉 Commit aborted."
  exit 1
fi

echo "✅ index.html exists. Running other checks..."
```

---

### 3. Script Explanation

* `#!/usr/bin/env sh` → Runs the script using shell
* `if [ ! -f "index.html" ]` → Checks if `index.html` does NOT exist
* If missing:

  * Displays error message
  * Stops commit using `exit 1`
* If present:

  * Allows commit to proceed

---

## 📜 Command History

```bash
git add .
git commit -m "First commit"
```

❌ Output:

```
Error: index.html not found!
Commit aborted.
```

---

```bash
git add .
git status
```

Output:

```
On branch task-8
Your branch is ahead of 'origin/task-8' by 2 commits.

Changes to be committed:
    modified: index.html
```

---

```bash
git commit -m "Added index.html file"
```

✅ Output:

```
index.html exists. Running other checks...
[task-8 c89ca74] Added index.html file
```

---

```bash
git push
```

✅ Output:

```
task-8 -> task-8
```

---

## ✅ Result

* The commit was **blocked** when `index.html` was missing.
* The commit was **allowed** once the file was added.
* Successfully pushed changes to the remote repository.

---

## 💡 Benefits of Git Hooks

Git hooks improve code quality in collaborative projects by:

* 🚫 Preventing invalid or incomplete commits
* 🧪 Running tests automatically before committing
* 🧹 Enforcing coding standards (linting)
* 🔍 Catching errors early in the development cycle
* 🤝 Maintaining consistency across team members

---

## 📌 Conclusion

The pre-commit hook ensures that essential files like `index.html` exist before allowing a commit. This automation helps maintain project integrity and reduces human errors during development.
