import PropTypes from 'prop-types';

const Searchauth = ({ value, onChange }) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search by Author Name"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

Searchauth.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Searchauth;