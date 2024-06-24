
      
// ---------------------Uppgift 1 (Variabler)  

    let fruit = "Apple";
  
    fruit = "Orange";
    console.log("The fruit is", fruit);
  
//----------------------Uppgift 2 (Matematik) 
    
    console.log("Uppgift2a:", 27 + 3.5);  
    console.log("Uppgift2b:", 2024 - 1969);  
    console.log("Uppgift2c:", 65 / 240);
    console.log("Uppgift2d:", 0.2708 * 100);

//--------------------- Uppgift 3 (Strängar)

    console.log("Mattias El Mansouri".toUpperCase());  
    console.log("    Remove whitespace   ".trim());
    console.log("How many characters long is this string?".length);

//----------------------Uppgift 4 (Villkorssatser)

    const developerIsTired = true

    if (developerIsTired) {
     console.log("Make coffee!")   }

    if (developerIsTired) {
     console.log("Make coffee!")} 
     else {console.log("Make tea!")  }

    const carSpeed = 85

    if (carSpeed > 100) {
    console.log("Slow down!"); } 
    else {console.log("Carry on");}


//----------------------Uppgift 5 (Boolska uttryck)

// Uppgift 5a 

    const wordCount = 0

    if (wordCount === 0) {
     console.log("Get writing!");}
// Uppgift 5b 

    const currentTemperature = 15
    const goneForARun = false

    if (currentTemperature > 10 && !goneForARun) {
    console.log("Go for a run!"); }

// Uppgfit 5c 

const name = "Mattias"

  if (name.length > 10) {
    console.log("You have a long name!");} else if (name.length < 5) {
    console.log("You have a short name!");
  } else {
    console.log("You have a medium length name!");
  }

  //----------------------Uppgift 6 (Funktioner) 
  
// Uppgfit 6a

function printCurrentTime() {
    const currentDate = new Date();
    return currentDate.toLocaleTimeString();
  }
  
  console.log(printCurrentTime());
  

// Uppgfit 6b
    const printMyName = () => {
    console.log("Mattias El Mansouri");

    printMyName();
    printMyName();
  }
// Uppgfit 6c
    const printGreeting = (name) => {
    console.log(`Hello ${name}`);
  }

  printGreeting("Bob");
  printGreeting("Sue");

// Uppgfit 6d
    function multiply(a, b) {
    return a * b;
  }
  
    const first = multiply(2, 2);
    console.log(first); 
  
    const second = multiply(100, 4);
    console.log(second); 
  

// Uppgfit 6e

function warmEnough(temperature) {
    return temperature > 10;
  } 
  
  if (warmEnough(currentTemperature)) {
    console.log("Go for a run!");
  } else {
    console.log("It's too cold to run.");
  }
  