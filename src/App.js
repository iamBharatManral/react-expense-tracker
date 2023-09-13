import './App.css';
import ExpenseItem from "./components/ExpenseItem/ExpenseItem";

function App() {
    return (
        <div className="App">
            <header>
                <h1>Expense Tracker</h1>
            </header>
            <main>
                <ExpenseItem/>
            </main>
        </div>
    );
}

export default App;
