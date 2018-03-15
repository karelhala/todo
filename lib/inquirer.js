const inquirer = require('inquirer');
const { listToDos, saveToDos} = require('./files');
const chalk = require('chalk');
const { IS_MARK, IS_ADD, NO_OPTIONS } = require('./common');

function createQuestion() {
  let questions = [];
  if (IS_ADD || NO_OPTIONS) {
    questions.push(newTodoQuestion);
  }

  if (IS_MARK || NO_OPTIONS) {
    questions.push(markDoneQuestion());
  }

  return questions;
}

const newTodoQuestion = {
  type: 'input',
  name: 'newTodo',
  message: 'Enter a new TODO:'
};

const markDoneQuestion = () => ({
  type: 'checkbox',
  name: 'done',
  message: 'Select TODOs which you finished:',
  pageSize: 15,
  choices: listToDos().map((todo, index) => ({value: index, name: todo})),
});

function addTodo(todo) {
  saveToDos([...listToDos(), todo])
}

function removeTodo(doneTodos) {
  let todos = listToDos();
  doneTodos.reverse().forEach(index => todos.splice(index, 1));
  saveToDos(todos);
}

function runQuestions(questions) {
  return inquirer.prompt(questions).then(data => {
    if (data.newTodo) {
      addTodo(data.newTodo)
    }
    if (data.done) {
      removeTodo(data.done);
    }
    return data;
  });
}

module.exports = {
  markDoneQuestion,
  newTodoQuestion,
  runQuestions,
  createQuestion,
};
