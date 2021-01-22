
const inquirer = require("./inquirer");
const jest = require("jest");
const fs = require("fs");


const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const OUTPUT_DIR = path.resolve(_dirname, "output");
const outputPath = path.join(OUTPUT_DIR , "team.html");

const render = require("./lib/Rendererhtml");

const teamArray =[];

//Manager promt//

function promptUser(answer) {
    return inquirer.prompt([

      {   
          type: " list",
          name: "role",
          meassage: "what is your role?",
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
                    message: "What is your email?"
                }

            ]).then(function (engineerRes) { 
                var newEngineer = new Engineer(engineerRes.name, engineerRes.email, uniqueId, EngineerRes.github)
                uniqueId = uniqueId + 1; 
                console.log(newEngineer);
                // run promptUser
                teamArray.push(newEngineer);
                addUser();
            });

        } else if (res.role === "Intern") {
                 inquirer.prompt([

                {
                    name: "name",
                    message: "What is your name?",
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

            ]).then(function (InternRes) { 
                var newEngineer = new Intern(InternRes.name, internRes.email, uniqueId, InternRes.school)
                uniqueId = uniqueId + 1; 
                console.log(newIntern);
                // run promptUser
                teamArray.push(newIntern);
                addUser();
            });










        }






    })
























}
    

            





































           ])
        

























      })




}