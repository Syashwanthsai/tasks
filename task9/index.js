let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true; 


let runnerAge = 25; 
if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
}

if (runnerAge > 18 && registeredEarly) {
  console.log(`Race will start at 9:30 am. Your race number is ${raceNumber}.`);
} else if (runnerAge > 18 && !registeredEarly) {
  console.log(`Race will start at 11:00 am. Your race number is ${raceNumber}.`);
} else if (runnerAge < 18) {
  console.log(`Race will start at 12:30 pm. Your race number is ${raceNumber}.`);
} else {
  console.log('Please see the registration desk.');
}
