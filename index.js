const inquirer = require(`inquirer`);
const fs = require('fs');

const readMe = ({data}) =>
`<README.md>
${title}
***
${description}
***
Table of Contents
-Installation
-Usage
-Credits
-License
***
${installation}
***
${usage}
***
${contributing}`









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
// {
//     type: 'input',
//     message: 'tabel of contentns???.... ',
//     name: 'tableContents',
// },
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
    type: 'input',
    message: 'List your collaborators, if any, with links to their Github. If none type N/A',
    name: 'contributing',
},

])

.then((answers) => {
    const readMeContent = readMe(answers);

    fs.writeFile('README.md', readMeContent, (err) =>
    err ? console.log(err) : console.log('file created!')
    );
});