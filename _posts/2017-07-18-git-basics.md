---
layout: post
title: Git Basic Commands
img: default.png
---

git -v

git --version

git config --global user.name "User Name"
git config --global user.email "user@email.com"

git config --list


git init

git status

touch .gitignore


git reset

git reset filename


git add -A
git add --all

Stash all the files within the project

git add -A foldername/
git add --all foldername/

Stash all the files within the mentioned folder

git add (default to -A or --all)

git add --no-all for excluding deleted files

git add -u
git add --update

Stash all deleted and modified files

git add .

Stash files within current directory

git commit -m "Message"

git log

git clone <url> <where to clone>

git clone path/to/git.git .

Clone to current directory

git remote -v

git branch -a

Show all the branch including remote

git diff

git status

git add -A

git commit -m "Message"

git pull origin master

git push origin master

git branch branchname

git checkout branchname

git branch

git push -u origin branchname

git branch -a

git branch --merged

git merge branchname

git branch --merged

git branch -d branchname

Delete branch

git push origin --delete branchname


git checkout filename

To restore original file

git commit --amend -m "Updated Message for last commit"

git commit --amend

git log --stat

git cherry-pick commithash


git reset --soft commithash

git reset --hard origin/master

git staus

Keeps the files on staging

git reset commithash

Keeps the files on untracked

git reset --hard commithash

delete almost all the new files

git clean -df

Deletes untracked directory and files

git reflog

git checkout commithash

git revert commithash

git diff commithash1 commithash2

