///BASIC///
export const basic = [
   /* st */ {
      name: 'st',
      syntax: 'git st',
      commands: ['git status'],
      title: 'status of repo',
      desc: '',
   },
   /* ad */ {
      name: 'ad',
      syntax: 'git ad',
      commands: ['git add <file-name>'],
      title: 'add files to be staged',
      desc: '',
   },
   /* ct */ {
      name: 'ct',
      syntax: "git ct '<message>'",
      rest: "'<message>'",
      commands: ["git commit -m '<message>'"],
      title: 'commit with message',
      desc: '',
   },
];

///COMMIT///
export const commit = [
   /* dct */ {
      name: 'dct',
      syntax: "git dct '<message>'",
      rest: "'<message>'",
      commands: ['git add .', "git commit -m '<message>'"],
      title: 'add + commit',
      desc: '',
   },
   /* ctp */ {
      name: 'ctp',
      syntax: "git ctp '<message>'",
      rest: "'<message>'",
      commands: ["git commit -m '<message>'", 'git push'],
      title: 'commit + push',
      desc: '',
   },
   /* dctp */ {
      name: 'dctp',
      syntax: "git dctp '<message>'",
      rest: "'<message>'",
      commands: ['git add .', "git commit -m '<message>'", 'git push'],
      title: 'add + commit + push',
      desc: '',
   },
   /* rct */ {
      name: 'rct',
      syntax: "git rct '<message>'",
      rest: "'<message>'",
      commands: ['git add .', "git commit --amend --allow-empty -m '<message>'"],
      title: 'add + redo last commit',
      desc: '',
   },
   /* rctp */ {
      name: 'rctp',
      syntax: "git rctp '<message>'",
      rest: "'<message>'",
      commands: [
         'git add .',
         "git commit --amend --allow-empty -m '<message>'",
         'git push --force',
      ],
      title: 'add + redo last commit + push',
      desc: '',
   },
   /* rcm */ {
      name: 'rcm',
      syntax: "git rcm '<message>'",
      rest: "'<message>'",
      commands: ["git commit --amend --allow-empty -m '<message>'"],
      title: 'redo last commit message',
      desc: '',
   },
   /* rcmp */ {
      name: 'rcmp',
      syntax: "git rcmp '<message>'",
      rest: "'<message>'",
      commands: ["git commit --amend --allow-empty -m '<message>'", 'git push --force'],
      title: 'redo last commit message + push',
      desc: '',
   },
   /* push-dist */ {
      name: 'push-dist',
      syntax: 'git push-dist',
      commands: ['subtree push --prefix dist origin gh-pages'],
      tdrSyntax: 'git push-dist <remote>',
      tdrRest: '<remote>',
      tdrCommands: ['subtree push --prefix dist <remote> gh-pages'],
      title: 'push subfolder dist to gh-pages',
      desc: '',
   },
   /* push-gh-pages */ {
      name: 'push-gh-pages',
      syntax: 'git push-gh-pages <folder>',
      rest: '<folder>',
      commands: ['git subtree push origin --prefix <folder> gh-pages'],
      tdrSyntax: 'git push-gh-pages <remote> <folder>',
      tdrRest: '<remote> <folder>',
      tdrCommands: ['git subtree push <remote> --prefix <folder> gh-pages'],
      title: 'push any subfolder to gh-pages',
      desc: '',
   },
];

///FILE///
export const file = [
   /* rename */ {
      name: 'rename',
      syntax: 'git rename <old-name> <new-name>',
      rest: '<old-name> <new-name>',
      commands: ['git mv <old-name> <new-name>'],
      title: 'rename file',
      desc: '',
   },
   /* unstage */ {
      name: 'unstage',
      syntax: 'git unstage <file>',
      rest: '<file>',
      commands: ['git restore --staged <file>'],
      title: 'unstage file',
      desc: '',
   },
   /* unmodify */ {
      name: 'unmodify',
      syntax: 'git unmodify <file>',
      rest: '<file>',
      commands: ['git restore <file>'],
      title: 'unmodify file',
      desc: '',
   },
   /* untrack */ {
      name: 'untrack',
      syntax: 'git untrack <file>',
      rest: '<file>',
      commands: ['git rm --cached -r <file>'],
      title: 'untrack file',
      desc: '',
   },
   /* delete-untracked */ {
      name: 'delete-untracked',
      syntax: 'git delete-untracked',
      commands: ['git clean -d -f'],
      title: 'delete untracked files',
      desc: '',
   },
];

