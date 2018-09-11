// BASIC STRUCTURE
// (function(){
//   // DECLARE PRIVATE VARIABLES AND FUNCTIONS

//   return {
//     // DECLARE PUBLIC VARIABLES AND FUNCTIONS
    
//   }
// })();


// STANDARD MODULE PATTERN
// const UIctrl = (function(){
//   let text = 'Hello World';

//   const changeText = function() {
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   }

//   return {
//     callChangeText: function() {
//       changeText();
//       console.log(text);
//     }
//   }
// })();

// UIctrl.callChangeText();

// REVEALING MODULE PATTERN
const itemCtrl = (function() {
  let data = [];

  function add(item) {
    data.push(item);
    console.log('Item added...');
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get
  }
})();

itemCtrl.add({id: 1, name: 'Moneer'});
itemCtrl.add({id: 10, name: 'Bissy'});
console.log(itemCtrl.get(1));
console.log(itemCtrl.get(10));