import './App.css';
import SummmaryDashboard from './components/SummmaryDashboard/SummmaryDashboard';
import RecentTransactions from './components/RecentTransactions/RecentTransactions';
import TopExpenses from './components/TopExpenses/TopExpenses';

import { transactionsData } from './data';
import { useState } from 'react';

function App() {
  localStorage.setItem("balance", "4050")
  localStorage.setItem("expenses", "500")
  localStorage.setItem("transactions", JSON.stringify(transactionsData))

  const [trData, setTrData] = useState(transactionsData)

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <SummmaryDashboard trData={trData} setTrData={setTrData} />
      <div style={{ display: "grid", gridTemplateColumns: "4fr 3fr", gap: "20px" }}>
        <RecentTransactions trData={trData} setTrData={setTrData} />
        <TopExpenses trData={trData} setTrData={setTrData} />
      </div>
    </div>
  );
}

export default App;
