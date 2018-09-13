// STORAGE CONTROLLER

// ITEM CONTROLLER
const ItemCtrl = (function(){
  // ITEM CONSTRUCTOR
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // DATA STRUCTURE / STATE
  const data = {
    items: [
      {id: 0, name: 'Steak Dinner', calories: 1200},
      {id: 1, name: 'Seafood Dinner', calories: 1000},
      {id: 2, name: 'Eggs', calories: 300},
    ],
    currentItem: null,
    totalCalories: 0
  }
  // PUBLIC METHODS
  return {
    logData: function(){
      return data;
    }
  }
})();

// UI CONTROLLER
const UiCtrl = (function(){

  // PUBLIC METHODS
  return {

  }
})();

// APP CONTROLLER
const App = (function(ItemCtrl, UiCtrl){

  // PUBLIC METHODS
  return {
    init: function(){
      console.log('Initializing app...');
    }
  }
})(ItemCtrl, UiCtrl);

// INITIALIZE APP
App.init();