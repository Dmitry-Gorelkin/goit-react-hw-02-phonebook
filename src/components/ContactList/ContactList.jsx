import PropTypes from 'prop-types';
import {
  ContactListConteiner,
  ContactListItem,
  ContactListItemDelete,
} from './ContactList.styled';

export const ContactList = ({ contact, onDelete }) => {
  return (
    <>
      <ContactListConteiner>
        {contact.map(item => {
          const { id, name, number } = item;
          return (
            <ContactListItem key={id}>
              {name}: {number}
              <ContactListItemDelete onClick={() => onDelete(id)}>
                Delete
              </ContactListItemDelete>
            </ContactListItem>
          );
        })}
      </ContactListConteiner>
    </>
  );
};

ContactList.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDelete: PropTypes.func.isRequired,
};
