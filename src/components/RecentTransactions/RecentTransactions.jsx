import { useEffect, useState } from "react";
import styles from "./RecentTransactions.module.css";
import { BsLuggage } from "react-icons/bs";
import { PiGiftLight, PiPizza } from "react-icons/pi";
import deleteIcon from "../../assets/delete.png";
import editIcon from "../../assets/edit.png";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { transactionsData } from "../../data";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

import AddEditExpense from "../Modals/AddEditExpense";

function RecentTransactions({ trData, setTrData }) {
  // const [tryData, setTryData] = useState(() =>
  //   JSON.parse(localStorage.getItem("transactions"))
  // );
  // console.log(JSON.parse(localStorage.getItem("transactions")))
  // console.log(transactionsData)
  // const [tryData, setTryData] = useState(transactionsData);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentPageData, setCurrentPageData] = useState([]);
  const [pageLimit, setPageLimit] = useState(3);

  const updatePageNumber = (type) => {
    if (type === "increase") {
      setCurrentPage((prev) => {
        if (prev + 1 <= trData?.length / pageLimit) {
          return prev + 1;
        }
        return prev;
      });
    } else if (type === "decrease") {
      setCurrentPage((prev) => {
        if (prev - 1 >= 0) {
          return prev - 1;
        }
        return prev;
      });
    }
  };

  const categoryIcon = (category) => {
    switch (category) {
      case "travel":
        return <BsLuggage />;
      case "entertainment":
        return <PiGiftLight />;
      case "food":
        return <PiPizza />;
    }
  };

  useEffect(() => {
    const start = currentPage * pageLimit;
    const end = start + pageLimit;
    setCurrentPageData(trData?.slice(start, end));
  }, [currentPage, trData]);

  const [openModal, setOpenModal] = useState("");

  const handleEdit = (modal, item) => {
    setOpenModal(modal);
    // const updatedItem = n
    // setTryData(prev => )
  };

  const onClose = () => setOpenModal(false);

  const handleDelete = (item) => {
    const newData = trData.filter((dataItem) => dataItem.title != item.title);
    setTrData(newData);
  };

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(trData));
  }, [trData]);

  return (
    <div className={styles.RecentTransactionContainer}>
      <h2>Recent Transactions</h2>
      <AddEditExpense
        isOpen={openModal === "editExpense"}
        mode={"edit"}
        onClose={onClose}
        enqueueSnackbar={enqueueSnackbar}
      />
      <div className={styles.transactionDataDiv}>
        {currentPageData.map((item) => (
          <>
            <div className={styles.eachTransaction} key={item.title}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "15px" }}
              >
                {/* <div className={styles.icon}>{item.icon}</div> */}
                <div className={styles.icon}>{categoryIcon(item.category)}</div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p>{item.title}</p>
                  <p style={{ color: "#9B9B9B" }}>{item.date}</p>
                </div>
              </div>
              <div
                style={{ display: "flex", gap: "20px", alignItems: "center" }}
              >
                <div style={{ color: "#F4BB4A", fontWeight: "bold" }}>
                  {item.price}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={deleteIcon}
                    // style={{ cursor: "pointer" }}
                    alt="delete-icon"
                    onClick={() => handleDelete(item)}
                  />
                  <img
                    src={editIcon}
                    alt="edit-icon"
                    onClick={() => handleEdit("editExpense", item)}
                  />
                </div>
              </div>
            </div>
            <hr />
          </>
        ))}
        <div
          className={styles.paginationDiv}
          style={{ color: "black", margin: "0 auto" }}
        >
          <button
            className={`${styles.icon} ${styles.arrow}`}
            onClick={() => updatePageNumber("decrease")}
            disabled={currentPage === 0}
          >
            <FaArrowLeft />
          </button>
          <button
            style={{ border: "none", cursor: "pointer" }}
            className={styles.currentPage}
          >
            {currentPage + 1}
          </button>
          <button
            className={`${styles.icon} ${styles.arrow}`}
            onClick={() => updatePageNumber("increase")}
            disabled={currentPage === Math.floor(trData.length/pageLimit)}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecentTransactions;
