#!/usr/bin/env node

const chalk = require('chalk');
const { markDone, newTodo } = require('./lib/inquirer');
const { version } = require('./package.json');
const { changeToDoFile } = require('./lib/files');
const { printUsage } = require('./lib/usage');
const { printTasks, IS_MARK, IS_VERSION, IS_LIST, IS_HELP, IS_ADD, IS_FILE } = require('./lib/common');

if (IS_VERSION) {
  console.log(version);
} else if (IS_HELP) {
  printUsage()
} else {
  changeToDoFile(IS_FILE);
  if (IS_ADD && !IS_LIST) {
    newTodo()
      .then(() => IS_MARK && markDone())
      .then(() => printTasks());
  } else if (!IS_ADD && IS_MARK && !IS_LIST) {
    markDone()
      .then(() => printTasks());
  } else if (!IS_LIST) {
    newTodo()
      .then(() => markDone())
      .then(() => printTasks());
  }

  if (IS_LIST) {
    printTasks();
  }
}