///BRANCH///
export const branch = [
   /* branches */ {
      name: 'branches',
      syntax: 'git branches',
      commands: ['git branch -a'],
      title: 'display all branches',
      desc: '',
   },
   /* sync */ {
      name: 'sync',
      syntax: 'git sync',
      commands: ['git fetch -p --all', 'git pull'],
      title: 'sync local branch with remote',
      desc: '',
   },
   /* br */ {
      name: 'br',
      syntax: 'git br <branch>',
      rest: '<branch>',
      commands: ['git checkout -b <branch>'],
      title: 'create a branch & checkout',
      desc: '',
   },
   /* co */ {
      name: 'co',
      syntax: 'git co <branch>',
      rest: '<branch>',
      commands: ['git checkout <branch>'],
      title: 'checking out a branch',
      desc: '',
   },
   /* track */ {
      name: 'track',
      syntax: 'git track <remote-branch>',
      rest: '<remote-branch>',
      commands: ['git push -u origin <remote-branch>'],
      tdrSyntax: 'git track <remote> <remote-branch>',
      tdrRest: '<remote> <remote-branch>',
      tdrCommands: ['git push -u <remote> <remote-branch>'],
      title: 'set local branch to track remote branch',
      desc: '',
   },
   /* push-lb */ {
      name: 'push-lb',
      syntax: 'git push-lb <local-branch>',
      rest: '<local-branch>',
      commands: ['git push -u origin <local-branch>'],
      tdrSyntax: 'git push-lb <remote> <local-branch>',
      tdrRest: '<remote> <local-branch>',
      tdrCommands: ['git push -u <remote> <local-branch>'],
      title: 'push local branch to remote',
      desc: '',
   },
   /* delete-lb */ {
      name: 'delete-lb',
      syntax: 'git delete-lb <local-branch>',
      rest: '<local-branch>',
      commands: ['git branch -d <local-branch>'],
      title: 'delete local branch',
      desc: '',
   },
   /* pull-rb */ {
      name: 'pull-rb',
      syntax: 'git pull-rb <remote-branch>',
      rest: '<remote-branch>',
      commands: ['git fetch', 'git checkout <remote-branch>'],
      title: 'pull remote branch to local',
      desc: '',
   },
   /* delete-rb */ {
      name: 'delete-rb',
      syntax: 'git delete-rb <remote-branch>',
      rest: '<remote-branch>',
      commands: ['git push --delete origin <remote-branch>'],
      tdrSyntax: 'git delete-rb <remote> <remote-branch>',
      tdrRest: '<remote> <remote-branch>',
      tdrCommands: ['git push --delete <remote> <remote-branch>'],
      title: 'delete remote branch',
      desc: '',
   },
   /* delete-lb-rb */ {
      name: 'delete-lb-rb',
      syntax: 'git delete-lb-rb <branch>',
      rest: '<branch>',
      commands: ['git branch -d <branch>', 'git push --delete origin <branch>'],
      tdrSyntax: 'git delete-lb-rb <remote> <branch>',
      tdrRest: '<remote> <branch>',
      tdrCommands: ['git branch -d <branch>', 'git push --delete <remote> <branch>'],
      title: 'delete local + remote branch',
      desc: '',
   },
   /* delete-rb-refs */ {
      name: 'delete-rb-refs',
      syntax: 'git delete-rb-refs',
      commands: ['git fetch -p'],
      title: 'delete remote branch refs',
      desc: '',
   },
];

///REMOTE///
export const remote = [
   /* remote-details */ {
      name: 'remote-details',
      syntax: 'git remote-details',
      commands: ['git remote show origin'],
      tdrSyntax: 'git remote-details <remote>',
      tdrRest: '<remote>',
      tdrCommands: ['git remote show <remote>'],
      title: 'show the details of a remote',
      desc: '',
   },
   /* remote-url */ {
      name: 'remote-url',
      syntax: 'git remote-url',
      commands: ['git remote -v'],
      title: 'show list of remotes with their urls',
      desc: '',
   },
   /* add-remote */ {
      name: 'add-remote',
      syntax: 'git add-remote <url>',
      rest: '<url>',
      commands: ['git remote add origin <url>'],
      tdrSyntax: 'git add-remote <remote> <url>',
      tdrRest: '<remote> <url>',
      tdrCommands: ['git remote add <remote> <url>'],
      title: 'add a remote',
      desc: '',
   },
   /* delete-remote */ {
      name: 'delete-remote',
      syntax: 'git delete-remote',
      commands: ['git remote remove origin'],
      tdrSyntax: 'git delete-remote <remote>',
      tdrRest: '<remote>',
      tdrCommands: ['git remote remove <remote>'],
      title: 'delete a remote',
      desc: '',
   },
   /* rename-remote */ {
      name: 'rename-remote',
      syntax: 'git rename-remote <new-name>',
      rest: '<new-name>',
      commands: ['git remote rename origin <new-name>'],
      tdrSyntax: 'git rename-remote <remote> <new-name>',
      tdrRest: '<remote> <new-name>',
      tdrCommands: ['git remote rename <remote> <new-name>'],
      title: 'rename a remote',
      desc: '',
   },
   /* edit-remote-url */ {
      name: 'edit-remote-url',
      syntax: 'git edit-remote-url <new-url>',
      rest: '<new-url>',
      commands: ['git remote remove origin', 'git remote add origin <new-url>'],
      tdrSyntax: 'git edit-remote-url <remote> <new-url>',
      tdrRest: '<remote> <new-url>',
      tdrCommands: ['git remote remove <remote>', 'git remote add <remote> <new-url>'],
      title: 'edit the url of a remote',
      desc: '',
   },
];

