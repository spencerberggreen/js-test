let myNumber = 3;
let txt = "";
while (myNumber != Infinity) {
    myNumber = myNumber * myNumber;
    txt = txt + myNumber + "<br>";
}

const COLOR_RED = "F00";

let user, password, hint;
user = "john";
password = "1234";
hint = "numbers ;)";

const BIRTHDAY = "01.22.1996"

console.log(user,password,hint,BIRTHDAY);
const string = 'yes, hello! I\'m const "string" :)';
console.log(string);
const greeting = (`my favorite numbers are ${password}`);
console.log(greeting);
const joined = `${user} ${hint}`;
console.log(joined)
let test = 10;
let passwordToNumber = Number(password);
console.log(typeof passwordToNumber);
document.getElementById("answer").innerHTML = txt;
console.log()