import PropTypes from 'prop-types';
import styles from './Filter.module.css';

export default function Filter({ value, onChange }) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={onChange}
          className={styles.input}
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};