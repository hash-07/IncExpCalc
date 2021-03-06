import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
 const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);

 const incomeAmounts = incomeTransactions.map(
  (incomeTransaction) => incomeTransaction.incomeAmount
 );

 const expenseAmounts = expenseTransactions.map(
  (expenseTransaction) => expenseTransaction.expenseAmount
 );

 const totalIncome = incomeAmounts.reduce((acc, item) => (acc += item), 0);

 const totalExpense = expenseAmounts.reduce((acc, item) => (acc += item), 0);

 return (
  <div className="balance">
   <h2>Balance</h2>
   <h3>₹{totalIncome - totalExpense}</h3>
   <div className="income-expense">
    <div className="plus">
     <h3>income</h3>
     <p>+₹{totalIncome}</p>
    </div>
    <div className="minus">
     <h3>Expense</h3>
     <p>-₹{totalExpense}</p>
    </div>
   </div>
  </div>
 );
};

export default Balance;
