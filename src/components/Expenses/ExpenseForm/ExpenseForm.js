import React, {useState} from 'react';
import './ExpenseForm.css'

function ExpenseForm({addNewExpense}) {
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [amount, setAmount] = useState("")
    const [visible, setVisible] = useState(false)

    const changeTitle = (e) => setTitle(e.target.value)
    const changeAmount = (e) => setAmount(e.target.value)
    const changeDate = (e) => setDate(e.target.value)
    const clearForm = () => {
        setTitle("")
        setDate("")
        setAmount("")
    }
    const toggleForm = () => {
        setVisible(prev => !prev)
        clearForm()
    }

    const submit = (e) => {
        e.preventDefault()
        const newExpense = {
            title,
            date: new Date(date),
            amount
        }
        clearForm()
        addNewExpense(newExpense)
    }


    return (visible ? <form className={"expenseForm"} onSubmit={submit}>
        <div className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id={"title"} onChange={changeTitle} value={title} required={true}/>
        </div>
        <div className="control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id={"amount"} min={"0.1"} value={amount} onChange={changeAmount} required={true}/>
        </div>
        <div className="control">
            <label htmlFor="date">Date</label>
            <input type="date" id={"date"} min={"2021-01-01"} max={"2023-12-31"} value={date}
                   onChange={changeDate} required={true}/>
        </div>
        <div className="btnGroup">
            <div className="submit">
                <button type={"submit"}>Add Expense</button>
            </div>
            <div className="cancel">
                <button type={"button"} onClick={toggleForm}>Cancel</button>
            </div>
        </div>
    </form> : <button onClick={toggleForm}>Add New Expense</button>)
}

export default ExpenseForm;