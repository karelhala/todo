const chalk = require('chalk');
const { readToDos } = require('./files');

function printTasks() {
  const tasksFile = readToDos();
  if (tasksFile.length > 0) {
    console.log(chalk.bold.greenBright('Good luck on these tasks:'));
    console.log(chalk.bold.yellowBright(tasksFile));
  } else {
    console.log(chalk.bold.yellowBright('No TODOs - sweet 👊\ngo have a coffee ☕'));
  }
}

module.exports = {
  printTasks,
};
