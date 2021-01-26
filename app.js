
const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");


const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");



const render = require("./lib/Renderhtml");
console.log(render)

const teamArray =[];

//Manager promt//

function promptUser(answer) { 
    inquirer.prompt([

      {   
          type: "list",
          name: "role",
          message: "what is your role?",
          choices: ["Manager", "Engineer", "Intern",  "done adding team member" ]
      },

    ]).then(function (res) {
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
                    name: "Id",
                    type: "input", 
                    message:"What is your Id?"
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
                }
                
            ]).then(function (engineerRes) { 
                var newEngineer = new Engineer(engineerRes.name,  engineerRes.Id, engineerRes.email, engineerRes.github)
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
                    name: "Id",
                    type: "input", 
                    message:"What is your Id?"
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
                var newIntern = new Intern(internRes.name, internRes.Id, internRes.email, internRes.school)
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
            name: "Id",
            type: "input", 
            message:"What is your Id?"
           },
           {
               name: "email",
               type: "input",
               message: "What is your email?"
           },
           {
               name: "officenumber",
               type: "input",
               message: "what is your officenumber?"
           }

        ]).then(function (managerRes) { 
           var newManager = new Manager(managerRes.name,  managerRes.Id, managerRes.email, managerRes.officenumber)
           console.log(newManager);
           // run promptUser
           teamArray.push(newManager);
           promptUser();
       });

    }else {
        render(teamArray)
    }




    })

};

       


promptUser();