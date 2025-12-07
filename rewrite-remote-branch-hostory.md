### How to rewrite a git commit history in remote

Let's say you accidentally pushed some API keys or token or something that should not be on the github branch

there 2 ways to handle this
if you want to remove a line which contains secret or a full file.

REMOVING SECRET FROM A LINE

first install git-filter-repo from pip
`pip install git-filter-repo`

then create a new file replacement.txt which contains the text that needs to be replaced with some other text.
See the replacement.txt file for reference

`git filter-repo --replace-text replacements.txt`

(might need to use --force in the end accordingly)

Now, the text is been replaced in the whole branch where have it is present
and the remote origin will get detached,
so hitting `git remote -v` will get nothing

so add the remote repo where you want to push new re-written history

`git remote add origin <repo-link>`

`git push origin main --force`

--
REMOVING THE WHOLE FILE FROM COMMIT HISTORY

Now, lets talk about how to remove a file from the git commit history

`git filter-repo --path config/.env --invert-paths`

now the given file is being deleted from the commit history and there are some new hashes of commits,

again run the
`git remote add origin <repo-link>`

now push the new updated history to remote

`git push origin main --force`
