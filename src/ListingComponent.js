import React from "react";

const ListingComponent = ({
  company,
  logo,
  isNew,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  filters,
  setFilters,
}) => {
  const handleAddFilter = (e) => {
    const uniqueFilters = Array.from(new Set([...filters, e.target.value]));

    setFilters(uniqueFilters);
  };

  return (
    <div
      className="grid-container--listing | grid-container"
      data-featured={featured}
    >
      <img src={logo} alt="" />

      <div className="listing-details">
        <div className="company | flex">
          <span className="fw-bold text-primary-400">{company}</span>
          <span hidden={isNew ? "" : "hidden"} className="pill bg-primary-400">
            New!
          </span>
          <span
            hidden={featured ? "" : "hidden"}
            className="pill bg-primary-900"
          >
            Featured
          </span>
        </div>

        <div className="position">{position}</div>

        <div className="other-details">
          <span>{postedAt}</span>
          <span className="has-dot-before">{contract}</span>
          <span className="has-dot-before">{location}</span>
        </div>
      </div>

      <div className="listing-filters | flex">
        <button
          type="button"
          className="filter-btn"
          value={role}
          onClick={(e) => handleAddFilter(e)}
        >
          {role}
        </button>
        <button
          type="button"
          className="filter-btn"
          value={level}
          onClick={(e) => handleAddFilter(e)}
        >
          {level}
        </button>

        {languages.map((language) => {
          return (
            <button
              key={language}
              type="button"
              className="filter-btn"
              value={language}
              onClick={(e) => handleAddFilter(e)}
            >
              {language}
            </button>
          );
        })}

        {tools.map((tool) => {
          return (
            <button
              key={tool}
              type="button"
              className="filter-btn"
              value={tool}
              onClick={(e) => handleAddFilter(e)}
            >
              {tool}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ListingComponent;
