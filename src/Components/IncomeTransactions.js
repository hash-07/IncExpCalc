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
