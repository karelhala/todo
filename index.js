const chalk = require('chalk');
const { markDone, newTodo } = require('./lib/inquirer');
const { changeToDoFile, readToDos } = require('./lib/files');

const argv = require('minimist')(process.argv.slice(2));

function printTasks() {
  const tasksFile = readToDos();
  if (tasksFile.length > 0) {
    console.log(chalk.bold.greenBright('Good luck on these tasks:'));
    console.log(chalk.bold.blue(tasksFile));
  }
}

changeToDoFile(argv.f || argv.file);
const isAdd = argv.a || argv.add;
const isMark = argv.m || argv.mark;
const isList = argv.l || argv.list;

if (isAdd && !isList) {
  newTodo().then(() => isMark && markDone()).then(() => printTasks());
} else if (!isList) {
  newTodo().then(() => markDone()).then(() => printTasks());
}

if (isList) {
  printTasks();
}
