# الاستعداد للنشر العام / Public release readiness

غيّر المالك ظهور المستودع إلى عام. لا تغيّر ملفات CI الظهور تلقائيًا.

Before changing visibility:

- Authorize GitHub CLI with the `workflow` scope, upload the prepared `.github/workflows/` files, and verify their runs. Workflow authorization has now been granted.

- Review the sanitized commit history and files; preserve upstream MIT and dataset attribution.
- Check that CI and the secret scan pass on the rewritten `main`.
- Git history rewriting changes commit IDs. Existing clones must re-clone or explicitly reset; do not merge old history back.
- Old commit URLs or cached GitHub objects may survive a force push. Ask GitHub Support about purging old objects containing private email metadata before publication if those addresses must be completely unrecoverable. A clean branch is not proof of server-side object deletion.
- Keep the repository private until any required cache/object cleanup is resolved.

After the owner changes visibility to public:

1. Run `python3 scripts/enable-public-security.py` while authenticated as the repository administrator. This script refuses to change visibility and refuses to run while private.
2. Confirm private vulnerability reporting, secret scanning and push protection in Settings → Code security. Review initial scan results.
3. Run the CodeQL workflow and confirm its results. CodeQL is intentionally skipped on the current private Free-plan repository.
4. Confirm main branch protection: passing `validate` and `secrets` checks, up-to-date branch, conversation resolution, and no force pushes or deletion. No mandatory external approval is imposed on this single-maintainer project.
5. If hosting, verify the configured HTTP security headers on the actual HTTPS deployment and test the viewer on desktop/mobile.

The repository is now public and branch protection is enabled. See [protected branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches) and [secret scanning](https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning).

## Current access policy

External pull request creation is restricted to collaborators; only the owner currently has write access and there are no pending collaborator invitations. Automatic merging is disabled. Dependabot alerts and security updates are enabled; updates create pull requests for review rather than merging themselves.

The repository is now public. Secret scanning, push protection, private vulnerability reporting, Dependabot alerts and security updates are enabled. `main` disallows force pushes and deletion, including for administrators, and requires conversation resolution. External pull requests remain restricted to collaborators and automatic merging is disabled. CI, secret-scanning and CodeQL workflows are being enabled. Require their status checks after successful initial runs.
