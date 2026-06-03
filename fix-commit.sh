#!/bin/bash
set -e
cd /mnt/d/Projects/SA/official-website
git reset --soft HEAD~1
git reset HEAD commit.sh 2>/dev/null || true
rm -f commit.sh .git/COMMIT_MSG_TMP
git add -A
git commit -F .git/COMMIT_MSG_TMP2
