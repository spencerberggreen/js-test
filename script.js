// prettier-ignore
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
]
// prettier-ignore
const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500'
const fifteen = inventors.filter((inventor) => {
    if (inventor.year >= 1500 && inventor.year < 1600) {
        return true;
    }
});
console.table(fifteen);
// Array.prototype.map()
// 2. Give us an array of the inventors first and last name
const fullNames = inventors.map((inventor) => inventor.first + ' ' + inventor.last);
console.table(fullNames);
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.table(ordered);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);

// 5. Sort the inventors by years live
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Pari
// 7. sort Exercise
// Sort the people alphabetically by last nam
// 8. Reduce Exercise
// Sum up the instances of each of these

// prettier-ignore
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// const select = document.querySelector('select');
// const para = document.querySelector('p');

// select.addEventListener('change', setChord);

// function setChord() {
//     const choice = select.value;

//     switch (choice) {
//         case 'Major triad':
//             para.textContent = 'The Major triad sounds happy';
//             break;
//         case 'minor triad':
//             para.textContent = 'The minor triad sounds sad';
//             break;
//         case 'diminished triad':
//             para.textContent = 'The diminished triad sound dissonant';
//             break;
//         default:
//             para.textContent = '';
//     }
// }

// function favoriteAnimal(animal = 'void') {
//     console.log('The ' + animal + ' is my favorite animal.');
// }

// favoriteAnimal('bird');

// let myList = ['I', 'love', 'lists'];
// console.log(typeof myList);
// let makeAString = myList.join(' ');
// console.log(makeAString);
// console.log(typeof makeAString);

// let randomNumber = Math.random();
// console.log(randomNumber);

// function hello(name = 'stranger') {
//     console.log(`Hello, ${name}!`);
// }

// hello();
// hello('Spencer');

// let textBox = document.querySelector('#textBox');
// let output = document.querySelector('#output');

// textBox.addEventListener('keydown', (event) => (output.textContent = `You pressed "${event.key}".`));

// function sumNum(a, b) {
//     return console.log(a + b);
// }

// sumNum(1, 2);

// function checkAge(age) {
//     if (age >= 18) {
//         return console.log('access granted');
//     } else {
//         return console.log('access denied');
//     }
// }

// checkAge(26);

// let user = {
//     name: 'david',
//     age: 30,
//     'likes birds': true,
// };

// console.log(user);
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
