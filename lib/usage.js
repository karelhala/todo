const chalk = require('chalk');
const getUsage = require('command-line-usage');
const repoUrl = require('../package.json').repository.url;

const sections = [
  {
    header: 'todo-cli',
    content: 'This CLI tool lets you manage TODO tasks.'
  },
  {
    header: 'Usage',
    content: chalk`{bold todo-cli}\n{bold todo-cli} [OPTION]`
  },
  {
    header: 'Options',
    optionList: [{
      name: 'file',
      alias: 'f',
      typeLabel: chalk`{underline file}`,
      description: 'Path where TODOs will be stored. Either absolute path or relative path to your home.',
      type: String
    },
    {
      name: 'add',
      alias: 'a',
      description: 'Interactively add new TODO task.',
      type: Boolean
    },
    {
      name: 'mark',
      alias: 'm',
      description: 'Interactively mark multiple items as done.',
      type: Boolean
    },
    {
      name: 'list',
      alias: 'l',
      description: 'List all TODO items.',
      type: Boolean
    },
    {
      name: 'version',
      alias: 'v',
      description: chalk`Print the {bold todo-cli} version`,
      type: Boolean
    },
    {
      name: 'help',
      alias: 'h',
      description: 'Prints this usage guide.',
      type: Boolean
    }]
  },
  {
    content: chalk`Project home: {underline ${repoUrl}}`
  }
];

const printUsage = () => console.log(getUsage(sections));

module.exports = {
  printUsage,
};
