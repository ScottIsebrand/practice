// //***** OBJECTS
// const dog = {
//   name: 'Rusty',
//   breed: 'unknown',
//   isAlive: false,
//   age: 7,
// };
// //***** retrieving values
// console.log(dog['age']);
// console.log(dog.age);

// const person = {
//   firstName: 'Todd',
//   lastName: 'Smith',
// };

// console.log(person.firstName);
// console.log(person['lastName']);

// //***** updating values
// dog.breed = 'poodle';
// console.log(dog);
// dog['isAlive'] = true;
// console.log(dog);

// person.isAlive = 'true';
// person.lastName = 'Stephens';
// console.log(person);

// yearsOfBadEvents = {
//   1914: 'First World War',
//   1918: 'Flu Pandemic',
//   1929: 'Great Depression',
//   1939: 'Second World War',
//   1941: 'Pearl Habor',
//   1968: 'MLK and RFK killed',
//   2001: '9/11',
//   2008: 'Great Recession',
//   2020: 'COVID pandemic',
// };

// let presidentialAssassination = 'JFK killed';
// let energyCrisisOf1973 = 'Energy Crisis';

// yearsOfBadEvents['1963'] = presidentialAssassination;
// console.log(yearsOfBadEvents);
// yearsOfBadEvents['1933'] = 'Hitler becomes Chancellor';
// yearsOfBadEvents['1973'] = energyCrisisOf1973;
// console.log(yearsOfBadEvents[1973]);
// console.log(yearsOfBadEvents[2001]);
// console.log(yearsOfBadEvents);

// let animalNoises = {
//   cat: 'meow',
//   dog: 'woof',
//   pig: 'oink',
//   cow: 'moo',
// };

// let key = 'dog';
// let sound = animalNoises[key];
// console.log(sound);
// key = 'cat';
// sound = animalNoises[key];
// console.log(sound);

// let guy = {
//   name: 'Mosh',
//   age: 30,
// };

// guy['name'] = 'Todd';
// guy['lastName'] = 'Smith';
// console.log(guy);
// let userSelection = 'name';
// guy[userSelection] = 'Mark';
// console.log(guy['name']);

// const midterms = {
//   Daniel: 96,
//   Thomas: 78,
// };
// midterms['Daniel'] = 'A';
// midterms.Thomas = 77;
// midterms['Tony'] = 'C+';
// midterms.Ezra = 'B+';
// console.log(midterms);
// delete midterms.Ezra;
// delete midterms['Tony'];
// console.log(midterms);

// const comments = [
//   { username: 'Tammy', text: 'lol', votes: 9 },
//   { username: 'FishBoi', text: 'love it', votes: 2345 },
// ];
// console.log(comments[1].text);

// //***** FOR LOOPS
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// //***** This would result in an infinite loop
// for (let i = 1; i <= 10; i + 1) {
//   console.log(i)
// }

// for (let i = 0; i < 9; i++) {
//   console.log(i);
// }
// console.log('Loop is done.');

// for (let i = 0; i <= 101; i += 20) {
//   console.log(i);
// }

// for (let i = 0; i <= 101; i += 25) {
//   console.log(i);
// }

// ***** for loops: looping over an array
const animals = ['lions', 'tigers', 'bears', 'zebras'];
// for (let i = 0; i < animals.length; i++) {
//   console.log(i + 1, animals[i]);
// }

for (let i = animals.length - 1; i >= 0; i--) {
  console.log(i + 1, animals[i].toUpperCase());
}
// const stooges = ['Moe', 'Larry', 'Curly'];
// for (let i = 0; i < stooges.length; i++) {
//   console.log(stooges[i].toUpperCase());
// }

// // ***** for each loops

// let movies = ['spaceballs', 'the sting', 'aliens'];

// movies.forEach(function (movie, index) {
//   console.log(index + 1 + '. ' + movie);
// });

// let string = 'LOL';
// for (let i = 0; i < string.length; i++) {
//   console.log('outer:', i + ', ' + string[i]);
//   for (let j = 0; j < string.length; j++) {
//     console.log('  inner: ' + j + ') ' + string[j]);
//   }
// }

// let seatingChart = [
//   ['Alan', 'Bob', 'Cate'],
//   ['Dee', 'Esther', 'Fran'],
//   ['Grant', 'Heather', 'Isaac'],
// ];
// for (let i = 0; i < seatingChart.length; i++) {
//   const row = seatingChart[i];
//   console.log(`Row: ${i + 1}`);
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//   }
// }

