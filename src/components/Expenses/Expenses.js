import React from 'react';
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import "./Expenses.css"

function Expenses({expenses, filteredYear}) {
    const filteredExpenses = expenses
        .filter(expense => expense.date.getFullYear() === +filteredYear)
        .sort((a, b) => b.date - a.date)
    const noExpensesContent = <h2>No expenses found</h2>
    const hasExpenses = filteredExpenses.length > 0
    return (
        <div className={"expenses"}>
            {hasExpenses && filteredExpenses.map(expense => (
                <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id}/>))}
            {!hasExpenses && noExpensesContent}
        </div>
    );
}

export default Expenses;