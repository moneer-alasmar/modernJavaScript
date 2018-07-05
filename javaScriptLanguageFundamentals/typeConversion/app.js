let val;

// number to string
val = String(777);
val = String(4+4);

// boolean to string
val = String(true);
// date to string
val = String(new Date());
// array to string
val = String([1,2,3,4]);

// toString()
val = (5).toString();
val = (true).toString();



// output
console.log(val);
console.log(typeof val);
console.log(val.length);


// string to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello'); // NaN not a nuumber
val = Number([1,2,3]); // NaN not a number

val = parseInt('100');
val = parseFloat('100.30');

console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

// type cohersion

const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;
console.log(sum);
console.log(typeof sum);