// BUDGET CONTROLLER
const budgetController = (function() {

  // some code

})();




// UI CONTROLLER

const UIController = (function() {

  // some code

})();



// GLOBAL CONTROLLER

const controller = (function(budgetCtrl, UICtrl) {

  const ctrlAddItem = function() {


    console.log("hello")
     // 1. Get the field input data

    // 2. Add the item to the budget controller

    // 3. Add the item to the user interface

    // 4. Calculate the budget

    // 5. Display the budget on user interface

  }

  document.querySelector(".add__btn").addEventListener("click", ctrlAddItem)

  document.addEventListener("keypress", (event) => {

    if (event.keyCode === 13 || event.which === 13) {

      ctrlAddItem();

    }
  })

})(budgetController, UIController);
