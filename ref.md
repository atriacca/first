/Users/alan/development/Assignments/exercises/
~/development/groupProject (alan-1-forms)

import React from "react";
import ReactDOM from "react-dom";
import App from './App';

V School exercise: 

MVC: 
Model - Data 
Controller - interaction between the model and the view
View - Presentation/interface


npm init react-app 
npm i -g create-react-app // once
create-react-app .
To create folder too: npm i -g create-react-app newFolder react

// to import {Switch, Route, Link} from 'react-router-dom':
npm i react-router-dom 
npm install -S axios
npm install react react-dom --save

create-react-app . (then do `rm -rf git` if in client folder)
// In front-end (client folder) package.json file add `"proxy": "http://localhost:7000"`
npm i axios react-router-dom prop-types


// Run Surge:
npm run deploy

Jest:
https://coursework.vschool.io/jest-testing/
https://jestjs.io/docs/en/getting-started
To install jest, create a package.json file in your project directory and then install jest to that project with the command:
npm install --save-dev jest
We will install jest locally by making the following change to the test script which has default text "test": "echo \"Error: no test specified\" && exit 1":
{
  "name": "testing-with-jest",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest",
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "jest": "^23.6.0"
  }
}
echo "# dom-debug" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/atriacca/dom-debug.git
git push -u origin master

git remote -v
git add -A
git commit -m "first commit"


git add -A
git status
git commit -m "first commit"
git push

git commit -m "second commit, minor updates"
git push --set-upstream origin master


git init
git commit -a


//push changes to github!  
1. `git add -A` or `git add .`
    1.5 `git status`
        "node_modules"
        `git reset` => (then go and ignore, ie .gitignore, my node_modules)
        `git rm -r --cached node_modules` // if pushed unwanted modules to git hub
2. `git commit -m "first commit"`     
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
MORE STEPS FROMNATE VIA SLACK
https://coursework.vschool.io/git-commands-and-workflows-cheat-sheet/

Git
// Commiting code changes
    1. git add -A  || git add .
        1.5  git status
            "node_modules"
                git reset => (then go and .gitignore your node_modules)
            // If node_modules are still being added after 
            // you put node_modules in .gitignore
                git rm -r --cached node_modules (removes node_modules from remote)
    2. git commit -m "commit message"
    3. git push

//  Creating a New Repo
    1. Locally create a directory for the repository
    2. Go create new repo on github
    3. Copy script from github to directory in console and press ENTER.

// Git Branches
    1.  git branch <branch-name>            // Creates local git branch
    2.  git checkout <branch-name>          // Checkout to local git branch
    3.  git add -A, git commit -m "message", git push
        3.5 The first time you push a branch, you have to set an upsteam origin (branch)
            - git push --set-upstream origin <branch-name>   // Creates Remote branch 
        
// When the branch is ready to be a part of Master
    1. Locally, checkout master
    2. git pull   // To get the most up to date master branch from github
    3. git checkout <branch-name>
    4. git merge --no-ff master
        // xcode
    5. After merge/conflict fixes. git add -A, git commit -m "message", git push
    6. Got to github, and submit merge/pull request
    7. If no conflicts, confirm pull request
    8. delete branch on github
    9. Locally, checkout to master, git branch -d <branch-name> // deletes local branch
    10. git pull  // to get the most up to date master
    11. Create new branch, checkout to it, and keep coding

// Sample script from github:
echo "# marioPest" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/atriacca/marioPest.git
git push -u origin master

echo "# myFolder" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/atriacca/myFolder.git
git push -u origin master

4/23: Done thru exercises/bugs-on-a-plane...


youTube: Data and Picard


Express:
Installation
Create project folder/directory on your file system
From the cmd prompt run: npm init. If you want to skip all the questions, you can add the -y flag. (
npm init -y
).
This creates a package.json file that makes it easier to set up your project in the future. It's also where we'll save a list of dependencies that are required for this app to work. For example, since it's going to be an express app, we'll have express listed as a dependency.
From the cmd prompt, anytime you need a new NPM package run: 
npm install --save <packageName> (e.g.: 
npm install --save express
)
Many times online you will be told to just run npm install <packageName>. Unless you have a good reason not to, you should always add the --save flag to this command so that you can automatically add the package you're installing as a dependency in package.json.
Create new folders for /routes and /modules
route files require express and will house .get, .post, .put and .delete as well as uuid if a fake DB:
const express = require('express')
const whateverRouter = express.Router()
const uuidv4 = require('uuid/v4')
module.exports = whateverRouter

// To generate random IDs:
npm install uuid
(then use "uuidv4()" as the ID in the resource's object)

// To kill all connections from terminal to all ports: 
pkill node

// to remove react redundant repository: 
rm -rf .git 

// MongoDB:
npm install --save mongoose
Here is how you connect to MongoDB with Mongoose:
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db-name',{useNewUrlParser: true})
.then(()=> console.log("Connected to MongoDB"))
.catch(err => console.error(err));
You may replace db-name with whatever your database is called. localhost implies that MongoDB is running on your local machine, but it is possible to use a remote database service such as MongoLab.

npm install --save morgan
