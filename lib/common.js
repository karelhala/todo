const chalk = require('chalk');
const argv = require('minimist')(process.argv.slice(2));

const { readToDos } = require('./files');

const IS_FILE = argv.f || argv.file;
const IS_ADD = argv.a || argv.add;
const IS_MARK = argv.m || argv.mark;
const IS_LIST = argv.l || argv.list;
const IS_VERSION = argv.v || argv.version;
const IS_HELP = argv.h || argv.help;

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
  IS_FILE,
  IS_ADD,
  IS_HELP,
  IS_LIST,
  IS_MARK,
  IS_VERSION,
};
