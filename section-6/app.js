// BUDGET CONTROLLER
const budgetController = (function() {

  const Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  }

  const Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  }

  const data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0,
    }
  }

  return {
    addItem: function(type, desc, val) {
      let newItem, id;

      // CREATE NEW ID
      if (data.allItems[type].length > 0) {
        id = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        id = 0;
      }

      // CREATE NEW ITEM BASED ON "INC" OR "EXP" TYPE
      if (type === "exp") {
        newItem = new Expense(id, desc, val);
      } else if (type === "inc") {
        newItem = new Income(id, desc, val);
      }

      // PUSH IT INTO DATA STRUCTURE
      data.allItems[type].push(newItem);

      // RETURN NEW ELEMENT
      return newItem;
    },

    testing: function() {
      console.log(data)
    }
  }

})();




// UI CONTROLLER

const UIController = (function() {

  const DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    addButton: ".add__btn",
    incomeContainer: ".income__list",
    expenseContainer: ".expenses__list",
  }

  return {

    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      }
    },

    addListItem: function(obj, type) {

    let html, element;
      // Create HTML string with placeholder text

    if (type === "inc") {
      element = DOMstrings.incomeContainer;
      html = `<div class="item clearfix" id="income-${obj.id}"> <div class="item__description" > ${obj.description} </div ><div class="right clearfix"><div class="item__value">${obj.value}</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div >`
    } else if (type === "exp") {
      element = DOMstrings.expenseContainer;
      html = `<div class="item clearfix" id = "expense-${obj.id}"><div class="item__description" > ${obj.description} </div><div class="right clearfix"><div class="item__value">${obj.value}</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div >`
    }

      // Insert the HTML into the DOM
    document.querySelector(element).insertAdjacentHTML('beforeend', html);

    },

    getDOMstrings: function() {
      return DOMstrings;
    }
  }

})();

// GLOBAL CONTROLLER

const controller = (function(budgetCtrl, UICtrl) {

  const setupEventListeners = function() {

    const DOM = UICtrl.getDOMstrings();

    document.querySelector(DOM.addButton).addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", (event) => {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });

  }



  const ctrlAddItem = function() {

    let input, newItem;

    // 1. Get the field input data

    input = UICtrl.getInput();

    // 2. Add the item to the budget controller

    newItem = budgetCtrl.addItem(input.type, input.description, input.value)

    // 3. Add the item to the user interface

    UICtrl.addListItem(newItem, input.type)
    // 4. Calculate the budget

    // 5. Display the budget on user interface

  };

  return {
    init: function() {
      setupEventListeners();
    }
  };

})(budgetController, UIController);

controller.init();
