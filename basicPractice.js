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

// const entree = 'Enchiladas';
// console.log(entree);

// // ***** Math assignment operators
// let levelUp = 10;
// let powerLevel = 9001;
// let multiplyMe = 32;
// let quarterMe = 1152;

// levelUp += 5;
// console.log('The value of level up is', levelUp);
// powerLevel -= 100;
// multiplyMe *= 11;
// quarterMe /= 4;

// let favoriteAnimal = 'cat';
// console.log('My favorite animal: ' + favoriteAnimal);

// let myName = 'Scott';
// let myCity = 'London';
// console.log(`My name is ${myName}. My favorite city is ${myCity}.`);

// let newVariable = 'Playing around with typeof.';
// console.log(typeof newVariable);
// newVariable = 1;
// console.log(typeof newVariable);

// const test1 = 'figuring out quirks';
// console.log(test1);

// console.log(typeof test1);

// let test2 = 'Str';
// test2 = 'second str';
// test3 = 3;
// console.log(test2);
// console.log(test2 + ' ' + test3);
// console.log(
//   `This template literal interpolates ${test3} and ${test2} into this statement.`
// );

// let test4 = test2 + test3;
// console.log(typeof test4);

// // ***** KELVIN EXERCISE

// // Assign variable kelvin to 293 with const (the variable will not change)
// let kelvin = 293;
// kelvin = 301.75;
// // Assign variable declared as celsius to kelvin (earlier variable) minus 273
// let celsius = kelvin - 273;
// // Assign variable fahrenheit to the value of the 3-step equation: step 1) 9 divided by 4, step 2) result of step 1 multiplied by celsius (earlier variable), step 3) result of step 2 plus 32.
// let fahrenheit = celsius * (9 / 5) + 32;
// // Round fahrenheit down to the integer of the value of fahrenheit (as was determined above)
// fahrenheit = Math.floor(fahrenheit);
// console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

// let newton = celsius * (33 / 100);
// newton = Math.floor(newton);

// console.log(
//   `The temp is ${kelvin} degrees Kelvin, ${celsius} degrees Celcius, and ${fahrenheit} degrees Fahrenheit.`
// );

// // DOG YEARS EXERCISE
// // Assign the value of 50 to the declared variable myAge
// let myAge = 51;
// // Assign the value of 2 to a variable declare as earlyYears
// let earlyYears = 2;
// // Reassign earlyYears the value of earlyYears multiplied by 10.5
// earlyYears *= 10.5;
// // Declare a variable laterYears and assign to it the value of myAge minus 2
// let laterYears = myAge - 2;
// // Reassign laterYears to the value of laterYears multiplied by 4
// laterYears *= 4;
// console.log('Early: ' + earlyYears + ' ' + 'Later: ' + laterYears);
// // Declare a variable myAgeInDogYears and assign to it the value of earlyYears plus laterYears
// myAgeInDogYears = earlyYears + laterYears;
// myName = 'Scott'.toLowerCase();
// console.log(
//   `My name is ${myName}. I am ${myAge} years old, which is ${myAgeInDogYears} in dog years.`
// );

// // CONDITIONALS
// let sale = true;
// sale = false;

// if (sale) {
//   console.log('Time to buy!');
// } else {
//   console.log('Time to wait for a sale.');
// }

// let hungerLevel = 7;
// if (hungerLevel > 7) {
//   console.log('Eat!');
// } else {
//   console.log('Eat later.');
// }

// let userPet = 'bird';
// if (userPet === 'dog') {
//   console.log('Woof');
// } else if (userPet === 'cat') {
//   console.log('Meow');
// } else {
//   console.log('no pet');
// }

// // LOGICAL OPERATORS

// let stopLight = 'red';
// let pedestrians = false;

// if (stopLight === 'green' && pedestrians === false) {
//   console.log('Go');
// } else if (stopLight === 'yellow' && pedestrians === false) {
//   console.log('Slow');
// } else if (stopLight === 'red') {
//   console.log('Stop');
// }

// let mood = 'energized';
// let tirednessLevel = 9;

// if (mood === 'sleepy' || tirednessLevel > 8) {
//   console.log('Sleep.');
// } else {
//   console.log('Do not sleep.');
// }

// let wordCount = 0;
// wordCount = 7;
// if (wordCount) {
//   console.log('Started.');
// }

// let favoritePhrase = '';
// if (favoritePhrase) {
//   console.log('Not empty');
// } else {
//   console.log('Empty');
// }

// let tool = '';
// let writingUtensil = tool || 'pen';
// console.log(`The ${writingUtensil} is mightier than the sword.`);

// // TERNARY OPERATOR

// let isLocked = false;
// isLocked
//   ? console.log('You will need a key to open the door.')
//   : console.log('Open the door.');

// let isCorrect = true;
// isCorrect ? console.log('Correct.') : console.log('Wrong.');

// let favePhrase = 'Love That!';
// favePhrase === 'Love That!'
//   ? console.log('My fave.')
//   : console.log('Whatever.');

// let season = 'summer';

