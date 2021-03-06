// src\components\ExpenseItem.js


import './ExpenseItem.css'

function ExpenseItem() {

    const expenseDate = new Date(2021, 2 ,28);
    const expenseTitle = 'Car insurance';
    const expenseAmount = 294.67;

    return (
        <div className="expense-item"> 
            <div>{expenseDate.toLocaleDateString()}</div>
            <div className="expense-item__description"><h2>{expenseTitle}</h2></div>
            <div className="expense-item__price">{expenseAmount}</div>
        </div>

    );
}

export default ExpenseItem;