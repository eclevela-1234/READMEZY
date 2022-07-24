// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of your project? (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("You need to enter a project name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message:
      "Provide a description of the project. (Required) \n Consider detailing your motivation, what problem it solves, what tools you used, and what you learned. \n",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("You need to enter a project description!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "Enter your Github username (Required)",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("You need to enter a username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address (Required)",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("You need to enter an email address");
        return false;
      }
    },
  },
  {
    type: "checkbox",
    name: "sections",
    message:
      "What sections would you like to include? (Check all that apply) \n",
    choices: [
      "Link to Deployed Site",
      "Installation Instructions",
      "Usage Information",
      "Contribution Guidelines",
      "Test Instructions",
      "Collaboration Credits",
    ],
  },
];

const sectionQuestions = (sectionSubjects) => {
    let sectionQuestionsArr = []; 
  for (i = 0; i < sectionSubjects.length; i++) {
    let sectionQuestionsObj = {
      type: "input",
      name: sectionSubjects[i],
      message: "Add the " + sectionSubjects[i] + " below: \n",
      validate: (input) => {
        return input ? true : false;
      },
    };
    sectionQuestionsArr.push(sectionQuestionsObj);
  }
  return sectionQuestionsArr;
};
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  return (
    inquirer
      .prompt(questions)
      // .then(promptSections)
      .then((answers) => {
        let sectionSubjects = answers.sections;
        console.log(sectionQuestions(sectionSubjects));
        console.log(answers);
        // console.log(name, description, contact);
      })
  );
  // .then(data => console.log(data));
}

// Function call to initialize app
init();
