const inquirer = require(`inquirer`);
const fs = require('fs');

const readMe = ({title, description, installation, usage, contributing, license, test, github, email}) =>
`# ${title}
***
## Description
${description}
***
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Test](#test)
- [Questions](#questions)
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
- https://github.com/${github}
- For additional questions please email me at: ${email}`;









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
    message: 'Provide instructions and examples for use.',
    name: 'usage',
},
{
    type: 'list',
    message: 'Select a license from the list.',
    choices: [`![GPL license](https://img.shields.io/static/v1?label=license&message=GPL&color=green)`, '![MIT license](https://img.shields.io/static/v1?label=license&message=MIT&color=blue)','![IPL 1.0 License](https://img.shields.io/badge/License-IPL%201.0-blue.svg)'],
    name: 'license',
},
{
    type: 'input',
    message: 'List your collaborators, if any, with links to their Github. If none type N/A.',
    name: 'contributing',
},
{
    type: 'input',
    message: 'Did you write any tests for your application? If so, please describe.',
    name: 'test',
},
{
    type: 'input',
    message: 'What is your Github username?',
    name: 'github',
},
{
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
},

])

.then((answers) => {
    const readMeContent = readMe(answers);

    fs.writeFile('README.md', readMeContent, (err) =>
    err ? console.log(err) : console.log('file created!')
    );
});