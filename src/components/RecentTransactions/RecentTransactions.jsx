import { useEffect, useState } from "react";
import styles from "./RecentTransactions.module.css";
import { BsLuggage } from "react-icons/bs";
import { PiGiftLight, PiPizza } from "react-icons/pi";
import deleteIcon from "../../assets/delete.png";
import editIcon from "../../assets/edit.png";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { transactionsData } from '../../data';

function RecentTransactions() {

  const [tryData,setTryData] = useState(()=>JSON.parse(localStorage.getItem("transactions")))
  const [currentPage, setCurrentPage] = useState(0);
  const [currentPageData, setCurrentPageData] = useState([]);
  const [pageLimit, setPageLimit] = useState(3);

  useEffect(() => {
    const start = currentPage * pageLimit;
    const end = start + pageLimit;
    setCurrentPageData(transactionsData?.slice(start, end));
  }, [currentPage,tryData]);

  return (
    <div className={styles.RecentTransactionContainer}>
      <h2>Recent Transactions</h2>
      <div className={styles.transactionDataDiv}>
        {currentPageData.map((item) => (
          <>
            <div className={styles.eachTransaction} key={item.title}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "15px" }}
              >
                <div className={styles.icon}>{item.icon}</div>
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
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={deleteIcon}
                    style={{ cursor: "pointer" }}
                    alt="delete-icon"
                  />
                  <img
                    src={editIcon}
                    style={{ cursor: "pointer" }}
                    alt="edit-icon"
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
          <div
            className={`${styles.icon} ${styles.arrow}`}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            <FaArrowLeft />
          </div>
          <div className={styles.currentPage}>{currentPage+1}</div>
          <div
            className={`${styles.icon} ${styles.arrow}`}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentTransactions;
