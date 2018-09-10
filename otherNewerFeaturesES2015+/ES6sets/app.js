// SETS - STORE UNIQUE VALUES OF ANY TYPE
const set1 = new Set();

// ADD VALUES TO SET
set1.add(100);
set1.add('a string');
set1.add({ name: 'John' });
set1.add(true);
set1.add(100);

// const set2 = new Set([1, true, 'string']);
// console.log(set2);

// console.log(set1);

// GET COUNT
// console.log(set1.size);

// CHECK FOR VALUES
// console.log(set1.has(100));
// console.log(set1.has(50+50));
// console.log(set1.has({name: 'John'}));

// DELETE FROM SET
set1.delete(100);

// console.log(set1);

// ITERATE THROUGH SETS

// FOR...OF
// for(let item of set1.entries()) {
//       console.log(item);
// }

// // FOR...EACH
// set1.forEach((value) => {
//       console.log(value);
// })

// CONVERT SETS INTRO ARRAY
const setArr = Array.from(set1);

console.log(setArr);
