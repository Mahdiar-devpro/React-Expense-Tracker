import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

import { useState, useRef } from "react";

function EntryForm({ onAddEntry }) {
  const [entryType, setEntryType] = useState("expense");
  const [emptyInput, setEmptyInput] = useState({
    emptyDescription: false,
    emptyAmount: false,
    emptyDate: false,
  });

  const entryDescription = useRef();
  const entryPrice = useRef();
  const entryCategory = useRef();
  const entryDate = useRef();

  function handleEntryType(entry) {
    setEntryType(entry);
  }

  function handleSubmit() {
    const description = entryDescription.current.value.trim();
    const amount = parseFloat(entryPrice.current.value);
    const category = entryCategory.current.value;
    const date = entryDate.current.value;

    const isDescriptionEmpty = !description;
    const isAmountEmpty = isNaN(amount) || amount < 0;
    const isDateEmpty = !date;

    setEmptyInput({
      emptyDescription: isDescriptionEmpty,
      emptyAmount: isAmountEmpty,
      emptyDate: isDateEmpty,
    });

    if (isDescriptionEmpty || isAmountEmpty || isDateEmpty) return;

    onAddEntry({ type: entryType, description, amount, category, date });

    entryDescription.current.value = "";
    entryPrice.current.value = "";
    entryDate.current.value = "";
    entryCategory.current.selectedIndex = 0;
  }

  return (
    <div className="entry-form">
      <div className="add-new-entry">
        <i>
          <FontAwesomeIcon icon="fa-solid fa-plus" />
        </i>
        <h1>Add New Entry</h1>
      </div>

      <ul className="expense-form">
        <li className="entry-type">
          <label>entry type</label>
          <div>
            <button
              className={entryType === "expense" ? "active" : ""}
              onClick={() => handleEntryType("expense")}
            >
              <i>
                <FontAwesomeIcon icon="fa-solid fa-arrow-trend-down" />
              </i>
              Expense
            </button>
            <button
              className={entryType === "income" ? "active" : ""}
              onClick={() => handleEntryType("income")}
            >
              <i>
                <FontAwesomeIcon icon="fa-solid fa-arrow-trend-up" />
              </i>
              Income
            </button>
          </div>
        </li>
        <li className="description">
          <label>Description</label>
          <input
            ref={entryDescription}
            type="text"
            placeholder="What's this for?"
            className={emptyInput.emptyDescription ? "empty-input" : ""}
          />
          <span className={emptyInput.emptyDescription ? "error-active" : ""}>
            Please Enter Description
          </span>
        </li>
        <li className="amount">
          <label>amount</label>
          <div>
            <i>
              <FontAwesomeIcon icon="fa-solid fa-dollar-sign" />
            </i>
            <input
              ref={entryPrice}
              type="number"
              placeholder="0.00"
              className={emptyInput.emptyAmount ? "empty-input" : ""}
            />
          </div>
          <span className={emptyInput.emptyAmount ? "error-active" : ""}>
            Please Enter Right Amount
          </span>
        </li>
        <li>
          <label>category</label>
          <select ref={entryCategory}>
            <option value="Food">Food</option>
            <option value="Transportation">Transportation</option>
            <option value="Shopping">Shopping</option>
            <option value="Bills">Bills</option>
            <option value="Salary">Salary</option>
            <option value="Freelance">Freelance</option>
            <option value="Business">Business</option>
            <option value="Investment">Investment</option>
          </select>
        </li>
        <li>
          <label>date</label>
          <input
            ref={entryDate}
            type="date"
            className={emptyInput.emptyDate ? "empty-input" : ""}
          />
          <span className={emptyInput.emptyDate ? "error-active" : ""}>
            Please Enter Right Date
          </span>
        </li>
      </ul>
      <input onClick={handleSubmit} type="submit" className="submit" />
    </div>
  );
}

export default EntryForm;
