function FilterButtons({ filter, onFilterChange }) {
  return (
    <div className="filter-buttons">
      <button
        onClick={() => onFilterChange("all")}
        className={filter === "all" ? "active" : ""}
      >
        All Entries
      </button>
      <button
        onClick={() => onFilterChange("expense")}
        className={filter === "expense" ? "active" : ""}
      >
        Expense
      </button>
      <button
        onClick={() => onFilterChange("income")}
        className={filter === "income" ? "active" : ""}
      >
        Income
      </button>
    </div>
  );
}

export default FilterButtons;
