import React from "react";

const FilterComponent = ({ filters, setFilters }) => {
  const handleRemoveFilter = (e) => {
    if (filters.length === 1) {
      setFilters([]);
    } else {
      const updatedFilters = filters.filter((fil) => {
        if (fil === e.target.value) return null;
        return fil;
      });

      setFilters(updatedFilters);
    }
  };
  return (
    <div className="grid-container--filter | grid-container">
      <div className="filters | flex">
        {filters.map((filter) => {
          return (
            <button
              key={filter}
              className="filter-btn"
              value={filter}
              onClick={(e) => handleRemoveFilter(e)}
            >
              {filter}
            </button>
          );
        })}
      </div>
      <button type="button" onClick={() => setFilters([])}>
        Clear
      </button>
    </div>
  );
};

export default FilterComponent;
