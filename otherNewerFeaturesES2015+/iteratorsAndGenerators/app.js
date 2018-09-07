// // ITERATOR EXAMPLE
// function nameIterator(names) {
//   let nextIndex = 0;
//   return {
//     next: function() {
//       return nextIndex < names.length ? {value: names[nextIndex++], done: false} :
//       {done: true}
//     }
//   }
// }

// // CREATE AN ARRAY OF NAMES
// const namesArray = ['Meagan', 'Moneer', 'Bissy'];
// // INIT ITERATOR AND PASS IN THE NAMES ARRAY
// const names = nameIterator(namesArray);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next());

// GENERATOR EXAMPLE
// function* sayNames() {
//   yield 'Moneer';
//   yield 'Meagan';
//   yield 'Bissy';
// }

// const name = sayNames();

// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next());

// ID CREATOR
function* createIds() {
  let index = 0;
  while(true) {
    yield index++;
  }
}

const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);