const { homedir, EOL } = require('os');
const { readFileSync, writeFileSync, existsSync } = require('fs');

let toDoFile = `${homedir()}/.todos`;

function changeToDoFile(locationPath) {
  if (locationPath) {
    if (locationPath[0] === '/') {
      toDoFile = locationPath;
    } else {
      toDoFile = `${homedir()}/${locationPath}`;
    }
  }
  // toDoFile = locationPath;
}

function readToDos() {
  return readFileSync(toDoFile, 'utf8');
}

function listToDos() {
  return existsSync(toDoFile) ? readToDos().split(EOL).filter(item => item) : [];
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
