# 🚀 CI/CD Learning App

A minimal Node.js app built to learn **GitHub Actions CI/CD**.

## Project Structure

```
my-node-app/
├── src/
│   ├── app.js          # Express server
│   └── math.js         # Simple math utilities
├── tests/
│   └── math.test.js    # Tests (no external test framework needed)
├── .github/
│   └── workflows/
│       ├── ci.yml      # ← Runs on every push/PR
│       └── cd.yml      # ← Runs on merge to main
└── package.json
```

## Run Locally

```bash
npm install
npm start        # http://localhost:3000
npm test         # Run tests
```

## Try the API

```bash
curl http://localhost:3000/
curl "http://localhost:3000/add?a=5&b=3"
curl "http://localhost:3000/subtract?a=10&b=4"
curl "http://localhost:3000/multiply?a=6&b=7"
```

---

## How the CI/CD Works

### CI — `ci.yml` (Continuous Integration)

Triggered on **every push** and **every pull request to main**.

| Step | What it does |
|------|-------------|
| Checkout | Downloads your code onto the GitHub runner |
| Setup Node | Installs Node.js (tested on v18, v20, v22 in parallel) |
| `npm ci` | Installs exact dependencies from lockfile |
| Lint | Checks code style |
| Test | Runs your test suite — fails the build if tests fail |
| Smoke Test | Starts the server and hits it with `curl` |

### CD — `cd.yml` (Continuous Deployment)

Triggered only when code is **merged to `main`**.

| Step | What it does |
|------|-------------|
| Test again | Re-verifies tests pass before deploying |
| Deploy | Ships your code to production |

---

## Key Concepts

**Workflow** — A YAML file in `.github/workflows/` that defines automation.

**Trigger (`on:`)** — What event starts the workflow (push, PR, schedule, etc.).

**Job** — A group of steps that run on the same machine.

**Step** — A single command or reusable action.

**`needs:`** — Makes a job wait for another job to succeed first.

**`matrix:`** — Runs the same job multiple times with different variables (e.g., Node versions).

**Secrets** — Encrypted values stored in GitHub Settings → used for API keys, tokens, etc.

---

## Next Steps

1. Push this to GitHub and watch the Actions tab light up
2. Try breaking a test — watch CI catch it
3. Add a real deployment target (Railway, Render, Fly.io are all free)
4. Add a `release.yml` workflow that auto-tags versions
