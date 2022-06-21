const inquirer = require(`inquirer`);
const fs = require('fs');

const readMe = ({title, description, installation, usage, contributing, license, test, github}) =>
`#${title}
***
## Description
${description}
***
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
***
## Installation
${installation}
***
## Usage
${usage}
***
## Contributing
${contributing}
***
## License
${license}
## Test
${test}
***
## Questions
https://github.com/${github}`;









inquirer
.prompt([
{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
},
{
    type: 'input',
    message: 'Describe your project?',
    name: 'description',
},
{
    type: 'input',
    message: 'What are the steps required to install your project?',
    name: 'installation',
},
{
    type: 'input',
    message: 'Provide instructions and examples for use?',
    name: 'usage',
},
{
    type: 'list',
    message: 'Select a license from the list',
    choices: [`![GPL license](https://img.shields.io/static/v1?label=license&message=GPL&color=green)`, '![MIT license](https://img.shields.io/static/v1?label=license&message=MIT&color=blue)'],
    name: 'license',
},
{
    type: 'input',
    message: 'List your collaborators, if any, with links to their Github. If none type N/A',
    name: 'contributing',
},
{
    type: 'input',
    message: 'Did you write any tests for your application? If so, please describe.',
    name: 'test',
},
{
    type: 'input',
    message: 'Enter your Github username.',
    name: 'github',
},

])

.then((answers) => {
    const readMeContent = readMe(answers);

    fs.writeFile('README.md', readMeContent, (err) =>
    err ? console.log(err) : console.log('file created!')
    );
});