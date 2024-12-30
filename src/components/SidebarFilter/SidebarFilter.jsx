import PropTypes from "prop-types";
import { useState } from "react";
import "./sidebarFilter.scss";

const SidebarFilter = ({ filters, onApplyFilters }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    brands: [],
  });

  // Handle category or brand filter selection
  const handleFilterChange = (filterType, filterValue) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };

      if (updatedFilters[filterType].includes(filterValue)) {
        updatedFilters[filterType] = updatedFilters[filterType].filter(
          (value) => value !== filterValue
        );
      } else {
        updatedFilters[filterType].push(filterValue);
      }

      return updatedFilters;
    });
  };

  // Apply the filters
  const applyFilters = () => {
    onApplyFilters(selectedFilters);
  };

  return (
    <div className="sidebar-filter">
      <h3>Filters</h3>
      {/* Categories Filter */}
      <div className="filter-section">
        <h4>Categories</h4>
        <ul>
          {filters.categories.map((category, index) => (
            <li key={index}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedFilters.categories.includes(category)}
                  onChange={() => handleFilterChange("categories", category)}
                />
                {category}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Brands Filter */}
      <div className="filter-section">
        <h4>Brands</h4>
        <ul>
          {filters.brands.map((brand, index) => (
            <li key={index}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedFilters.brands.includes(brand)}
                  onChange={() => handleFilterChange("brands", brand)}
                />
                {brand}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Apply Filters Button */}
      <div className="filter-footer">
        <button onClick={applyFilters}>Apply Filters</button>
      </div>
    </div>
  );
};

// Prop validation
SidebarFilter.propTypes = {
  filters: PropTypes.shape({
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    brands: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onApplyFilters: PropTypes.func.isRequired,
};

export default SidebarFilter;
