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

//***** FOR LOOPS
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

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
for (let i = 0; i < animals.length; i++) {
  console.log(i + 1, animals[i]);
}

for (let i = animals.length - 1; i >= 0; i--) {
  console.log(i + 1, animals[i].toUpperCase());
}
const stooges = ['Moe', 'Larry', 'Curly'];
for (let i = 0; i < stooges.length; i++) {
  console.log(stooges[i].toUpperCase());
}

// ***** for each loops

let movies = ['spaceballs', 'the sting', 'aliens'];

movies.forEach(function (movie) {
  console.log(movie);
});
