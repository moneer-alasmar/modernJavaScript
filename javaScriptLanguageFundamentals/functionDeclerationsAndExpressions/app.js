// FUNCTION DECLARATIONS

function greet(firstName = 'John', lastName = 'Doe'){
  // if(typeof firstName === 'undefined'){firstName = 'John'}
  // if(typeof lastName === 'undefined'){lastName = 'Doe'}
  // console.log('hello');
  return 'Hello ' + firstName + ' ' + lastName
}

// console.log(greet());

// FUNCTION EXPRESSIONS

const square = function(x = 3){
  return x * x;
};

// console.log(square(8));

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// (function(){
//   console.log('IFFE Ran..')
// })();

// (function(name){
//   console.log('Hello ' + name)
// })('Moneer');

//  PROPERTY METHODS

const todo = {
  add: function(){
    console.log('Add to do.. ')
  },
  edit: function(id){
    console.log(`Edit to do ${id}`)
  }
}

todo.delete = function(){
  console.log('Delete to do...');
}

todo.add();
todo.edit(22);
todo.delete();