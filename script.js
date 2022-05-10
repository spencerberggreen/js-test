// let myNumber = 3;
// let txt = "";
// while (myNumber != Infinity) {
//     myNumber = myNumber * myNumber;
//     txt = txt + myNumber + "<br>";
// }

// const COLOR_RED = "F00";

// let user, password, hint;
// user = "john";
password = "1234";
// hint = "numbers ;)";

// const BIRTHDAY = "01.22.1996";

// let birf = BIRTHDAY.slice(0,5);
// console.log(birf);

// console.log(user,password,hint,BIRTHDAY);
// const string = 'yes, hello! I\'m const "string" :)';
// console.log(string);
const greeting = `my favorite numbers are ${password}`;
console.log(greeting);
// const joined = `${user} ${hint}`;
// console.log(joined)
// let test = 10;
// let passwordToNumber = Number(password);
// console.log(typeof passwordToNumber);
// document.getElementById("answer").innerHTML = txt;

let letters = "abcdefg";
let slicePos = letters.slice (1,3);
let sliceNeg = letters.slice (-5,-3);
let substringPos = letters.substring (1,3);
let substringNeg = letters.substring (-6,3); // Negative values treated as 0
let substrPos = letters.substr (1,2); // 2nd parameter in substr specifies the length of the selection
let substrNeg = letters.substr (-6,2);

console.log (slicePos, sliceNeg);
console.log (substringPos, substringNeg);
console.log (substrPos, substrNeg);

