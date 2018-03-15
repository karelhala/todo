#!/usr/bin/env node

const {runQuestions, createQuestion } = require('./lib/inquirer');
const { version } = require('./package.json');
const { changeToDoFile } = require('./lib/files');
const { printUsage } = require('./lib/usage');
const { printTasks, IS_VERSION, IS_HELP, IS_FILE } = require('./lib/common');

if (IS_VERSION) {
  console.log(version);
} else if (IS_HELP) {
  printUsage()
} else {
  changeToDoFile(IS_FILE);
  runQuestions(createQuestion()).then(() => printTasks());
}
