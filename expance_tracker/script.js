/*
1. have the dom elements loaded
2. take reference of the dom elements
3. array and local storage part 
4. taking out the values from the dom elements
5. adding the values to the dom elements
6. rendering the values to the dom elements
7. deleting the values from the dom elements
8. updating the values to the dom elements
9. calculating the total amount
10. displaying the total amount
*/


document.addEventListener("DOMContentLoaded", () => {


    const expenseForm = document.getElementById("expense-form");
    const expenseNameInput = document.getElementById("expense-name");
    const expenseAmountInput = document.getElementById("expense-amount");
    const expenseList = document.getElementById("expense-list");
    const totalAmountDisplay = document.getElementById("total-amount");
  
    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    let totalAmount = calculateTotal();
  
    renderExpenses();
  
    expenseForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = expenseNameInput.value.trim();
      const amount = parseFloat(expenseAmountInput.value.trim());
  
      if (name !== "" && !isNaN(amount) && amount > 0) {
        const newExpense = {
          id: Date.now(),
          name: name,
          amount: amount,
        };
        expenses.push(newExpense);
        saveExpensesTolocal();
        renderExpenses();
        updateTotal();
  
        //clear input
        expenseNameInput.value = "";
        expenseAmountInput.value = "";
      }
    });
  
    function renderExpenses() {
      expenseList.innerHTML = "";

      expenses.forEach((expense) => {
        const li = document.createElement("li");
        li.innerHTML = `
          ${expense.name} - $${expense.amount}
          <button data-id="${expense.id}">Delete</button>
          `;
        expenseList.appendChild(li);
      });
    }
  
    function calculateTotal() {
      return expenses.reduce((sum, expense) => sum + expense.amount, 0);
    }
  
    function saveExpensesTolocal() {
      localStorage.setItem("expenses", JSON.stringify(expenses));
    }
  
    function updateTotal() {
      totalAmount = calculateTotal();
      totalAmountDisplay.textContent = totalAmount.toFixed(2);
    }
  
    expenseList.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        const expenseId = parseInt(e.target.getAttribute("data-id"));

        
        expenses = expenses.filter((expense) => expense.id !== expenseId);
  
        saveExpensesTolocal();
        renderExpenses();
        updateTotal();
      }
    });
  });
  