import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";
import {useState} from "react";
import ExpenseFilter from "./components/Expenses/ExpenseFilter/ExpenseFilter";

const initialExpenses = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

function App() {
    const [expenses, setExpenses] = useState(initialExpenses)

    const addNewExpense = (expense) => {
        expense.id = `e-${expenses.length + 1}`
        console.log(expense)
        setExpenses((prev) => ([...prev, expense]))
    }

    return (
        <div className="App">
            <header>
                <h1>Expense Tracker</h1>
            </header>
            <main>
                <NewExpense addNewExpense={addNewExpense}/>
                <ExpenseFilter/>
                <Expenses expenses={expenses}/>
            </main>
        </div>
    );
}

export default App;
