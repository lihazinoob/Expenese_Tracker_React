import { useState } from "react";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import IncomeExpenses from "./Components/IncomeExpenses";
import TransactionList from "./Components/TransactionList";
import AddTransaction from "./Components/AddTransaction";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="container">
        <Balance></Balance>
        <IncomeExpenses></IncomeExpenses>
        <TransactionList></TransactionList>
        <AddTransaction></AddTransaction>
      </div>
    </>
  );
}

export default App;
