import React, {useState} from 'react'

const Sample = () => {
    
const [expenses, setExpenses] = useState([]);

const [incomeAmount, setIncomeAmmount] = useState(0);
const [incometext, setIncomeText] = useState("")

const submitHandle = () => {
  const newTransaction = {
    id: uuidv4(),
    incomeText,
    IncomeAmmout
  }
  setExpenses([...expenses, newTransaction])
  
}


const getTotalAmount = () => {
  let total = 0;
  
  if( expenses.length == 0) return 0;
  expenses.forEach(d => (total = total + d.incomeAmount));
  return total;
}

return (
  
  <div>
    <form onSubmit={handleSubmit}>
      <input name="incomeAmmount" type="number" onChange={e => setIncomeAmount(e.target.value)}/>
      <input name="incomeText" type="text" onChange={e => setIncomeText(e.target.value)}/>
    
    </form>
 <section>
        <ul>
         {!!expenses ? expenses.map(e => {
             <li key={e.id}>{`${e.incomeText}  : ${e.incomeAmount}`} </li>
         })};
        </ul>
         

  <h3>{`Total Ammout = ${getTotalAmount()}`}</h3>
    </section>
  </div>
  )
        }
    }
        


export default Sample;










import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const ExpenseTransactions = ({ expenseTransaction }) => {
 const { deleteTransaction } = useContext(GlobalContext);

 const [showModel, setShowModel] = useState(false);

 const handleDeleteTransaction = (e) => {
  e.preventDefault();
  setShowModel(true);
 };

 const modelStyle = {
  position: "absolute",
  top: "6%",
  left: "40%",
  height: "300px",
  width: "400px",
 };

 return (
  <li className="transaction">
   <span className="transaction-text">{expenseTransaction.expenseText}</span>
   <span className="transaction-amount">
    ₹{expenseTransaction.expenseAmount}
   </span>
   <button className="delete-btn" onClick={handleDeleteTransaction}>
    ❌<i className="fas fa-trash"></i>
   </button>

   {showModel && (
    <div style={modelStyle}>
     <h2>Are your sure that you want to delete your transaction</h2>
     <div>
      <button onClick={() => deleteTransaction(expenseTransaction.id)}>
       Confirm
      </button>
      <button onClick={() => setShowModel(false)}>Cancel</button>
     </div>
    </div>
   )}
  </li>
 );
};

export default ExpenseTransactions;






//...income tran.......................

import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeTransactions = ({ incomeTransaction }) => {
 const { deleteTransaction } = useContext(GlobalContext);

 const [showModel, setShowModel] = useState(false);

 const handleDeleteTransaction = (e) => {
  e.preventDefault();
  setShowModel(true);
 };

 const modelStyle = {
  position: "absolute",
  top: "6%",
  left: "40%",
  height: "300px",
  width: "400px",
 };

 return (
  <li className="transaction">
   <span className="transaction-text">{incomeTransaction.incomeText}</span>
   <span className="transaction-amount">₹{incomeTransaction.incomeAmount}</span>
   <button className="delete-btn" onClick={handleDeleteTransaction}>
    ❌<i className="fas fa-trash"></i>
   </button>

   {showModel && (
    <div style={modelStyle}>
     <h2>Are your sure that you want to delete your transaction</h2>
     <div>
      <button onClick={() => deleteTransaction(incomeTransaction.id)}>
       Confirm
      </button>
      <button onClick={() => setShowModel(false)}>Cancel</button>
     </div>
    </div>
   )}
  </li>
 );
};

export default IncomeTransactions;
