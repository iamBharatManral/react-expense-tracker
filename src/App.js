import './App.css';
import Expenses from "./components/Expenses/Expenses";

function App() {
    return (
        <div className="App">
            <header>
                <h1>Expense Tracker</h1>
            </header>
            <main>
                <Expenses/>
            </main>
        </div>
    );
}

export default App;
