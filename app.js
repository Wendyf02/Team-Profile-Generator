
const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");


const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");



const render = require("./lib/Rendererhtml");

const teamArray =[];

//Manager promt//

function promptUser(answer) { 
    inquirer.prompt([

      {   
          type: "list",
          name: "role",
          message: "what is your role?",
          choices: ["Engineer", "Intern", "Manager" ]
      },

    ]).then(function  (res) {
        //should use switch case instead bof if else starting here
        console.log(res)
        if (res.role === "Engineer") {
            inquirer.prompt([
                {
                    name: "name",
                    message: "What is your name?",
                    type: "input"
                },
                {
                    name: "github",
                    type: "input",
                    message: "What is your github Username?"
                },
                {
                    name: "email",
                    type: "input", 
                    message:"What is your email?"
                },
                {
                    name: "Id",
                    type: "input", 
                    message:"What is your Id?"
                }
            ]).then(function (engineerRes) { 
                var newEngineer = new Engineer(engineerRes.name, engineerRes.email, engineerRes.Id, engineerRes.github)
                console.log(newEngineer);
                // run promptUser
                teamArray.push(newEngineer);
                promptUser();
            });

        } else if (res.role === "Intern") {
                 inquirer.prompt([

                {
                    name: "name",
                    message:"What is your name?",
                    type: "input"
                },
                {
                    name: "email",
                    type: "input",
                    message: "What is your email?"
                },
                {
                    name: "school",
                    type: "input",
                    message: "where did you graduate from college?"
                }

            ]).then(function (internRes) { 
                var newIntern = new Intern(internRes.name, internRes.email, internRes.Id, internRes.school)
                console.log(newIntern);
                // run promptUser
                teamArray.push(newIntern);
                promptUser();
            });

        } else if (res.role === "Manager") {
            inquirer.prompt([

           {
               name: "name",
               message:"What is your name?",
               type: "input"
           },
           {
               name: "email",
               type: "input",
               message: "What is your email?"
           },
           {
               name: "office",
               type: "input",
               message: "what is your office number?"
           }

        ]).then(function (managerRes) { 
           var newManager = new Manager(managerRes.name, managerRes.email, managerRes.Id, managerRes.office)
           console.log(newManager);
           // run promptUser
           teamArray.push(newManager);
           promptUser();
       });

    };

    })







};

    promptUser();