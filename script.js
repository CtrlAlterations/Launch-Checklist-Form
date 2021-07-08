// Write your JavaScript code here!
/* window.addEventListener("load", function(event) {
   <put fetch here>
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      <put all your logic here>
      console.log("Form has been submitted!")

   });
}); */


window.addEventListener("load", function() {
   //put fetch here
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      response.json().then( function(json) {
         const div = document.getElementById("missionTarget");
         div.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[0].name}</li>
            <li>Diameter: ${json[0].diameter}</li>
            <li>Star: ${json[0].star}</li>
            <li>Distance from Earth: ${json[0].distance}</li>
            <li>Number of Moons: ${json[0].moons}</li>
         </ol>
<img src=${"https://www.nasa.gov/sites/default/files/images/587837main_Kepler16_transit_art2_full.jpg"}> 
   `;
               
      })
   })
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      //put logic here

      let displayPilotName = document.getElementById("pilotName.value");
      let displayCopilotName = document.getElementById("copilotName.value");

      let pilotNameInput= document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");

      let pilotStatusCheck = document.getElementById("pilotStatus");
      let copilotStatusCheck = document.getElementById("copilotStatus");
      let fuelStatusCheck = document.getElementById("fuelStatus");
      let cargoStatusCheck = document.getElementById("cargoStatus");

      let launchStatusInfo = document.getElementById("launchStatus")
      let faultyStatusCheck = document.getElementById("faultyItems");
      let launchReady;
      
      function fillValues () {
        if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || 
            cargoMassInput.value === "") {
               alert("All fields are required!");
            }
         } 

      
      if (pilotNameInput.value !== "" && copilotNameInput.value !== "") {
            pilotStatusCheck.innerHTML = `Pilot ${pilotNameInput.value} is Ready`;
            copilotStatusCheck.innerHTML = `Co-Pilot ${copilotNameInput.value} is Ready`;
            faultyStatusCheck.style.visibility = "visible";
      }

      
      if (fuelLevelInput.value < 10000) {      
            fuelStatusCheck.innerHTML = `There is not enough fuel for launch.`;
            faultyStatusCheck.style.visibility = "visible";
            launchStatusInfo.style.color = "red";
            launchStatusInfo.innerHTML = `Shuttle is not ready to launch.`;
         }
      


      if (cargoMassInput.value > 10000) {     
            cargoStatusCheck.innerHTML = `Cargo mass is too high to launch.`;
            faultyStatusCheck.style.visibility = "visible";
            launchStatusInfo.style.color = "red";
            launchStatusInfo.innerHTML = `Shuttle is not ready to launch.`;
         }

      if (fuelLevelInput.value > 10000)  {
            fuelStatusCheck.innerHTML = `The fuel level is high enough for launch.`;
            faultyStatusCheck.style.visibility = "visible";
            
      }


      if (cargoMassInput.value < 10000) {
            cargoStatusCheck.innerHTML = `The cargo mass is low enough for launch.`;
            
      }


      if (cargoMassInput.value < 10000 && fuelLevelInput.value > 10000) {
            faultyStatusCheck.style.visibility = "visible";   
            launchStatusInfo.style.color = "green";
            launchStatusInfo.innerHTML = `The Shuttle is ready to launch.`;
      }
      
      else {
         alert("Form has been submitted!")
      }
   });  

});


/*
<div id="launchStatusCheck">
            <h2 id="launchStatus">Awaiting Information Before Launch</h2>
            <div id="faultyItems">
                <ol>
                    <li id="pilotStatus">Pilot Ready</li>
                    <li id="copilotStatus">Co-pilot Ready</li>
                    <li id="fuelStatus">Fuel level high enough for launch</li>
                    <li id="cargoStatus">Cargo mass low enough for launch</li>
                </ol>
            </div>
        </div>
*/


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
   
      <ol>
         <li>Name: ${}</li>
         <li>Diameter: ${}</li>
         <li>Star: ${}</li>
         <li>Distance from Earth: ${}</li>
         <li>Number of Moons: ${}</li>
      </ol>
   
<img src="${}">
*/