// if (season === 'spring') {
//   console.log("It's spring! The trees are budding!");
// } else if (season === 'winter') {
//   console.log("It's winter! Everything is covered in snow.");
// } else if (season === 'fall') {
//   console.log("It's fall! Leaves are falling!");
// } else if (season === 'summer') {
//   console.log("It's sunny and warm because it's summer!");
// }

// ***** SWITCH KEYWORD
let athleteFinalPosition = 'first place';
switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold');
    break;
  case 'second place':
    console.log('you get the silver');
    break;
  case 'third place':
    console.log('you get bronze');
    break;
  default:
    console.log('no medal');
    break;
}

// // ** MAGIC EIGHT
// let userName = 'Scott';
// userName ? console.log(`Hello ${userName}.`) : console.log('Hello.');
// let userQuestion = 'Should I stopping trying to learn JavaScript?';
// console.log(`${userName} Asked: ${userQuestion}`);
// let randomNumber = Math.floor(Math.random() * 8);
// let eightBall = '';
// if (randomNumber === 0) {
//   eightBall = 'It is certain';
// } else if (randomNumber === 1) {
//   eightBall = 'It is decidedly so';
// } else if (randomNumber === 2) {
//   eightBall = 'Reply hazy, try again';
// } else if (randomNumber === 3) {
//   eightBall = 'Cannot predict now';
// } else if (randomNumber === 4) {
//   eightBall = 'Do no count on it';
// } else if (randomNumber === 5) {
//   eightBall = 'My sources say no';
// } else if (randomNumber === 6) {
//   eightBall = 'Outlook not so good';
// } else if (randomNumber === 7) {
//   eightBall = 'Signs point to yes';
// }
// console.log(eightBall);

let userName = '';
userName ? console.log(`Hi ${userName}.`) : console.log('Hello.');
let userQuestion = 'Will tomorrow be an OK day?';
console.log(userQuestion);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
}
console.log(eightBall);

// ***** RACE DAY EXERCISE
let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnersAge = 11;
if (runnersAge > 18 && registeredEarly === true) {
  raceNumber += 1000;
}
if (runnersAge > 18 && registeredEarly === true) {
  console.log(`Number ${raceNumber} races at 9:30 a.m.`);
} else if (runnersAge > 18 && registeredEarly === false) {
  console.log(`Number ${raceNumber} runs at 11 a.m.`);
} else if (runnersAge < 18) {
  console.log(`Number ${raceNumber} runs at 12:30 p.m.`);
} else if (runnersAge === 18) {
  console.log(`Number ${raceNumber}, go to registration desk.`);
}

// ***** FUNCTIONS
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs') {
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

makeShoppingList();

// RETURN KEYWORD
function monitorCount(rows, columns) {
  return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);

// declaring function inside the function body
function chairCount(rows, columns) {
  const numOfChairs = rows * columns;
  return numOfChairs;
}
console.log(chairCount(5, 4));

// Helper functions

function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);
console.log(totalCost);

// Function Expressions
const plantNeedsWater = function (day) {
  if (day === 'Wednesday') {
    return true;
  } else return false;
};

plantNeedsWater('Tuesday');
console.log(plantNeedsWater('Tuesday'));

// Arrow function and concise body
const cactusNeedsWater = (day) => (day === 'Wednesday' ? true : false);

// Basic function calls
function greetWorld() {
  console.log('Hello, world!');
}
console.log('Before calling greetWorld');
greetWorld();

function greetSomeone(name1, name2) {
  console.log(`Hi, ${name1} and ${name2}`);
}

greetSomeone('John');

function registerAttendee(firstName, lastName) {
  console.log(`Attendee: ${firstName} ${lastName}`);
}
registerAttendee('John', 'Smith');

function rectangleArea(width, height) {
  console.log(width * height);
}
rectangleArea(3, 5);

function jetFighterType(manufacturer, model) {
  console.log(`${manufacturer} ${model}`);
}

jetFighterType('General Dynamics', 'F-16');

function bingoSquare(letter, number) {
  console.log(`${letter}, ${number}`);
}
bingoSquare('I', '13');

function jewelType(color, stone) {
  console.log(`This jewel is a ${color} ${stone}.`);
}
jewelType('red', 'ruby');

function petDescription(color, type) {
  console.log(`Pet: ${color} ${type}`);
}
petDescription('calico', 'cat');

function medicineToTake(name, dose, frequency) {
  console.log(`Take: ${name} ${dose} ${frequency}`);
}
medicineToTake('Aspirin', 'one', 'daily');

function stateCapital(capitalName, stateName) {
  console.log(`${capitalName} is the capital of ${stateName}.`);
}
stateCapital('Sacramento', 'California');

function lunchToday(beverage, sandwichType) {
  console.log(`I will have ${beverage} with my ${sandwichType} sandwich.`);
}
lunchToday('ginger ale', 'turkey with swiss cheese and mustard');

function tennisPlayer(firstName, lastName) {
  console.log(`${firstName} ${lastName}`);
}
tennisPlayer('Carlitos', 'Alcaraz');

function phoneType(manufacturer, model) {
  console.log(`${manufacturer} ${model}`);
}
phoneType('Apple', 'iPhone 12 Pro');

