// const sayHello = function() {
//   console.log('Hello');
// }

// const sayHello = () => {
//   console.log('Hello');
// }

// One line function does not need curly braces
// const sayHello = () => console.log('Hello');

// One line returns
// const  sayHello = () => 'Hello';

// Same as above in ES5
// const sayHello = function() {
  // return 'Hello';
// }

// How to return an object
// const  sayHello = () => ({ msg: 'Hello' });

// Single parameter does not need parenthesis
// const sayHello = name => console.log(`Hello ${name}`); 

// Multiple parameter needs parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`); 

// sayHello('Moneer', 'Alasmar');

const users = [
  'Natahan',
  'John',
  'William'
];

// const nameLengths = users.map(function(name) {
//   return name.length;
// });

// Shorter
// const nameLengths = users.map((name) => {
//   return name.length;
// });

// Shortest
const nameLengths = users.map(name => name.length);

console.log(nameLengths);