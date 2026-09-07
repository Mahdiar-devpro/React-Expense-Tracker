import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

function TransactionList({ entries, onDelete }) {
  if (entries.length === 0) {
    return (
      <div>
        <ul className="transaction-list">
          <li id="no-entry">There is no Entry</li>
        </ul>
      </div>
    );
  }
  return (
    <div>
      <ul className="transaction-list">
        {entries.map((entry) => (
          <li key={entry.id}>
            <div className="left-list">
              <i className={entry.type}>
                <FontAwesomeIcon
                  icon={
                    entry.type === "income"
                      ? "fa-solid fa-arrow-trend-up"
                      : "fa-solid fa-arrow-trend-down"
                  }
                />
              </i>
              <div className="entry-title">
                <h2>{entry.description}</h2>
                <div>
                  <div>
                    <i>
                      <FontAwesomeIcon icon="fa-solid fa-tag" />
                    </i>
                    <p>{entry.category}</p>
                  </div>
                  <div>
                    <i>
                      <FontAwesomeIcon icon="fa-solid fa-calendar" />
                    </i>
                    <p>{entry.date}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="right-list">
              <span
                className={
                  entry.type === "income" ? "income-price" : "expense-price"
                }
              >
                {entry.type === "income" ? "+" : "-"}${entry.amount.toFixed(2)}
              </span>
              <i onClick={() => onDelete(entry.id)}>
                <FontAwesomeIcon icon="fa-solid fa-trash" />
              </i>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
