const dog = {
  name: 'Rusty',
  breed: 'unknown',
  isAlive: false,
  age: 7,
};
//retrieving values
console.log(dog['age']);
console.log(dog.age);
// updating values
dog.breed = 'poodle';
console.log(dog);
dog['isAlive'] = true;
console.log(dog);
