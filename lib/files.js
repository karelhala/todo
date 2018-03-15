const chalk = require('chalk');
const { homedir, EOL } = require('os');
const { readFileSync, writeFileSync, existsSync } = require('fs');

let toDoFile;

function changeToDoFile(locationPath) {
  if (locationPath) {
    if (locationPath[0] === '/') {
      toDoFile = locationPath;
    } else {
      toDoFile = `${homedir()}/${locationPath}`;
    }
  } else {
    toDoFile = `${homedir()}/.todos`;
  }
  console.log(chalk.gray('TODOs located in file: '));
  console.log(chalk.gray(toDoFile));
  // toDoFile = locationPath;
}

function readToDos() {
  return existsSync(toDoFile) ? readFileSync(toDoFile, 'utf8'): '';
}

function listToDos() {
  return readToDos().split(EOL).filter(item => item);
}

function saveToDos(todos) {
  writeFileSync(toDoFile, todos.length === 0 ? '' : todos.join(EOL) + EOL, 'utf8');
}

module.exports = {
  listToDos,
  saveToDos,
  changeToDoFile,
  readToDos,
};
