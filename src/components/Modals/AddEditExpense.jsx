import { useState } from "react";
import styles from "./AddEditExpense.module.css";
import ReactModal from "react-modal";

function AddEditExpense({ mode, isOpen, onClose, enqueueSnackbar }) {
  const [data, setData] = useState(["venkat,", "ram", "sai"]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let message = mode === "add" ? "Added Expense" : "Updated expense";
    enqueueSnackbar(message);
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
            height: "300px",
            margin: "auto",
          },
        }}
      >
        <div className={styles.AddEditExpenseContainer}>
          <h1>{mode === "add" ? "Add Expense" : "Edit Expense"}</h1>
          <div>
            <form className={styles.inputContainer} onSubmit={handleSubmit}>
              <input placeholder="Title" type="text" />
              <input placeholder="Price" type="number" min="0" />
              <select>
                <option value="" disabled selected hidden>
                  Select Category
                </option>
                {data.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <input type="date" />
              <button style={{ backgroundColor: "#F4BB4A" }}>
                {mode === "add" ? "Add Expense" : "Edit Expense"}
              </button>
              <button onClick={onClose}>Cancel</button>
            </form>
          </div>
        </div>
      </ReactModal>
    </>
  );
}

export default AddEditExpense;
