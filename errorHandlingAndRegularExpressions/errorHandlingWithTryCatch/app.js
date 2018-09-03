const user = {email: "moneer@gmail.com"};

try {
  // PRODUCE A REFERENCE ERROR
  // myFunction();

  // PRODUCE A TYPE ERROR
  // null.myFunction();

  // PRODUCE SYNTAX ERROR
  // eval('Hello World');

  // PROUCE A URI ERROR
  // decodeURIComponent('%');

  if(!user.name) {
    // throw 'User has no name';
    throw new SyntaxError('User has no name');
  }
} catch(e) {
  console.log(`User Error: ${e.message}`);
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof ReferenceError);
} finally {
  console.log('Finally runs reguardless of result...');
}

console.log('Program contiues...');