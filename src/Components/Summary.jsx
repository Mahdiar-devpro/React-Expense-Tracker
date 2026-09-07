import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

function Summary({ totalIncome, totalExpense, netBalance }) {
  return (
    <ul className="summary-items">
      <li>
        <div className="s1 summary-titles">
          <p>total income</p>
          <h3>${totalIncome.toFixed(2)}</h3>
        </div>
        <i>
          <FontAwesomeIcon icon="fa-solid fa-arrow-trend-up" />
        </i>
      </li>
      <li>
        <div className="s2 summary-titles">
          <p>total expense</p>
          <h3>${totalExpense.toFixed(2)}</h3>
        </div>
        <i>
          <FontAwesomeIcon icon="fa-solid fa-arrow-trend-down" />
        </i>
      </li>
      <li>
        <div className="s3 summary-titles">
          <p>net balance</p>
          <h3>${netBalance.toFixed(2)}</h3>
        </div>
        <i>
          <FontAwesomeIcon icon="fa-solid fa-dollar-sign" />
        </i>
      </li>
    </ul>
  );
}

export default Summary;
