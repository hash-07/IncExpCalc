import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import AddTransaction from "./Components/AddTransaction";
import IncomeList from "./Components/IncomeList";
import Expense from "./Components/ExpenseList";
import { GlobalContextProvider } from "./context/GlobalState";

const App = () => {
 return (
  <GlobalContextProvider>
   <div className="container">
    <div className="app-wrapper">
     <Header />
     <Balance />
     <AddTransaction />
     <IncomeList />
     <Expense />
    </div>
   </div>
  </GlobalContextProvider>
 );
};

export default App;
