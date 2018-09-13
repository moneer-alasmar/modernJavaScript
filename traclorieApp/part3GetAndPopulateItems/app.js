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
    getItems: function(){
      return data.items;
    },
    logData: function(){
      return data;
    }
  }
})();



// UI CONTROLLER
const UiCtrl = (function(){
  const UiSelectors = {
    itemList: '#item-list'
  }

  // PUBLIC METHODS
  return {
    populateItemList: function(items){
      let html = '';
      items.forEach(function(item){
        html += `
          <li class="collection-item" id="item-${item.id}">
            <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content">
              <i class="edit-item fa fa-pencil"></i>
            </a>
          </li>
        `;
      });

      // INSERT LIST ITEMS TO DOM
      document.querySelector(UiSelectors.itemList).innerHTML = html;
    }
  }
})();



// APP CONTROLLER
const App = (function(ItemCtrl, UiCtrl){

  // PUBLIC METHODS
  return {
    init: function(){
      // FETCH ITEMS FROM DATA STRUCTURE
      const items = ItemCtrl.getItems();
      // POPULATE LIST WITH ITEMS
      UiCtrl.populateItemList(items);
    }
  }
})(ItemCtrl, UiCtrl);

// INITIALIZE APP
App.init();