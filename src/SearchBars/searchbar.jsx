import PropTypes from 'prop-types';
import "./search.css";
const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search by name, author, or ISBN..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SearchBar;