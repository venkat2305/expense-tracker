import { useState } from "react";
import ReactModal from "react-modal";

import styles from "./AddBalance.module.css";

function AddBalance({ isOpen, onClose, enqueueSnackbar }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    enqueueSnackbar("Balance updated");
    onClose();
  };
  return (
    <>
      <ReactModal
        isOpen={isOpen}
        shouldCloseOnEsc={true}
        style={{
          overlay: {},
          content: {
            background: "#EFEFEFD9",
            borderRadius: "12px",
            width: "500px",
            height: "160px",
            margin: "auto",
          },
        }}
      >
        <div className={styles.AddBalanceContainer}>
          <h1>Add Balance</h1>
          <div>
            <form className={styles.inputContainer} onSubmit={handleSubmit}>
              <input placeholder="Income Amount" />
              <button className={styles.addBalanceButton}>Add Balance</button>
              <button className={styles.cancelButton} onClick={onClose}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      </ReactModal>
    </>
  );
}

export default AddBalance;
