# git commands 
1. `git init`将这个目录修改为git可以管理的仓库
2. `git add file_name`添加一个文件, 可以同时添加多个文件`git add file_1 file_2`
3. `git commit -m "addxxxxx"`提交一个修改
4. `git status` 查看修改状态
5. `git diff file_name` 查看修改内容，可以不跟文件名，直接返回所有的修改内容`git diff`
6. `git log` 查看提交日志
7. `git log --pretty=oneline` 提交日志在一行显示
8. `git reset`版本回退 `git reset --hard HEAD^`回退一个版本
9. `git reset --hard 版本号` 回退到指定版本
10. `git reflog` 查看所有的`commit`日志，包括回退版本
11. `git diff HEAD -- readme.txt` 查看工作区和版本库中最新版本的区别
12. `git checkout -- readme.txt` 放弃工作区的修改
13. `git reset HEAD <file>` 方式提交的暂存区的修改, 如果要彻底放弃修改还需要`git checkout -- <file>`放弃工作区的修改
14. `git rm <file>`删除文件
15. `git checkout -- <file>` 可以直接中版本库中拉下来误删的文件
16. `git remote add origin git@github.com:luningcowboy/learnGit.git` 链接远程仓库
17. `git push -u origin master` 把本地仓库推送到远程仓库
18. `git clone <url>` 将l远程仓库拉取到本地
19. `git checkout -b dev`创建dev分支，这个命令相当于运行了`git branch dev`和`git checkout dev`
20. `git checkout master` 切换到master分支
21. `git merge dev` 合并dev分支到master
22. `git branch -d dev` 删除dev分支
23. `git branch` 查看已经有的分支
24. `git merge --no-ff -m "merge --no-ff" dev` 合并分支并禁用`Fast forward`模式,这样合并的时候会有一个`commit`,`-m`后就是合并的日志
25. `git stash` 把当前工作现场储藏起来，等以后回复现场后继续工作.
26. `git stash list` 查看存储的工作列表
27. 恢复工作现场:
    1. `git stash apply` 恢复，`git stash drop` 删除
    2. `git stash pop`
28. `git stash apply stash@{0}` 恢复指定的`stash`
29. `git branch -D <branch-name>` 分支没合并的时候强行删除分支
30. `git remote` 查看远程仓库的信息
31. `git push origin <branch-name>` 推送本地分支到远程
32. `git branch --set-upstream-to=origin/dev dev` 绑定本地`dev`分支和远程`dev`分支
33. `git pull` 下拉最新的远程分支
34. `git remote -v` 查看远程仓库的信息
35. `git log --graph --pretty=oneline --abbrev-commit` 查看版本仓库的log, 有图形
36. `git rebase` 把分叉的提交历史整理成一条直线，看上去更直观，缺点是本地发分支提交已经被修改过了。
37. `git tag <version-name>` 打版本,方便查找回退
38. `git tag <version-name> <uid>` 给指定版本打tag
39. `git tag -a v0.1 -m "version 0.1 released" 1094adb` 创建有说明的tag
40. `git tag` 查看已经有的tag
41. `git show <tag-name>` 查看指定的tag信息
42. `git tag -d <tag-name>` 删除指定tag
43. `git push origin <tag-name>` 推送标签到远程仓库
44. 从远程仓库删除tag:
    1. 先从本地删除tag`git tag -d <tag-name>`
    2. 从远程仓库删除tag `git push origin :refs/tags/<tag-name>`

> 每一次`commit`之前都需要先`add`
> `git reset`既可以回退版本，也可以将暂存区的修改回退到工作区

