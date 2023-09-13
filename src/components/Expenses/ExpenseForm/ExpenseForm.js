import React, {useState} from 'react';
import './ExpenseForm.css'

function ExpenseForm({addNewExpense}) {
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [amount, setAmount] = useState("")
    const changeTitle = (e) => setTitle(e.target.value)
    const changeAmount = (e) => setAmount(e.target.value)
    const changeDate = (e) => setDate(e.target.value)

    const submit = (e) => {
        e.preventDefault()
        const newExpense = {
            title,
            date: new Date(date),
            amount
        }
        setTitle("")
        setDate("")
        setAmount("")
        addNewExpense(newExpense)
    }

    return (
        <form className={"expenseForm"} onSubmit={submit}>
            <div className="control">
                <label htmlFor="title">Title</label>
                <input type="text" id={"title"} onChange={changeTitle} value={title}/>
            </div>
            <div className="control">
                <label htmlFor="amount">Amount</label>
                <input type="number" id={"amount"} min={"0.1"} value={amount} onChange={changeAmount}/>
            </div>
            <div className="control">
                <label htmlFor="date">Date</label>
                <input type="date" id={"date"} min={"2021-01-01"} max={"2023-12-31"} value={date}
                       onChange={changeDate}/>
            </div>
            <div className="submit">
                <button type={"submit"}>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;