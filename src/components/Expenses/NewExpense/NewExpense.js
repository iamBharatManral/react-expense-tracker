import React from 'react';
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import './NewExpense.css'

function NewExpense({addNewExpense}) {
    return (
        <div className="newExpense">
            <ExpenseForm addNewExpense={addNewExpense}/>
        </div>
    );
}

export default NewExpense;