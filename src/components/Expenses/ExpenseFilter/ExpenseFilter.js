import React from 'react';
import './ExpenseFilter.css'

function ExpenseFilter({filteredYear, changeFilteredYear, monthsForExpenses}) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const years = [2020, 2021, 2022, 2023]
    return (
        <div className={'expenseFilter'}>
            <div className="filter">
                <label htmlFor="year">Filter by year</label>
                <select name="year" id="year" onChange={(e) => changeFilteredYear(e.target.value)}>
                    {years.map((year, id) => (
                        <option value={year} key={id} selected={year === filteredYear}>{year}</option>))}
                </select>
            </div>
            <div className="months">
                {months.map((month, id) => {
                    return (
                        <div className="month" key={id}>
                            <div
                                className={monthsForExpenses.includes(id) ? "month__value hasExpenses" : "month__value "}></div>
                            <div className="month__name">{month}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ExpenseFilter;