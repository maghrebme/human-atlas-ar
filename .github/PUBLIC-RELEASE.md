# الاستعداد للنشر العام / Public release readiness

يبقى المستودع خاصًا إلى أن يقرر المالك تغيير ظهوره. لا تغيّر ملفات CI الظهور تلقائيًا.

Before changing visibility:

- Authorize GitHub CLI with the `workflow` scope, upload the prepared `.github/workflows/` files, and verify their runs. Workflow upload is currently blocked by the saved login permissions.

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

GitHub currently requires a paid plan or public visibility for this repository's branch protection. See [protected branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches) and [secret scanning](https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning).
