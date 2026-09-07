import Summary from "./Components/Summary";
import EntryForm from "./Components/EntryForm";
import FilterButtons from "./Components/FilterButtons";
import TransactionList from "./Components/TransactionList";

import { useState, useEffect } from "react";

function App() {
  const [entries, setEntries] = useState(() => {
    const savedEntries = localStorage.getItem("entries");
    return savedEntries ? JSON.parse(savedEntries) : [];
  });
  
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  function addEntry(newEntry) {
    setEntries((prevEntry) => [
      { ...newEntry, id: crypto.randomUUID() },
      ...prevEntry,
    ]);
  }

  function deleteEntry(id) {
    setEntries((prevEntry) => prevEntry.filter((entry) => entry.id !== id));
  }
  // summary items
  const totalIncome = entries
    .filter((entry) => entry.type === "income")
    .reduce((sum, entry) => sum + entry.amount, 0);

  const totalExpense = entries
    .filter((entry) => entry.type === "expense")
    .reduce((sum, entry) => sum + entry.amount, 0);

  const netBalance = totalIncome - totalExpense;

  //Filtering
  const filteredEntries =
    filter === "all"
      ? entries
      : entries.filter((entry) => entry.type === filter);

  return (
    <main>
      <Summary
        totalIncome={totalIncome}
        totalExpense={totalExpense}
        netBalance={netBalance}
      />
      <div className="expense-details">
        <EntryForm onAddEntry={addEntry} />
        <div className="filter-area">
          <FilterButtons filter={filter} onFilterChange={setFilter} />
          <TransactionList entries={filteredEntries} onDelete={deleteEntry} />
        </div>
      </div>
    </main>
  );
}

export default App;
