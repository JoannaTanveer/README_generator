const fs = require('fs');
const inquirer = require('inquirer');
// const format = require('format.md')
const questions =  [
    {
     type: 'input',
     message: "what is the title of your application?",
     name: 'title'
    },
    {
        type: 'input',
        message: 'What is your GitHub user name (exactly as it appears)?',
        name: 'userName'
    },
    {
        type:'input',
        message: 'Please provide your email address.',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your repositry name (exactly as it appears)',
        name: 'repoName'
    
    },
    {
        type: 'input',
        message: 'Please input your live applications link. (exactly as it appears)',
        name: 'liveLink'
    },
    {
        type: 'input',
        message: 'Please input the link to your repository',
        name: 'repositoryLink'
    },
    {
        type: 'input',
        message: 'Please provide a short description of the application. (2-3 sentances)',
        name: 'shortDescription'
    },
    {
        type: 'input',
        message: 'In 1 brief sentance state the problem the application is trying to solve.',
        name: 'problem'
    },
    {
        type: 'input', 
        message: 'Please input the relative path for a screenshot (.png)',
        name: 'screenshot'
    },
    {
        type: 'input',
        message: 'Which npm package was utilized?',
        name: 'npmPackage'
    },
    {
        type: 'input',
        message: 'Why did you utilize that package? What benefit did it provide?',
        name: 'tech1Why'
    },
    {
        type: 'input',
        message: 'What other technology did you utilize? (Can be another package or any other technology)',
        name: 'technology2'
    },
    {
        type: 'input',
        message: 'Why did you utilize that technology/package? What benefit did it provide?',
        name: 'tech2Why'
    },
    {
        type: 'input',
        message: 'What other technology did you utilize? (Can be another package or any other technology)',
        name: 'technology3'
    },
    {
        type: 'input',
        message: 'Why did you utilize that technology/package? What benefit did it provide?',
        name: 'tech3Why'
    },
    {
        type: 'input',
        message: 'What is the first functionality you would like to highlight, and why? (it should show how you are solving the problem stated above.)',
        name: 'functionalityHighlight1'
    },
    {
        type: 'input',
        message: 'What is the second functionality you would like to highlight, and why? (it should show how you are solving the problem stated above.)',
        name: 'functionalityHighlight2'
    },
    {
        type: 'input',
        message: 'Who or what organization would you like to get credit to for their assistance in solving your problem?',
        name: 'credit1'
    },
    {
        type: 'list',
        message: 'What pronoun would you like to use when referring to this person/organization? (use arrow keys to make a choice)',
        choices: ['his', 'her', 'their', 'it\'s'],
        name: 'pronoun1'
    },
    {
        type: 'input',
        message: 'Please input a few words to complete this sentence, to describe the way they helped:...I would like to thank Steve for his .....',
        name: 'helpWhy1'
    },
    {
        type: 'input',
        message: 'Please input a link for that person/organization so that your reader can access their portfolio or home page',
        name: 'helpLink1'
    },
    {
        type: 'input',
        message: 'Who or what organization would you like to get credit to for their assistance in solving your problem?',
        name: 'credit2'
    },
    {
        type: 'list',
        message: 'What pronoun would you like to use when referring to this person/organization? (use arrow keys to make a choice)',
        choices: ['his', 'her', 'their', 'it\'s'],
        name: 'pronoun2'
    },
    {
        type: 'input',
        message: 'Please input a few words to complete this sentence, to describe the way they helped:...I would like to thank Steve for his .....',
        name: 'helpWhy2'
    },
    {
        type: 'input',
        message: 'Please input a link for that person/organization so that your reader can access their portfolio or home page',
        name: 'helpLink2'
    },
    {
        type: 'input',
        message: 'Who or what organization would you like to get credit to for their assistance in solving your problem?',
        name: 'credit3'
    },
    {
        type: 'list',
        message: 'What pronoun would you like to use when referring to this person/organization? (use arrow keys to make a choice)',
        choices: ['his', 'her', 'their', 'it\'s'],
        name: 'pronoun3'
    },
    {
        type: 'input',
        message: 'Please input a few words to complete this sentence, to describe the way they helped:...I would like to thank Steve for his .....',
        name: 'helpWhy3'
    },
    {
        type: 'input',
        message: 'Please input a link for that person/organization so that your reader can access their portfolio or home page',
        name: 'helpLink3'
    },
    {
        type: 'list',
        message: 'Please choose from the following: (use arrow to choose response)',
        choices: ['MIT', 'Apache', 'GNU GPLv3'],
        name: 'license'
    }
]

function promptInquirer (inquiry){
inquirer.prompt(inquiry).then( (answers) => {
    console.log(answers)
    console.log(answers.title)


    let format = 
`
# ${answers.title}


![Badge](https://img.shields.io/github/last-commit/${answers.userName}/${answers.repoName}?style=plastic) ![Badge](https://img.shields.io/github/repo-size/${answers.userName}/${answers.repoName}?style=plastic)

![image relative path](${answers.screenshot})

${answers.shortDescription}
${answers.problem}
       
## Table of Contents
        
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

### Technologies
    
The technologies utilized in this application are as follows: ${answers.npmPackage}, ${answers.technology2}, and ${answers.technology3}. 
- ${answers.npmPackage} was used because ${answers.tech1Why}![link](https://img.shields.io/npm/v/${answers.npmPackage}?style=plastic?logo=npm)
- ${answers.technology2} was used because ${answers.tech2Why}. 
- ${answers.technology3} was used because ${answers.tech3Why}. 
    
### Installation
    
To run this application successfully follow these steps:
1. Install [${answers.repoName}](${answers.repositoryLink}) to your local drive vis terminal/GitBash. This will install the package.json file which contains a list of all the dependencies for this application. 

2. Verify that node is installed in your computer by typing 'node' in the terminal/GitBash. If it returns
    >Welcome to Node.js v12.14.1. (or higher)
    >
    >Type ".help" for more information.
    
 Node.js is installed in your computer. If nothing happens or there is an error, visit [Node.js](https://nodejs.org/) and install the LTS version.
3. Type 'npm install' while in the terminal to install the dependencies. 


### Usage
    
The purpose of this program is to solve ${answers.problem}, as mentioned above. Let's look a little further at how that can be accomplished.
- ${answers.functionalityHighlight1}
- ${answers.functionalityHighlight2}
    
### Credits
    
The Dev community prides itself in the open source culture that it celebrates and maintains. This application couldn't have been made possible without the help of
- ${answers.credit1} for ${answers.pronoun1} ${answers.helpwhy1}. [${answers.credit1}](${answers.helpLink1})
- ${answers.credit2} for ${answers.pronoun2} ${answers.helpwhy2}. [${answers.credit2}](${answers.helpLink2})
- ${answers.credit3} for ${answers.pronoun3} ${answers.helpwhy3}. [${answers.credit3}](${answers.helpLink3})
    
#### Thank You!
    
    
### License
Licensed under the ${answers.license} license. ![link](https://img.shields.io/github/license/${answers.userName}/${answers.repoName}?style=plastic)

### Questions
All questions and comments are welcome! Please contact me at ${answers.email} or visit my [Github Profile](https://github.com/${answers.userName})
`

    writeToFile(format)
}

)}
promptInquirer(questions);


function writeToFile ( data ){
    fs.writeFile('README.md', data , function (err) {
        if (err) throw err;
        console.log('file made')
    })
}

