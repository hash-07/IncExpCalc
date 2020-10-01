import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Uuid from "../Components/Uuid";

const AddTransaction = () => {
 const { addIncome, addExpense } = useContext(GlobalContext);

 //........INCOME STATE......................................................................
 const [income, setIncome] = useState({
  incomeText: "",
  incomeAmount: 0,
 });

 const [expense, setExpense] = useState({
  expenseText: "",
  expenseAmount: 0,
 });

 //..................................................................
 const { incomeText, incomeAmount } = income;

 const onSubmitIncome = (e) => {
  e.preventDefault();

  if (incomeText !== "" && incomeAmount > 0) {
   const newIncomeTransaction = {
    id: Uuid(),
    incomeText,
    incomeAmount: incomeAmount * 1,
   };

   addIncome(newIncomeTransaction);
   setIncome({
    incomeText: "",
    incomeAmount: "",
   });
  }
 };

 const onChangeIncome = (e) => {
  setIncome({ ...income, [e.target.name]: e.target.value });
 };

 //........EXPENSE STATE............................................................................

 const { expenseText, expenseAmount } = expense;

 const onSubmitExpense = (e) => {
  e.preventDefault();

  if (expenseText !== "" && expenseAmount > 0) {
   const newExpenseTransaction = {
    id: Uuid(),
    expenseText,
    expenseAmount: expenseAmount * 1,
   };
   addExpense(newExpenseTransaction);
   console.log(newExpenseTransaction);
   setExpense({
    expenseText: "",
    expenseAmount: "",
   });
  }
 };

 const onChangeExpense = (e) => {
  setExpense({ ...expense, [e.target.name]: e.target.value });
 };

 //...........RETURN...................RETURN........................RETURN.............................

 return (
  <div className="form-wrapper">
   <form onSubmit={onSubmitIncome}>
    <div className="input-group income">
     <input
      type="text"
      name="incomeText"
      placeholder="Add Income..."
      autoComplete="off"
      value={incomeText}
      onChange={onChangeIncome}
     />
     <input
      type="number"
      name="incomeAmount"
      placeholder="Amount..."
      autoComplete="off"
      value={incomeAmount}
      onChange={onChangeIncome}
     />
     <input type="submit" value="submit" />
    </div>
   </form>

   <form onSubmit={onSubmitExpense}>
    <div className="input-group expense">
     <input
      type="text"
      name="expenseText"
      placeholder="Add Expense..."
      autoComplete="off"
      value={expenseText}
      onChange={onChangeExpense}
     />
     <input
      type="number"
      name="expenseAmount"
      placeholder="Amount..."
      autoComplete="off"
      value={expenseAmount}
      onChange={onChangeExpense}
     />
     <input type="submit" value="submit" />
    </div>
   </form>
  </div>
 );
};
export default AddTransaction;
