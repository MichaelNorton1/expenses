import React, { useState } from "react";
import ExpensesChart from "./ExpenseChart";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter.js";
import "./Expense.css";
import Card from "./UI/Card";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        {filteredExpenses.length === 0 && (
          <p className="none">No expenses found</p>
        )}
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}
export default Expense;
