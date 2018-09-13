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
    addItem: function(name, calories){
      let ID;
      // CREATE ID
      if(data.items.length > 0){
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }

      // CALORIES TO NUMBER
      calories = parseInt(calories);

      // CREATE NEW ITEM
      newItem = new Item(ID, name, calories);

      // ADD TO ITEMS ARRAY
      data.items.push(newItem);

      return newItem;
    },
    logData: function(){
      return data;
    }
  }
})();



// UI CONTROLLER
const UiCtrl = (function(){
  const UiSelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
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
    },
    getItemInput: function(){
      return {
        name: document.querySelector(UiSelectors.itemNameInput).value,
        calories: document.querySelector(UiSelectors.itemCaloriesInput).value,
      }
    },
    getSelectors: function(){
      return UiSelectors;
    }
  }
})();



// APP CONTROLLER
const App = (function(ItemCtrl, UiCtrl){
  // LOAD EVENT LISTENERS
  const loadEventListeners = function(){
    const UiSelectors = UiCtrl.getSelectors();

    // ADD ITEM EVENT
    document.querySelector(UiSelectors.addBtn).addEventListener('click', itemAddSubmit);

  }

  // ADD ITEM SUBMIT
  const itemAddSubmit = function(e){
    // GET FORM INPUT FROM UICONTROLLER
    const input = UiCtrl.getItemInput();
    
    // CHECK FOR EMPTY INPUTS
    if(input.name !== '' && input.calories !== ''){
      // ADD ITEM
      const newItem = ItemCtrl.addItem(input.name, input.calories);
    }
    
    e.preventDefault();
  }

  // PUBLIC METHODS
  return {
    init: function(){
      // FETCH ITEMS FROM DATA STRUCTURE
      const items = ItemCtrl.getItems();
      // POPULATE LIST WITH ITEMS
      UiCtrl.populateItemList(items);

      // LOAD EVENT LISTENERS
      loadEventListeners();
    }
  }
})(ItemCtrl, UiCtrl);

// INITIALIZE APP
App.init();