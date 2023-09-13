import React from 'react';
import './ExpenseFilter.css'

function ExpenseFilter(props) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    return (
        <div className={'expenseFilter'}>
            <div className="filter">
                <label htmlFor="year">Filter by year</label>
                <select name="year" id="year">
                    {months.map((month, id) => (<option value={month} key={id}>{month}</option>))}
                </select>
            </div>
            <div className="months">
                {months.map((month, id) => {
                    return (
                        <div className="month" key={id}>
                            <div className="month__value"></div>
                            <div className="month__name">{month}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ExpenseFilter;