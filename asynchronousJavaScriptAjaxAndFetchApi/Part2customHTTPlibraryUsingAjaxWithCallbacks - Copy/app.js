const http = new easyHTTP;

// // GET POSTS
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, response) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });

// // GET SINGLE POST
// http.get('https://jsonplaceholder.typicode.com/posts/1/', function(err, response) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });

// CREATE DATA
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

// // SEND POST DATA / CREATE POST
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, response) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });

// UPDATE/PUT/PATCH POST
// http.put('https://jsonplaceholder.typicode.com/posts/86', data, function(err, response) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });


// DELETE POST
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
  if(err) {
    console.log(err);
  } else {
    console.log(response);
  }
});

