import React from 'react';
import "./ExpenseItem.css"

function ExpenseItem(props) {
    return (
        <div className={"expenseItem"}>
            <div className={"date"}>Date</div>
            <div className={"title"}>car insurance</div>
            <div className={"amount"}>Amount</div>
        </div>
    );
}

export default ExpenseItem;