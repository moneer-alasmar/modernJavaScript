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
      // TEST DATA
      // {id: 0, name: 'Steak Dinner', calories: 1200},
      // {id: 1, name: 'Seafood Dinner', calories: 1000},
      // {id: 2, name: 'Eggs', calories: 300},
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
    getItemById: function(id) {
      let found = null;
      // LOOP THROUGH ITEMS
      data.items.forEach(function(item) {
        if(item.id === id) {
          found = item;
        }
      });
      return found;
    },
    setCurrentItem: function(item) {
      data.currentItem = item;
    },
    getCurrentItem: function() {
      return data.currentItem;
    },
    getTotalCalories: function(){
      let total = 0;
      // LOOP THROUGH ITEMS AND ADD CALORIES
      data.items.forEach(function(item){
        total += item.calories;
      });
      // SET TOTAL CALORIES IN DATA
      data.totalCalories = total;

      // RETURN TOTAL
      return data.totalCalories;
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
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories'
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
    addListItem: function(item){
      // SHOW THE LIST
      document.querySelector(UiSelectors.itemList).style.display = 'block';
      // CREATE LI ELEMENT
      const li = document.createElement('li');
      // ADD CLASS
      li.className = 'collection-item';
      // ADD ID
      li.id = `item-${item.id}`;
      // ADD HTML
      li.innerHTML = `
      <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
      <a href="#" class="secondary-content">
        <i class="edit-item fa fa-pencil"></i>
      </a>
      `;
      // INSERT ITEM TO DOM
      document.querySelector(UiSelectors.itemList).insertAdjacentElement('beforeend', li);
    },
    clearInput: function(){
      document.querySelector(UiSelectors.itemNameInput).value = '';
      document.querySelector(UiSelectors.itemCaloriesInput).value = '';
    },
    addItemToForm: function() {
      document.querySelector(UiSelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(UiSelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
      UiCtrl.showEditState();
    },
    hideList: function(){
      document.querySelector(UiSelectors.itemList).style.display = 'none';
    },
    showTotalCalories: function(totalCalories){
      document.querySelector(UiSelectors.totalCalories).textContent = totalCalories;
    },
    clearEditState: function(){
      UiCtrl.clearInput();
      document.querySelector(UiSelectors.updateBtn).style.display = 'none';
      document.querySelector(UiSelectors.deleteBtn).style.display = 'none';
      document.querySelector(UiSelectors.addBtn).style.display = 'inline';
      document.querySelector(UiSelectors.backBtn).style.display = 'none';

    },
    showEditState: function(){
      UiCtrl.clearInput();
      document.querySelector(UiSelectors.updateBtn).style.display = 'inline';
      document.querySelector(UiSelectors.deleteBtn).style.display = 'inline';
      document.querySelector(UiSelectors.addBtn).style.display = 'none';
      document.querySelector(UiSelectors.backBtn).style.display = 'inline';

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
    // GET UI SELECTORS
    const UiSelectors = UiCtrl.getSelectors();

    // ADD ITEM EVENT
    document.querySelector(UiSelectors.addBtn).addEventListener('click', itemAddSubmit);

    // EDIT ICON CLICK EVENT
    document.querySelector(UiSelectors.itemList).addEventListener('click', itemUpdateSubmit);

  }

  // ADD ITEM SUBMIT
  const itemAddSubmit = function(e){
    // GET FORM INPUT FROM UICONTROLLER
    const input = UiCtrl.getItemInput();
    
    // CHECK FOR EMPTY INPUTS
    if(input.name !== '' && input.calories !== ''){
      // ADD ITEM
      const newItem = ItemCtrl.addItem(input.name, input.calories);
      // ADD ITEM TO UI
      UiCtrl.addListItem(newItem);
      // GET TOTAL CALORIES
      const totalCalories = ItemCtrl.getTotalCalories();
      // ADD TOTAL CALORIES TO UI
      UiCtrl.showTotalCalories(totalCalories);
      // CLEAR FIELDS
      UiCtrl.clearInput();
    }
    
    e.preventDefault();
  }

  // UPDATE ITEM SUBMIT
  const itemUpdateSubmit = function(e) {
    if(e.target.classList.contains('edit-item')) {
      // GET LIST ITEM ID
      const listId = e.target.parentNode.parentNode.id;
      
      // BREAK INTO AN ARRAY
      const listIdArr = listId.split('-');
      
      // GET THE ACTUAL ID
      const id = parseInt(listIdArr[1]);

      // GET ITEM
      const itemToEdit = ItemCtrl.getItemById(id);

      // SET CURRENT ITEM
      ItemCtrl.setCurrentItem(itemToEdit);

      // ADD ITEM TO FORM
      UiCtrl.addItemToForm();
    }
    e.preventDefault();
  }

  // PUBLIC METHODS
  return {
    init: function(){
      // CLEAR EDIT STATE/ SET INITIAL STATE
      UiCtrl.clearEditState();

      // FETCH ITEMS FROM DATA STRUCTURE
      const items = ItemCtrl.getItems();

      // CHECK IF ANY ITEMS
      if(items.length === 0){
        UiCtrl.hideList();
      } else {
        // POPULATE LIST WITH ITEMS
        UiCtrl.populateItemList(items);
      }

      // GET TOTAL CALORIES
      const totalCalories = ItemCtrl.getTotalCalories();

      // ADD TOTAL CALORIES TO UI
      UiCtrl.showTotalCalories(totalCalories);

      // LOAD EVENT LISTENERS
      loadEventListeners();
    }
  }
})(ItemCtrl, UiCtrl);

// INITIALIZE APP
App.init();