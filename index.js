const chalk = require('chalk');
const { markDone, newTodo } = require('./lib/inquirer');
const { changeToDoFile } = require('./lib/files');
const { printTasks } = require('./lib/common');

const argv = require('minimist')(process.argv.slice(2));

changeToDoFile(argv.f || argv.file);
const isAdd = argv.a || argv.add;
const isMark = argv.m || argv.mark;
const isList = argv.l || argv.list;

if (isAdd && !isList) {
  newTodo()
    .then(() => isMark && markDone())
    .then(() => printTasks());
} else if (!isList) {
  newTodo()
    .then(() => markDone())
    .then(() => printTasks());
}

if (isList) {
  printTasks();
}
