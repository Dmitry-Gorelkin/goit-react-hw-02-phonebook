import PropTypes from 'prop-types';
import { ContactListItem, ContactListItemDelete } from './ContactCard.styled';

export const ContactCard = ({ id, name, number, onDelete }) => {
  return (
    <ContactListItem>
      {name}: {number}
      <ContactListItemDelete onClick={() => onDelete(id)}>
        Delete
      </ContactListItemDelete>
    </ContactListItem>
  );
};

ContactCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
