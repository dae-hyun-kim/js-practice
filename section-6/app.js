// BUDGET CONTROLLER
const budgetController = (function() {

  const Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  const Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  const data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0,
    },
    budget: 0,
    percentage: -1
  }

  const calculateTotal = function(type) {
    let sum = 0;
    data.allItems[type].forEach(function(cur) {
      sum = sum + cur.value;
    });

    data.totals[type] = sum;
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

    deleteItem: function(type, id) {
      let ids, index;

      ids = data.allItems[type].map(function(current) {
        return current.id;
      })

      index = ids.indexOf(id);

      if (index !== -1) {
        data.allItems[type].splice(index, 1);
      }

    },

    calculateBudget: function() {

      // Calculate total income and expenses

      calculateTotal("exp");
      calculateTotal("inc");

      // Calculate the budget: income - expenses

      data.budget = data.totals.inc - data.totals.exp;

      // Calculate the percentage of income that we spent
      if (data.totals.inc > 0) {
        data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
      } else {
        data.percentage = -1
      }
    },

    getBudget: function() {
      return {
        budget: data.budget,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
        percentage: data.percentage,
      }

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
    budgetLabel: ".budget__value",
    incomeLabel: ".budget__income--value",
    expensesLabel: ".budget__expenses--value",
    percentageLabel: ".budget__expenses--percentage",
    container: ".container"
  }

  return {

    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
      }
    },

    addListItem: function(obj, type) {

    let html, element;
      // Create HTML string with placeholder text

    if (type === "inc") {
      element = DOMstrings.incomeContainer;
      html = `<div class="item clearfix" id="inc-${obj.id}"> <div class="item__description" > ${obj.description} </div ><div class="right clearfix"><div class="item__value">${obj.value}</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div >`
    } else if (type === "exp") {
      element = DOMstrings.expenseContainer;
      html = `<div class="item clearfix" id = "exp-${obj.id}"><div class="item__description" > ${obj.description} </div><div class="right clearfix"><div class="item__value">${obj.value}</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div >`
    }

      // Insert the HTML into the DOM
    document.querySelector(element).insertAdjacentHTML('beforeend', html);

    },

    deleteListItem: function(selectorID) {
      let el = document.getElementById(selectorID)
      el.parentNode.removeChild(el);

    },

    clearFields: function() {
      let fields, fieldsArr;
      fields = document.querySelectorAll(`${DOMstrings.inputDescription}, ${DOMstrings.inputValue}`);

      fieldsArr = Array.prototype.slice.call(fields);

      fieldsArr.forEach(function(current) {
        current.value = "";
      })

      fieldsArr[0].focus();
    },

    displayBudget: function(obj) {

      document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
      document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
      document.querySelector(DOMstrings.expensesLabel).textContent = obj.totalExp;

      if (obj.percentage > 0) {
        document.querySelector(DOMstrings.percentageLabel).textContent = `${obj.percentage}%`;
      } else {
        document.querySelector(DOMstrings.percentageLabel).textContent = "---"
      }

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


    document.querySelector(DOM.container).addEventListener("click", ctrlDeleteItem);

  }

  const updateBudget = function() {

    // 1. Calculate the budget

    budgetCtrl.calculateBudget();

    // 2. Return the budget

    const budget = budgetCtrl.getBudget();

    // 3. Display the budget on user interface

    UICtrl.displayBudget(budget);

  }



  const ctrlAddItem = function() {

    let input, newItem;

    // 1. Get the field input data

    input = UICtrl.getInput();

    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {

      // 2. Add the item to the budget controller

      newItem = budgetCtrl.addItem(input.type, input.description, input.value);

      // 3. Add the item to the user interface

      UICtrl.addListItem(newItem, input.type);

      // 4. Clear input fields

      UICtrl.clearFields();

      updateBudget();

    }

  };

  const ctrlDeleteItem = function(event) {
    let itemId, splitID, type, ID;

    itemId = event.target.parentNode.parentNode.parentNode.parentNode.id;

    if(itemId) {

      splitID = itemId.split("-");
      type = splitID[0];
      ID = parseInt(splitID[1]);

      // 1. Delete the item from the data structure

      budgetCtrl.deleteItem(type, ID);

      // 2. Delete the item from the UI

      UICtrl.deleteListItem(itemId)

      // 3. Update and show the new budget

      updateBudget();
    }

  }

  return {
    init: function() {
      UICtrl.displayBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage: -1,
      });
      setupEventListeners();
    }
  };

})(budgetController, UIController);

controller.init();
