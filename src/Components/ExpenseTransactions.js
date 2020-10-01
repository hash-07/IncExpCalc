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
