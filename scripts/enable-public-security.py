"""Enable public security controls without ever changing repository visibility."""
import json
import subprocess


def api(path, method="GET", data=None):
    command = ["gh", "api", path, "--method", method]
    if data is not None:
        command += ["--input", "-"]
    result = subprocess.run(command, input=json.dumps(data) if data is not None else None,
                            text=True, capture_output=True, check=True)
    return json.loads(result.stdout) if result.stdout.strip() else None


repo = json.loads(subprocess.check_output(
    ["gh", "repo", "view", "--json", "nameWithOwner,isPrivate"], text=True))
if repo["isPrivate"]:
    raise SystemExit("Repository is private. Visibility is never changed by this script.")
base = "repos/" + repo["nameWithOwner"]
api(base, "PATCH", {"security_and_analysis": {
    "secret_scanning": {"status": "enabled"},
    "secret_scanning_push_protection": {"status": "enabled"}}})
api(base + "/private-vulnerability-reporting", "PUT")
api(base + "/branches/main/protection", "PUT", {
    "required_status_checks": {"strict": True, "contexts": ["validate", "secrets"]},
    "enforce_admins": True, "required_pull_request_reviews": None,
    "restrictions": None, "required_conversation_resolution": True,
    "allow_force_pushes": False, "allow_deletions": False})
print("Enabled public security controls; repository visibility was not changed.")
