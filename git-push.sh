#!/bin/bash
set -e
cd /mnt/d/Projects/SA/official-website
git add -A
git stash push -u -m "pages cms"
git pull --rebase origin main
git stash pop
git add -A
git diff --cached --quiet && echo "Nothing to commit" && exit 0
git commit -F .git/COMMIT_MSG_TMP
git push origin main
git status
rm -f "$0"
