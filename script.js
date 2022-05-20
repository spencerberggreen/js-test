const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setChord);

function setChord() {
  const choice = select.value;

  switch (choice) {
    case "Major triad":
      para.textContent = "The Major triad sounds happy";
      break;
    case "minor triad":
      para.textContent = "The minor triad sounds sad";
      break;
    case "diminished triad":
      para.textContent = "The diminished triad sound dissonant";
      break;
    default:
      para.textContent = "";
  }
}

function favoriteAnimal(animal = "void") {
  console.log("The " + animal + " is my favorite animal.");
}

favoriteAnimal("bird");

let myList = ["I", "love", "lists"];
console.log(typeof myList);
let makeAString = myList.join(" ");
console.log(makeAString);
console.log(typeof makeAString);

let randomNumber = Math.random();
console.log(randomNumber);

function hello(name = "stranger") {
  console.log(`Hello, ${name}!`);
}

hello();
hello("Spencer");

let textBox = document.querySelector("#textBox");
let output = document.querySelector("#output");

textBox.addEventListener(
  "keydown",
  (event) => (output.textContent = `You pressed "${event.key}".`)
);

function sumNum(a, b) {
  return console.log(a + b);
}

sumNum(1, 2);

function checkAge(age) {
  if (age >= 18) {
    return console.log("access granted");
  } else {
    return console.log("access denied");
  }
}

checkAge(26);

// let answer = parseInt(prompt("Please enter a number to count to:"));

// for (let i = 1; i <= answer; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// let cheese = 'cheddar';

// if (cheese) { // because cheese is defined, it's boolean is true
//   console.log(!!cheese)
// }

// let myNumber = 3;
// let txt = "";
// while (myNumber != Infinity) {
//     myNumber = myNumber * myNumber;
//     txt = txt + myNumber + "<br>";
// }

// const COLOR_RED = "F00";

// let user, password, hint;
// user = "john";
// password = "1234";
// hint = "numbers ;)";

// const BIRTHDAY = "01.22.1996";

// let birf = BIRTHDAY.slice(0,5);
// console.log(birf);

// console.log(user,password,hint,BIRTHDAY);
// const string = 'yes, hello! I\'m const "string" :)';
// console.log(string);
// const greeting = `my favorite numbers are ${password}`;
// console.log(greeting);
// const joined = `${user} ${hint}`;
// console.log(joined)
// let test = 10;
// let passwordToNumber = Number(password);
// console.log(typeof passwordToNumber);
// document.getElementById("answer").innerHTML = txt;

// let letters = "abcdefg";
// let slicePos = letters.slice (1,3);
// let sliceNeg = letters.slice (-5,-3);
// let substringPos = letters.substring (1,3);
// let substringNeg = letters.substring (-6,3); // Negative values treated as 0
// let substrPos = letters.substr (1,2); // 2nd parameter in substr specifies the length of the selection
// let substrNeg = letters.substr (-6,2);

// console.log (slicePos, sliceNeg);
// console.log (substringPos, substringNeg);
// console.log (substrPos, substrNeg);

// let sadMsg = 'I\'m sAd and sAD';
// let happyMsg = sadMsg.replace(/SAD/ig, 'happy');
// let capsMsg = happyMsg.toUpperCase();
// console.log (capsMsg);

// console.log (
//   0 == false,
//   0 === false,
//   0 !== false,
// )

// let hours = 25;

// if (hours < 12) {
//   console.log('good morning')
// } else if (hours <= 24) {
//   console.log('good afternoon')
// } else {
//   console.log('there are only 24 hours in a day')
// }

// Logical operators
//
// OR ||
// returns true unless all operands are false
// console.log(false || false || true); // true

// often used in if statements to see if any conditions are true
// let hour = 9;

// if (hour < 10 || hour > 18) {
//   console.log( 'The office is closed.' );
// }

// AND &&
// returns true only if all operands are true
// console.log(true && true && false);  // false
// console.log(true && true && true);   // true

// NOT !
// 1. Converts the operand to boolean type: true/false.
// 2. Returns the inverse value.
// console.log(!true); // false
// a double NOT !! is sometimes used for converting a value to a boolean

// Precedence of && is higher than ||
//  a && b  ||  c && d
// equates to
// (a && b) || (c && d)
