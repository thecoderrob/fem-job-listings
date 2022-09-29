import React, { useState, useEffect } from "react";

// Components
import FilterComponent from "./FilterComponent";
import ListingComponent from "./ListingComponent";

const App = () => {
  const [listings, setListings] = useState([]);
  const [filters, setFilters] = useState([]);

  const fetchListings = async () => {
    try {
      const res = await fetch("data.json");
      const data = await res.json();

      setListings(data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleFilter = (listing) => {
    let isHidden = false;
    const { role, level, languages, tools } = listing;
    const filterableItems = [role, level, ...languages, ...tools];

    filters.map((filter) => {
      if (!filterableItems.includes(filter)) {
        isHidden = true;
      }
      return filter;
    });

    return isHidden ? null : listing;
  };

  useEffect(() => {
    fetchListings();
  }, []);

  return (
    <div className="App">
      <header></header>
      <main className="container--main | container">
        {filters.length > 0 && (
          <FilterComponent filters={filters} setFilters={setFilters} />
        )}

        {listings
          .filter((listing) => {
            return handleFilter(listing);
          })
          .map((listing) => {
            const { id } = listing;
            return (
              <ListingComponent
                key={id}
                filters={filters}
                setFilters={setFilters}
                {...listing}
              />
            );
          })}
      </main>
    </div>
  );
};

export default App;
