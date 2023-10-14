//temperature in kelvin
const kelvin = 293;
//kelvin converted to celsius
const celsius = kelvin - 273;
//celsius converted to farenheight
let farenheight = celsius * (9/5) + 32;
//removes decimal from farenheight 
farenheight = Math.floor(farenheight);
console.log(`The temperature is ${farenheight} degress in Farenheight`);