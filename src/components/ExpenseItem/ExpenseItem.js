import React from 'react';
import "./ExpenseItem.css"

function ExpenseItem({date, title, amount}) {
    const month = date.toLocaleString('en-US', {month: 'long'})
    const day = date.toLocaleString('en-US', {day: '2-digit'})
    const year = date.getFullYear()

    return (
        <div className={"expenseItem"}>
            <div className={"date"}>
                <div className={"month"}>{month}</div>
                <div className={"year"}>{year}</div>
                <div className={'day'}>{day}</div>
            </div>
            <div className={"title"}>{title}</div>
            <div className={"amount"}>${amount}</div>
        </div>
    );
}

export default ExpenseItem;