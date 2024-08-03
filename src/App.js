import './App.css';
import SummmaryDashboard from './components/SummmaryDashboard/SummmaryDashboard';
import RecentTransactions from './components/RecentTransactions/RecentTransactions';
import TopExpenses from './components/TopExpenses/TopExpenses';

import { transactionsData } from './data';

function App() {
  localStorage.setItem("balance", "4050")
  localStorage.setItem("expenses", "500")
  localStorage.setItem("transactions", JSON.stringify(transactionsData))

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <SummmaryDashboard />
      <div style={{ display: "grid", gridTemplateColumns: "4fr 3fr", gap: "20px" }}>
        <RecentTransactions />
        <TopExpenses />
      </div>
    </div>
  );
}

export default App;
