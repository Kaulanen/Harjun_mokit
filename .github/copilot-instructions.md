# Copilot instructions for this repository

Repository state: the working folder is currently empty (no source files detected).

If files are later added, follow these concise, actionable rules so AI coding agents become immediately productive.

1) First-steps (mandatory)
- List repository root and hidden files. On Windows use PowerShell: `Get-ChildItem -Force -Recurse -Depth 2`.
- Look for these manifest files in order: `package.json`, `pyproject.toml`, `requirements.txt`, `setup.py`, `Pipfile`, `go.mod`, `Cargo.toml`, `Dockerfile`, `Makefile`, `README.md`, `.github/workflows/`.
- Open `README.md` and any `CONTRIBUTING.md` first — they often contain build/test commands.

2) Infer architecture (what to report back)
- If you find `package.json` → Node project. Key files: `src/`, `lib/`, `server/`. Typical commands: `npm ci` / `npm test` / `npm run build`.
- If you find `pyproject.toml` or `requirements.txt` → Python project. Key files: `src/` or top-level packages. Typical commands: create venv, `pip install -r requirements.txt`, `pytest`.
- If you find `.csproj`, `*.sln` → .NET; use `dotnet restore` and `dotnet test`.
- If you find `go.mod` → Go; use `go build` and `go test`.

3) Project-specific conventions to surface (what agents must extract)
- Primary entry points (files that start the app or CLI). Example patterns: `src/index.js`, `app.py`, `cmd/` or `main.go`.
- Test layout: look for `tests/`, `test_*.py`, `__tests__/`, or `*.spec.js` and the test runner in manifests.
- CI workflow files under `.github/workflows/` — copy exact build/test steps rather than guessing.
- Any custom scripts in `package.json` under `scripts` or `Makefile` targets — prefer these commands.

4) Integration and infra clues
- Dockerfiles and `.dockerignore` indicate containerized workflows; prefer reproducing `docker build` steps.
- Look for `charts/`, `k8s/`, or `deploy/` folders for deployment flows.
- External services: search for environment var patterns (`process.env`, `os.environ`, `.env` files) and config files (e.g., `config/*.yml`) and note required secrets.

5) When authoring or changing code
- Match existing coding style (file layout, naming). If no style files exist, follow the ecosystem defaults (PEP8 for Python, Standard JS/Prettier for JS).
- Add or update minimal tests covering behavior changes; run the project's test command before proposing a commit.

6) Commit and PR guidance for AI
- Include short commit messages (one-line summary). If tests exist, ensure they pass locally and include failing test reproduction steps if they fail.
- If creating new files, update `README.md` or add a short `docs/` note describing the change.

7) If the repository remains empty
- Prompt the user: ask whether you should initialize a project (and which language/framework) or wait for their files.

Report back to the human with these items: discovered manifest(s), the inferred primary language/runtime, exact commands to build/test as found in the repo, and any missing information needed to complete work (secrets, external accounts, CI tokens).

If you want, I'll generate a starter `README.md` or scaffold for a chosen language — tell me which one.
