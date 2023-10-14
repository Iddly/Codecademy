//my current age
const myAge = 32;
//dogs age faster in the 1st 2 years of their life than the rest
let earlyYears = 2;
earlyYears = earlyYears * 10.5;
//this is a variable for every year after the earlyYears
let laterYears = myAge - 2;
//calculates the laterYears conversion
laterYears = laterYears * 4;
//convert my age to dog years
let myAgeInDogYears = earlyYears + laterYears;
//my name converted to all lowercase
const myName =  'Tyler'.toLowerCase();
//printing all calculated data
console.log(`My name is ${myName}. I am ${myAge} years old which is ${myAgeInDogYears} years old in dog years.`);
