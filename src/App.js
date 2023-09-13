import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";
import {useState} from "react";
import ExpenseFilter from "./components/Expenses/ExpenseFilter/ExpenseFilter";
import github from './assets/images/github.svg'

const initialExpenses = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2022, 7, 14),
    },
    {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2023, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2023, 5, 12),
    },
];

function App() {
    const [expenses, setExpenses] = useState(initialExpenses)
    const [filteredYear, setFilteredYear] = useState(new Date().getFullYear())

    const addNewExpense = (expense) => {
        expense.id = `e-${expenses.length + 1}`
        setExpenses((prev) => ([expense, ...prev]))
    }
    const changeFilteredYear = (year) => setFilteredYear(year)
    const monthsForExpenses = expenses.filter(expense => expense.date.getFullYear() === +filteredYear).map((expense) => expense.date.getMonth())
    return (
        <div className="App">
            <header>
                <h1>Expense Tracker <a href="https://github.com/iamBharatManral/react-expense-tracker" target={"_blank"}
                                       rel="noreferrer"><img
                    src={github} alt="github"/></a></h1>
            </header>
            <main>
                <NewExpense addNewExpense={addNewExpense}/>
                <ExpenseFilter filteredYear={filteredYear} changeFilteredYear={changeFilteredYear}
                               monthsForExpenses={monthsForExpenses}/>
                <Expenses filteredYear={filteredYear} expenses={expenses}/>
            </main>
        </div>
    );
}

export default App;
