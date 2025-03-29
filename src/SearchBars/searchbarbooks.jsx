import PropTypes from 'prop-types';
import "./search.css";
const Searchb = ({ value, onChange }) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search by Book Name, Author, ISBN, etc..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

Searchb.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Searchb;