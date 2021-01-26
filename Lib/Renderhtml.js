
const fs = require("fs");

function startHTML() {

const html =  `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Team</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <link rel="stylesheet" href="style.css">
<script src="https://kit.fontawesome.com/c502137733.js"></script>

</head>
<body>
    
<nav class="navbar  justify-content-center align-items-center">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1 w-100 text-center">My Team</span>
  </div>
</nav>

<div class="container">  
   <div class="row"> `;
   fs.writeFile("./output/main.html", html, function(err) {
       if (err) {
            console.log(err);
          
       }

      
   });
    console.log("start");
}


function addhtml(member) {  
    return new Promise(function(resolve, reject) {  
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        let data = "";
        if(role === "Manager"){
            const officeNumber = member.getOfficeNumber();
            data = ` <div id="manager" class="card employee-card" style="width: 20rem;">
            <div class="card-header">
               <h2 class="card-title">${name}</h2>
               <h3 class="card-title"><i class="fa fa-coffee mr-2"></i>Manager</h3>
            </div>
        <div class="card">
            <ul class="list-group">
              <li class="list-group-item">ID:${id}</li>
              <li class="list-group-item">Email:<a href="mailto:angelalieben@gmail.com">${email}</a></li>
              <li class="list-group-item">Office Number:${officeNumber}</li>
            </ul>
          </div>
        </div> `;


        } else if (role === "Engineer") {
            const github = member.getGithub();
            data = `
            <div id="engineer" class="card employee-card" style="width: 20rem;">
                <div class="card-header">
                   <h2 class="card-title">${name}</h2>
                   <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
                </div>
            <div class="card">
                <ul class="list-group">
                  <li class="list-group-item">ID:${id}</li>
                  <li class="list-group-item">Email:<a href="mailto:milabraun@gmail.com">${email}</a></li>
                  <li class="list-group-item">GitHub:${github}</a></li>
                </ul>
              </div>
            </div>`;
        } else {
               const school = member.getSchool();
               data = ` <div id="intern" class="card employee-card" style="width: 20rem;">
               <div class="card-header">
                  <h2 class="card-title">${name}</h2>
                  <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
               </div>
           <div class="card">
               <ul class="list-group">
                 <li class="list-group-item">ID:${id}</li>
                 <li class="list-group-item">Email:<a href="mailto:lunaferragni@g.com">lunaferragni@gmail.com</a></li>
                 <li class="list-group-item">School:${school}</li>
               </ul>
             </div>
           </div> `
        }

        console.log("adding team member");
        fs.appendFile("./output/main.html", data, function (err) {
            if (err) {
                  return reject(err);
            }

              return resolve();

        });

   });

} 

function finishHTML() {

const html = ` </div>
      </div>

</body>
</html> `;

      fs.appendFile("./output/main.html" , html , function (err) {
          if (err)
             console.log(err);
        

      });
            console.log("end");

}
function generatedhtml(team) {
   console.log(team)

   startHTML()
  for (let index = 0; index < team.length; index++) {
     addhtml(team[index])
    
  }



}

module.exports = generatedhtml;

