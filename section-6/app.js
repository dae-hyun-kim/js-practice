// BUDGET CONTROLLER
const budgetController = (function() {

  // some code

})();




// UI CONTROLLER

const UIController = (function() {

  const DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    addButton: ".add__btn",
  }

  return {

    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      }
    },

    getDOMstrings: function() {
      return DOMstrings;
    }
  }

})();



// GLOBAL CONTROLLER

const controller = (function(budgetCtrl, UICtrl) {

  const DOM = UICtrl.getDOMstrings();

  const ctrlAddItem = function() {

    // 1. Get the field input data

    const input = UICtrl.getInput();
    console.log(input)

    // 2. Add the item to the budget controller

    // 3. Add the item to the user interface

    // 4. Calculate the budget

    // 5. Display the budget on user interface

  }

  document.querySelector(DOM.addButton).addEventListener("click", ctrlAddItem);

  document.addEventListener("keypress", (event) => {

    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }


  })

})(budgetController, UIController);
