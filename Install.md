/Users/alan/development/Assignments/exercises/

npm start
node xxxx.js
nodemon xxxx.js


npm init react-app 
npm i -g create-react-app // once
create-react-app . // in client folder for full stack
To create folder too: npm i -g create-react-app newFolder react

// to import {Switch, Route, Link} from 'react-router-dom':
npm i react-router-dom 
npm install -S axios
npm install react react-dom

create-react-app . (then do `rm -rf git` if in client folder)
// In front-end (client folder) package.json file add `"proxy": "http://localhost:7000"`
npm i axios react-router-dom prop-types

// Express: Inside the project's folder/directory
npm init -y
npm install express

// To generate random IDs:
npm install uuid // (then use "uuidv4()" as the ID in the resource's object)

// To kill all connections from terminal to all ports: 
pkill node

// MongoDB:
npm install mongoose

// Morgan:
npm install morgan

All three for back-end:
npm init -y
npm install express morgan mongoose

// Run Surge:
npm run deploy

// Jest:
To install jest, create a package.json file in your project directory and then install jest to that project with the command:
npm install-dev jest

// Git:
git init
git commit -a
//push changes to github!  
1. `git add -A` or `git add .`
    1.5 `git status`
        "node_modules"
        `git reset` => (then go and ignore, ie .gitignore, my node_modules)
        `git rm -r --cached node_modules` // if pushed unwanted modules to git hub
2. `git commit -m "commit message"`     
3. `git push`

To create new repo
1. Locally create a directory for the repo
2. Go create new repo on github
3. Copy script from github to directory in console and press ENTER

GIT branches
ONLY push from "master" ONCE!
1. git branch <"branch-name">   // Creates local git branch
2. git checkout <"branch-name"> // checkout to local git branch
3. `git add -A`/`git add .`, `git commit -m "message"`, `git push`
    3.5 The first time pushed to branch, we must set an upstream origin (branch)
        - git push -- set-upstream origin <"branch-name">

When the branch is ready to be part if the master
1. Locally, checkout master
    <!-- `git checkout master`... `git add -A`/`git add .`, `git commit -m "more notes"`, `git push` -->
2. `git pull`  // To gett the most up to date master branch from github
3. `git checkout  <"branch-name">`
4. `git merge --no-ff master`
    // xcode
5. After merge/conflict fixes do `git add .`, `git commit -m "message"`, `git push`
6. Got to github, and submit merge/pull request
7. If no conflicts, confirm pull request
8. delete branch on github
9. Locally, checkout to master, git branch -d <branch-name> // deletes local branch
10. git pull  // to get the most up to date master
11. Create new branch, checkout to it, and keep coding

// to remove react redundant repository: 
rm -rf .git 