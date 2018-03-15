const chalk = require('chalk');
const getUsage = require('command-line-usage');
const repoUrl = require('../package.json').repository.url;

const sections = [
  {
    content: chalk`Project home: {underline ${repoUrl}}`
  }
];

const printUsage = () => console.log(getUsage(sections));

module.exports = {
  printUsage,
};
