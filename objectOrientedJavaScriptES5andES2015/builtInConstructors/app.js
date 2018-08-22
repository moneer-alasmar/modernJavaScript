// STRING
const name1 = 'Jeff';
const name2 = new String('Jeff');

// name2.foo = 'bar';
// console.log(name2);

console.log(typeof name2);
if(name2 === 'Jeff') {
  console.log('YES');
} else {
  console.log('NO');
}

// NUMBERS
const num1 = 5;
const num2 = new Number(5);

console.log(typeof num2);

// BOOLEAN
const bool1 = true;
const bool2 = new Boolean(true);

console.log(typeof bool2);

// FUNCTIONS
const getSum1 = function(x, y) {
  return x + y;
}

const getSum2 = new Function('x', 'y', 'return 1+1')
console.log(getSum2(1,1));

// OBJECTS
const john = {
  name: 'John'
};
const john2 = new Object({name: 'John'});
console.log(john2);

// ARRAYS
const arr1 = [1,2,3,4];
const arr2 = new Array([1,2,3,4]);

console.log(arr1);

// REGULAR EXPRESSIONS
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re2);