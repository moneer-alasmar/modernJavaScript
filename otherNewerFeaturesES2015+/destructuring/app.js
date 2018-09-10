// DESTRUCTURING ASSIGNMENT
let a, b;
[a, b] = [100, 200];
// REST PATTERN
[a, b, c, ...rest] = [100, 200, 300, 400, 500];

({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500});
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500});

// ARRAY DESTRUCTURING
// const people = ['John', 'Beth', 'Mike'];

// const [person1, person2, person3] = people;

// console.log(person1, person2, person3);

// PARSE ARRAY RETURN FROM FUNCTION
// function getPeople() {
//   return ['John', 'Beth', 'Mike'];
// }

// let person1, person2, person3;

// [person1, person2, person3] = getPeople();

// console.log(person1, person2, person3);

// OBJECT DESTRUCTURING

const person = {
  name: 'John Doe',
  age: 32,
  city: 'Miami',
  gender: 'Male',
  sayHello: function() {
    console.log('Hello');
  }
}

// OLD WAY (ES5)
// const name = person.name,
//       age = person.age,
//       city = person.city;

// NEW ES6 DESTRUCTURING
const { name, age, city, sayHello } = person;

console.log(name, age, city);

sayHello();