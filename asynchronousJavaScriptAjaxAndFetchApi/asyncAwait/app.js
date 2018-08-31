// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 2000)
//   });

//   const error = false;

//   if(!error) {
//       const res = await promise; // Wait until the promise is resolved
//       return res;
//   } else {
//     await Promise.reject(new Error('Something went wrong'));

//   }
// }

// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

async function getUsers() {
  // AWAIT RESPONE OF THE FETCH CALL
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // ONLY PROCEED ONCE PROMISE IS RESOLVED
  const data = await response.json();

  // ONLY PROCEED ONCE THE SECOND PROMISE IS RESOLVED
  return data;
}

getUsers()
  .then(res => console.log(res));
