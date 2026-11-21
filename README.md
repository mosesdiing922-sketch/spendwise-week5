# SpendWise (Week 5): JavaScript Foundation

SpendWise is a budgeting dashboard. In Weeks 1 to 4 I built the page structure and design.
This week I added JavaScript so the project can work with real budget data: it asks the user
for a monthly budget and their spending in six categories, calculates the remaining balance,
and prints a clearly labeled summary in the browser console.

## What SpendWise does
1. Loads the dashboard (sidebar, header and six category cards).
2. Asks the user for their budget and expenses with `prompt()` boxes.
3. Calculates total expenses, remaining balance and the percentage of the budget used.
4. Prints the results in the browser console.

## JavaScript concepts implemented
- Linking an external script with `<script src="script.js"></script>`
- Variables with `const` and `let`
- Data types: strings, numbers and a boolean
- User input with `prompt()` and `alert()`
- Type conversion with `Number()` and validation with `isNaN()`
- Arithmetic operators (`+`, `-`, `/`, `*`)
- Conditionals (`if / else if / else`) and a `while` loop
- Functions with parameters and return values
- String concatenation and `console.log()`

## How variables are used
- `const appName` and `const currency` hold values that never change.
- `let monthlyBudget`, `foodExpense`, `transportExpense`, `rentExpense`, `entertainmentExpense`,
  `savingsExpense` and `utilitiesExpense` hold numbers. They start at 0 and are updated with the user's input.
- `const totalExpenses`, `remainingBalance`, `percentUsed` and `isOverBudget` store calculated results.
  `isOverBudget` is a boolean (`true` or `false`).

## How user input is collected
The function `askForAmount(message)` shows a `prompt()` box and returns a number.
- It converts the text the user typed into a number with `Number()`.
- If the input is empty, not a number or negative, it shows an alert and asks again.
- If the user presses Cancel, the value is treated as 0.

The returned numbers are stored in the variables above.

## How calculations are performed
- `calculateTotalExpenses(...)` adds the six expense categories together.
- `calculateBalance(budget, totalExpenses)` returns `budget - totalExpenses`.
- `calculatePercentUsed(budget, totalExpenses)` returns `(totalExpenses / budget) * 100`
  and avoids dividing by zero.

## How functions help organize the code
Each function does one job, so the code is easier to read, test and reuse:
- `askForAmount`: collects and validates input
- `calculateTotalExpenses`, `calculateBalance`, `calculatePercentUsed`: calculations
- `getBudgetStatus`: returns a message based on the balance
- `formatMoney`: formats numbers as money (for example `$288.00`)
- `displayResults`: prints the labeled summary in the console

## How to run and test
1. Open `index.html` in a browser.
2. Press **F12** and open the **Console** tab (open it before refreshing so you see all output).
3. Refresh the page and answer the prompts.
4. Read the "SpendWise Budget Summary" in the console.

Test example: budget 2370, Food 420, Transport 135, Rent 900, Entertainment 185, Savings 300,
Utilities 142 gives total expenses of $2082.00 and a remaining balance of $288.00.
Also tested: entering letters (asks again), pressing Cancel (treated as 0), and spending more than the budget (shows "Over budget").

## Files
- `index.html`: dashboard structure and script link
- `style.css`: styling (Grid, Flexbox, theme variables, dark mode)
- `script.js`: JavaScript logic
- `README.md`: this file
