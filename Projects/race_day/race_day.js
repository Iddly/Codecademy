let raceNumber = Math.floor(Math.random() * 1000);
let earlyReg = false;
let runnerAge = 32;

if (runnerAge > 18 && earlyReg) {
    raceNumber = raceNumber + 1000;
}

if (runnerAge > 18 && earlyReg) {
    console.log(`Your Race Time: 9:30 am.`);
    console.log(`Your Race Number: ${raceNumber}.`);
} else if (runnerAge > 18 && !earlyReg) {
    console.log(`Your Race Time: 11:00 am.`);
    console.log(`Your Race Number: ${raceNumber}.`);
} else if (runnerAge < 18) {
    console.log(`Your Race Time: 12:30 pm.`);
    console.log(`Your Race Number: ${raceNumber}.`);
} else {
    console.log(`Please see registration desk.`);
}