///TAG///
export const tag = [
   /* tags */ {
      name: 'tags',
      syntax: 'git tags',
      commands: ['git tag --list --sort=-v:refname'],
      title: 'show all tags',
      desc: '',
   },
   /* last-tag */ {
      name: 'last-tag',
      syntax: 'git last-tag',
      commands: ['git describe --tags --abbrev=0'],
      title: 'show the last tag',
      desc: '',
   },
   /* tag-details */ {
      name: 'tag-details',
      syntax: 'git tag-details <tag>',
      rest: '<tag>',
      commands: ['git show -s <tag>^{commit}'],
      title: 'show the details of a tag',
      desc: '',
   },
   /* release */ {
      name: 'release',
      syntax: "git release <version> '<message>'",
      rest: "<version> '<message>'",
      commands: ["git tag -a <version> -m '<message>'"],
      title: 'create a release aka annotated tag',
      desc: '',
   },
   /* push-lt */ {
      name: 'push-lt',
      syntax: 'git push-lt <local-tag>',
      rest: '<local-tag>',
      commands: ['git push origin <local-tag>'],
      tdrSyntax: 'git push-lt <remote> <local-tag>',
      tdrRest: '<remote> <local-tag>',
      tdrCommands: ['git push <remote> <local-tag>'],
      title: 'push local tag to remote',
      desc: '',
   },
   /* delete-lt */ {
      name: 'delete-lt',
      syntax: 'git delete-lt <local-tag>',
      rest: '<local-tag>',
      commands: ['git tag -d <local-tag>'],
      title: 'delete local tag',
      desc: '',
   },
   /* delete-rt */ {
      name: 'delete-rt',
      syntax: 'git delete-rt <remote-tag>',
      rest: '<remote-tag>',
      commands: ['git push origin --delete <remote-tag>'],
      tdrSyntax: 'git delete-rt <remote> <remote-tag>',
      tdrRest: '<remote> <remote-tag>',
      tdrCommands: ['git push <remote> --delete <remote-tag>'],
      title: 'delete remote tag',
      desc: '',
   },
   /* delete-lt-rt */ {
      name: 'delete-lt-rt',
      syntax: 'git delete-lt-rt <tag>',
      rest: '<tag>',
      commands: ['git tag -d <tag>', 'git push origin --delete <tag>'],
      tdrSyntax: 'git delete-lt-rt <remote> <tag>',
      tdrRest: '<remote> <tag>',
      tdrCommands: ['git tag -d <tag>', 'git push <remote> --delete <tag>'],
      title: 'delete local + remote tag',
      desc: '',
   },
   /* sync-tags */ {
      name: 'sync-tags',
      syntax: 'git sync-tags',
      commands: ['git fetch --tags', 'git push origin --tags'],
      tdrSyntax: 'git sync-tags <remote>',
      tdrRest: '<remote>',
      tdrCommands: ['git fetch --tags', 'git push <remote> --tags'],
      title: 'sync local & remote tags',
      desc: '',
   },
   /* push-all-lt */ {
      name: 'push-all-lt',
      syntax: 'git push-all-lt',
      commands: ['git push origin --tags'],
      tdrSyntax: 'git push-all-lt <remote>',
      tdrRest: '<remote>',
      tdrCommands: ['git push <remote> --tags'],
      title: 'push all local tags to remote',
      desc: '',
   },
   /* pull-all-rt */ {
      name: 'pull-all-rt',
      syntax: 'git pull-all-rt',
      commands: ['git fetch --all --tags'],
      title: 'pull all remote tags to local',
      desc: '',
   },
];

///LOG///
export const log = [
   /* l */ {
      name: 'l',
      syntax: 'git l',
      commands: ['git log --decorate'],
      title: 'show log of commits',
      desc: '',
   },
   /* last */ {
      name: 'last',
      syntax: 'git last',
      commands: ['git log -1 HEAD --decorate'],
      title: 'show the last commit',
      desc: '',
   },
   /* graph */ {
      name: 'graph',
      syntax: 'git graph',
      commands: ['git log --oneline --graph --all'],
      title: 'show graph of commits',
      desc: '',
   },
];
