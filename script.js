/* =========================================================
   SpendWise - Week 5: JavaScript foundation
   Collects budget data with prompts, calculates the remaining
   balance, and prints labeled results to the browser console.
   ========================================================= */

console.log("SpendWise script loaded successfully.");

/* ---------- 1. Variables that store application data ---------- */

// Strings
const appName = "SpendWise";
const currency = "$";

// Numbers (budget and expense data). They start at 0 and are
// filled in with the user's input below.
let monthlyBudget = 0;
let foodExpense = 0;
let transportExpense = 0;
let rentExpense = 0;
let entertainmentExpense = 0;
let savingsExpense = 0;
let utilitiesExpense = 0;

/* ---------- 2. Functions ---------- */

// Asks the user for a number. Keeps asking until the input is valid.
// Returns the number so it can be stored in a variable.
function askForAmount(message) {
  while (true) {
    const answer = prompt(message);

    // The user pressed Cancel: treat it as 0
    if (answer === null) {
      return 0;
    }

    const amount = Number(answer);

    // Accept only real numbers that are not negative or empty
    if (answer.trim() !== "" && !isNaN(amount) && amount >= 0) {
      return amount;
    }

    alert("Please enter a valid number (0 or higher).");
  }
}

// Adds up all the expense categories
function calculateTotalExpenses(food, transport, rent, entertainment, savings, utilities) {
  return food + transport + rent + entertainment + savings + utilities;
}

// Remaining balance = budget - expenses
function calculateBalance(budget, totalExpenses) {
  return budget - totalExpenses;
}

// What percentage of the budget has been used
function calculatePercentUsed(budget, totalExpenses) {
  if (budget === 0) {
    return 0;                       // avoids dividing by zero
  }
  return (totalExpenses / budget) * 100;
}

// Returns a short message describing the budget situation
function getBudgetStatus(balance) {
  if (balance < 0) {
    return "Over budget. You have spent more than planned.";
  } else if (balance === 0) {
    return "Budget fully used. Nothing left this month.";
  } else {
    return "On track. You still have money left this month.";
  }
}

// Formats a number as money, e.g. 288 -> "$288.00"
function formatMoney(amount) {
  return currency + amount.toFixed(2);
}

// Prints everything to the console with clear labels
function displayResults(budget, totalExpenses, balance, percentUsed, isOverBudget) {
  console.log("=== " + appName + " Budget Summary ===");
  console.log("Monthly budget:     " + formatMoney(budget));
  console.log("Food:               " + formatMoney(foodExpense));
  console.log("Transport:          " + formatMoney(transportExpense));
  console.log("Rent:               " + formatMoney(rentExpense));
  console.log("Entertainment:      " + formatMoney(entertainmentExpense));
  console.log("Savings:            " + formatMoney(savingsExpense));
  console.log("Utilities:          " + formatMoney(utilitiesExpense));
  console.log("-------------------------------");
  console.log("Total expenses:     " + formatMoney(totalExpenses));
  console.log("Remaining balance:  " + formatMoney(balance));
  console.log("Budget used:        " + percentUsed.toFixed(1) + "%");
  console.log("Over budget?        " + isOverBudget);   // boolean
  console.log("Status:             " + getBudgetStatus(balance));
}

/* ---------- 3. Collect user input ---------- */

monthlyBudget        = askForAmount("Enter your total monthly budget:");
foodExpense          = askForAmount("How much did you spend on Food?");
transportExpense     = askForAmount("How much did you spend on Transport?");
rentExpense          = askForAmount("How much did you spend on Rent?");
entertainmentExpense = askForAmount("How much did you spend on Entertainment?");
savingsExpense       = askForAmount("How much did you put into Savings?");
utilitiesExpense     = askForAmount("How much did you spend on Utilities?");

/* ---------- 4. Calculations ---------- */

const totalExpenses = calculateTotalExpenses(
  foodExpense,
  transportExpense,
  rentExpense,
  entertainmentExpense,
  savingsExpense,
  utilitiesExpense
);

const remainingBalance = calculateBalance(monthlyBudget, totalExpenses);
const percentUsed = calculatePercentUsed(monthlyBudget, totalExpenses);
const isOverBudget = remainingBalance < 0;

/* ---------- 5. Display results in the console ---------- */

displayResults(monthlyBudget, totalExpenses, remainingBalance, percentUsed, isOverBudget);