function announcePatient(firstName, lastName) {
  console.log(`${firstName} ${lastName}, the doctor will see you now.`);
}
announcePatient('Dylan', 'Johnson');

function beverageOrder(beverageType, size) {
  console.log(`I'd like a ${size} ${beverageType}.`);
}
beverageOrder('coffee', 'small');

function musicalSelectionILike(title, artist) {
  console.log(`I like ${title} by ${artist}.`);
}
musicalSelectionILike('Sym. No. 7', 'Beethoven');

function formalGreeting(firstName, lastName) {
  console.log(`Hello, ${firstName} ${lastName}.`);
}
formalGreeting('John', 'Smith');

function myPet(name, typeOfAnimal) {
  console.log(`My pet ${typeOfAnimal} is named ${name}.`);
}
myPet('Oliver', 'cat');

function tennisGameScore(player1Score, player2Score) {
  console.log(`This score is ${player1Score} to ${player2Score}.`);
}
tennisGameScore('15', '30');

function areaOfRoom(side1, side2) {
  console.log(`The room is ${side1 * side2} sq. ft.`);
}
areaOfRoom(15, 22);
areaOfRoom(33, 11);

function favoriteCandybar(candybarName, manufacturer) {
  console.log(`I like the ${candybarName} candybar by ${manufacturer}.`);
}
favoriteCandybar('Lion', 'Nestle');

function nationalCapital(city, country) {
  console.log(`${city} is the capital of ${country}.`);
}
nationalCapital('Washington, D.C.', 'the U.S.A.');

function sizeOfApartmentRoom(length1, length2) {
  console.log(length1 * length2);
}
sizeOfApartmentRoom(15, 20);

// ***** RETURN KEYWORD

function monitorCount(rows, columns) {
  return rows * columns;
}

const numberOfMonitors = monitorCount(5, 4);
console.log(numberOfMonitors);

function numOfChairs(rows, columns) {
  return rows * columns;
}
const chairCount = numOfChairs(5, 5);
console.log(chairCount);

function stateCapital(city = 'Des Moines', state = 'Iowa') {
  return `${city}, ${state}`;
}
const capitalAndState = stateCapital('Austin', 'Texas');
console.log(capitalAndState);

function sizeOfRoom(length, width) {
  return length * width;
}
const roomSqFt = sizeOfRoom(20, 10);
console.log(roomSqFt);

function capitalOfCountry(city = 'London', country = 'UK') {
  return `${city}, ${country}`;
}
const capitalAndCountry = capitalOfCountry('Paris', 'France');
console.log(capitalAndCountry);

function fieldArea(length, width) {
  return length * width;
}
const fieldSqFt = fieldArea(60, 11);
console.log(fieldSqFt);

function greetingAgain(firstName, lastName) {
  return `Hi, again, ${firstName} ${lastName}.`;
}
const secondGreeting = greetingAgain('Sam', 'Smith');
console.log(secondGreeting);

function numOfDeskChairs(rows, columns) {
  return rows * columns;
}
const deskChairCount = numOfDeskChairs(6, 3);
console.log(deskChairCount);

function numOfKeyboards(rows, columns) {
  return rows * columns;
}
const keyboardCount = numOfKeyboards(4, 4);
console.log(keyboardCount);

function seatOfCounty(town, county, state) {
  return `${town}, ${county} county, ${state}`;
}
const countySeat = seatOfCounty('Algona', 'Kossuth', 'Iowa');
console.log(countySeat);

function numOfHardhats(dayShift, nightShift) {
  return dayShift * nightShift;
}
const hardhatsOrder = numOfHardhats(5, 6);
console.log(hardhatsOrder);

function pairsOfGloves(mornShift, nightShift) {
  return mornShift * nightShift;
}
const glovesOrder = pairsOfGloves(9, 5);
console.log(glovesOrder);

function count(a, b, c) {
  return a + b - c;
}
console.log(typeof count(1, 2, ''));

function areaOfOffice(width, length) {
  return width * length;
}
const officeSqFt = areaOfOffice(6, 5);
console.log(officeSqFt);

function areaOfBed(depth, length, height) {
  return depth * length * height;
}
const bedCubicFeet = areaOfBed(6, 7, 2.5);
console.log(bedCubicFeet);

function areaOfRoom(width, length, height) {
  return width * length * height;
}
const roomCubicFeet = areaOfRoom(20, 18, 10);
console.log(roomCubicFeet);

function sizeOfStudio(width, length) {
  if (width < 0 || length < 0) {
    return 'No neg integers';
  }
  return width * length;
}
const studioSize = sizeOfStudio(20, 16);
console.log(studioSize);

function areaOfDen(width, length) {
  if (width < 0 || length < 0) {
    return 'No neg nums';
  }
  return width * length;
}
const denSqFt = areaOfDen(10, 15);
console.log(denSqFt);

function areaOfBathroom(width, length) {
  if (length < 0 || width < 0) {
    return 'No neg nums allowed';
  }
  return length * width;
}
const bathroomSqFt = areaOfBathroom(15, 6);
console.log(bathroomSqFt);
