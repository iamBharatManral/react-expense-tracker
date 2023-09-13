import React from 'react';
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import "./Expenses.css"

function Expenses({expenses}) {
    return (
        <div className={"expenses"}>
            {expenses.map(expense => (
                <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id}/>))}
        </div>
    );
}

export default Expenses;