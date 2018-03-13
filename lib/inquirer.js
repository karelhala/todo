const inquirer = require('inquirer');
const { listToDos, saveToDos} = require('./files');
const chalk = require('chalk');

function newTodo() {
  const questions = [
    {
      type: 'input',
      name: 'newTodo',
      message: 'Enter a new TODO:'
    }
  ];
  return inquirer.prompt(questions).then(data => {
    if (data.newTodo) {
      saveToDos([...listToDos(), data.newTodo]);
    }
    return data;
  });
}

function markDone() {
  let todos = listToDos().map((todo, index) => ({value: index, name: todo}));
  if (todos.length > 0) {
    const questions = [
      {
        type: 'checkbox',
        name: 'done',
        message: 'Select TODOs which you finished:',
        pageSize: 15,
        choices: todos,
      }
    ];
    return inquirer.prompt(questions).then(data => {
      data.done.reverse().forEach(index => todos.splice(index, 1));
      saveToDos(todos.map(todo => todo.name));
      return data;
    });
  }
}

module.exports = {
  markDone,
  newTodo,
};
