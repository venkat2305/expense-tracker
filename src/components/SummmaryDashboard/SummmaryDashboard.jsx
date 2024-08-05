import styles from "./SummmaryDashboard.module.css";
import PieChartComponent from "../PieChart/PieChat";
import AddBalance from "../Modals/AddBalnce";
import { useState } from "react";
import AddEditExpense from "../Modals/AddEditExpense";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

function SummmaryDashboard({trData,setTrData}) {
  const [openModal, setOpenModal] = useState("");
  const balance = localStorage.getItem("balance");
  const expenses = localStorage.getItem("expenses");

  const handleOpen = (modal) => {
    setOpenModal(modal);
  };

  const onClose = () => setOpenModal(false);

  return (
    <div className={styles.summmaryDashboard}>
      <SnackbarProvider />
      <AddBalance
        isOpen={openModal === "addIncome"}
        onClose={onClose}
        enqueueSnackbar={enqueueSnackbar}
      />
      <AddEditExpense
        isOpen={openModal === "addExpense"}
        mode={"add"}
        onClose={onClose}
        enqueueSnackbar={enqueueSnackbar}
      />

      <div className={`${styles.walletBalance} ${styles.infoCard}`}>
        <p>
          Wallet Balance: <span>{`₹${balance}`}</span>
        </p>
        <button onClick={() => handleOpen("addIncome")}>+ Add Income</button>
      </div>
      <div className={`${styles.expenses} ${styles.infoCard}`}>
        <p>
          Expenses: <span>{`₹${expenses}`}</span>
        </p>
        <button onClick={() => handleOpen("addExpense")}>+ Add Expense</button>
      </div>
      <div className="pie-chart">
        <PieChartComponent trData={trData} setTrData={setTrData}/>
      </div>
    </div>
  );
}

export default SummmaryDashboard;
