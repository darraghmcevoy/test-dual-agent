# Dual-Agent Workspace Template

This repository is a shared agent and editor template. It is not the application source repository.

The canonical shared workflow rules for Claude Code and Codex live in this file.

## Repository Intent

- Use this repository to store reusable agent setup and collaboration rules.
- Use separate application repositories for actual product code.
- Point both Claude Code and Codex at the same application repository when doing implementation work.

## Source Of Truth

- `AGENTS.md` is the canonical shared instructions file.
- `CLAUDE.md` exists only to ensure Claude loads the shared rules reliably.
- Tool-local state must remain untracked and machine-specific.

## Local State

These paths are local-only and must not be committed:

- `.claude/`
- `.codex/`

Do not store secrets, tokens, transcripts, or machine-specific caches in tracked files.

## Default Coordination Model

Use `git` as the coordination layer. Use `git worktrees` as the default model for parallel work.

- One active task per branch.
- One active branch per worktree.
- One active worktree per agent/task pair.
- Do not run two agents in the same checkout when both are expected to edit files.

Same-branch and same-directory workflows are reserved for sequential handoffs only.

## Ownership Rules

- Assign one task owner per file set before edits begin.
- Shared files get one writer and, if needed, one reviewer.
- Do not let both agents edit the same file concurrently.
- Prefer disjoint file ownership even when tasks are closely related.

If file ownership becomes unclear, stop parallel editing and reassign ownership before continuing.

## Branch And Worktree Conventions

Recommended pattern:

- Claude branch: `agent/claude/<task>`
- Codex branch: `agent/codex/<task>`
- Optional shared integration branch: `integration/<task>`

Recommended worktree layout outside the main app checkout:

- `..\wt-claude-<task>`
- `..\wt-codex-<task>`

Example:

```powershell
git fetch origin
git worktree add ..\wt-claude-auth -b agent/claude/auth origin/master
git worktree add ..\wt-codex-billing -b agent/codex/billing origin/master
```

Use the correct base branch for the target repository if it is not `master`.

## Start-Of-Task Rules

Before editing:

- Fetch the latest remote state.
- Rebase or otherwise synchronize onto the intended base branch.
- Confirm branch ownership and expected file ownership.
- Confirm whether the task is parallel or sequential.

Minimum start sequence:

```powershell
git fetch origin
git status
git rebase origin/master
```

If the repository uses a base branch other than `master`, substitute the correct branch name.

## Handoff Rules

When one agent stops and another continues, leave explicit handoff notes in the chat, PR, commit message, or issue.

Include:

- current branch and worktree path
- files touched or owned
- tests run or not run
- known blockers, assumptions, and next action

Do not assume the other agent has the same local context.

## Integration Rules

- Rebase before opening a PR or merging.
- Resolve conflicts through `git`, not by having both agents edit the same checkout.
- Keep branches short-lived.
- Prefer small, reviewable commits tied to a single task.

## Recommended Validation Scenarios

Validate this workflow in a throwaway application repository with these scenarios:

1. Claude and Codex edit different files in separate worktrees and separate branches.
2. One agent edits while the other reviews or tests in a different worktree.
3. Sequential handoff in the same branch after one agent commits.
4. Intentional same-file touch with one designated writer and one reviewer.

## Acceptance Criteria

- Claude loads shared instructions through `CLAUDE.md`.
- Codex can work from the same repository rules.
- Local agent state is not committed.
- Parallel work does not share a writable checkout.
- Merges are handled through normal `git` integration.
