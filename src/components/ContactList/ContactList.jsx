import PropTypes from 'prop-types';
import IconButton from '../IconButton';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';

import styles from './ContactList.module.css';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={number.toString()} value={number} className={styles.item}>
          <p className={styles.text}>
            {name}: {number}
          </p>

          <IconButton onClick={() => onDeleteContact(id)}>
            <DeleteIcon width="20" height="20" fill="#fff" />
          </IconButton>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

