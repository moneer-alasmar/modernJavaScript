// MAPS =  KEY VALUE PAIRS - CAN USE ANY TYPE AS A KEY OR A VALUE

const map1 = new Map();

// SET KEYS
const key1 = 'some string',
      key2 = {},
      key3 = function(){};

// SET MAP VALUES BY KEY
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// GET VALUES BY KEY
// console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// COUNT THE VALUES
// console.log(map1.size);

// ITERATING MAPS
// LOOP USING FOR...OF TO GET KEYS AND VALUES
// for(let [key, value] of map1) {
//   console.log(`${key} ${value}`);
// }

// ITERATE KEYS ONLY
// for(let key of map1.keys()) {
//   console.log(key);
// }

// // ITERATE VALUES ONLY
// for(let value of map1.values()) {
//   console.log(value);
// }

// LOOP WITH FOR...EACH
// map1.forEach(function(value, key){
//   console.log(`${key} ${value}`);
// })

// CONVERT SETS TO ARRAYS
// CREATE AN ARRAY OF KEY VALUE PAIRS
const keyValArr = Array.from(map1);
console.log(keyValArr);

// CREATE AN ARRAY OF THE VALUES
const valArr = Array.from(map1.values());
console.log(valArr);

// CREATE AN ARRAY OF THE KEYS
const keyArr = Array.from(map1.keys());
console.log(keyArr);