// // ***** LOOPS WITH NESTED CONDITIONALS

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i, 'even');
//   } else {
//     console.log(i, 'odd');
//   }
// }

// let num = -1;
// for (let i = 0; i < 7; i++) {
//   if (num === 9) num = 0;
//   num = num + 2;
//   console.log(num);
// }

// let hash = '';
// for (let i = 0; i < 5; i++) {
//   hash += '#';
//   console.log(hash);
// }

// for (let i = 1; i < 11; i++) {
//   if (i % 2 === 0) {
//     console.log(i + 1);
//   }
// }

// for (i = 1; i <= 20; i++) {
//   if (i === 1) {
//     console.log(i, 'odd');
//   } else if (i === 2) {
//     console.log(2, 'prime, even');
//   } else if (i % 2 === 0) {
//     console.log(i, 'even');
//   } else if (i % 3 !== 0) {
//     console.log(i, 'prime, odd');
//   } else {
//     console.log(i, 'odd');
//   }
// }

// // ***** while loops
// let number = 0;
// while (number < 5) {
//   console.log(number);
//   number++;
// }

// const password = 'BabyEight';
// let guess = prompt('Enter password');
// while (guess !== password) {
//   guess = prompt('Try again');
// }
// alert('Correct');

// // ****** break keyword

// let input = prompt('Type something');
// while (true) {
//   input = prompt(`You typed: ${input}`);
//   if (input.toLowerCase() === 'stop') {
//     break;
//   }
// }
// alert('You entered the correct password and stopped the loop. Click OK.');

// for (i = 1; i < 20; i++) {
//   console.log(i);
//   if (i === 7) break;
// }

// ***** for...of loop
const subreddits = ['cool', 'books', 'birds'];
for (let sub of subreddits) {
  console.log(`Visit reddit.com/r/${sub}`);
}

// // ***** for...of loop iterating over a string
// for (let character of 'Hello.') {
//   console.log(character);
// }

// let testGreeting = 'Hi!';
// for (let letter of testGreeting) {
//   console.log(letter);
// }

// const arrayOfNumbers = [10, 20, 30];
// for (let value of arrayOfNumbers) {
//   value += 1;
//   console.log(value);
// }

// const numbers = [1, 2, 3, 4, 5, 6];
// for (let currentNumber of numbers) {
//   console.log(currentNumber * currentNumber);
// }

// // ***** for...in loop; iterating over an object and object literal

// const examScores = {
//   Todd: 88,
//   Sara: 99,
//   Ursala: 77,
//   Victor: 66,
// };

// for (let student in examScores) {
//   console.log(student);
// }

// for (let student in examScores) {
//   console.log(`${student}: ${examScores[student]}`);
// }

// console.log(Object.keys(examScores));
// console.log(Object.values(examScores));
// console.log(Object.entries(examScores));

// const testObject = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// for (let property in testObject) {
//   console.log(`testObject.${property} is ${testObject[property]}`);
// }

// ***** FUNCTIONS

// function singSong() {
//   console.log('Do');
//   console.log('Re');
//   console.log('Me');
// }

// singSong();

// function greeting(firstName) {
//   console.log(`Hi, ${firstName}`);
// }
// greeting('Sam');
// greeting('Frodo');

// function altGreeting(lastName) {
//   console.log(`Hi, ${lastName}`);
// }

// altGreeting('Baggins');
// altGreeting('Gamgee');

// function castSpell(spellName) {
//   console.log(`You cast a ${spellName.toLowerCase()} spell.`);
// }

// castSpell('Detect magic');

// ***** VARIABLES

// let changeMe = true;
// changeMe = false;
// console.log(changeMe);

const entree = 'Enchiladas';
console.log(entree);

// ***** Math assignment operators
let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

levelUp += 5;
console.log('The value of level up is', levelUp);
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

let favoriteAnimal = 'cat';
console.log('My favorite animal: ' + favoriteAnimal);

let myName = 'Scott';
let myCity = 'London';
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);

let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);

const test1 = 'figuring out quirks';
console.log(test1);

console.log(typeof test1);

let test2 = 'Str';
test2 = 'second str';
test3 = 3;
console.log(test2);
console.log(test2 + ' ' + test3);
console.log(
  `This template literal interpolates ${test3} and ${test2} into this statement.`
);

let test4 = test2 + test3;
console.log(typeof test4);
