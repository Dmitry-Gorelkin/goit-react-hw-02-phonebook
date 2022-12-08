import PropTypes from 'prop-types';
import { ContactCard } from 'components/ContactCard/ContactCard';
import { ContactListConteiner } from './ContactList.styled';

export const ContactList = ({ contact, onDelete }) => {
  return (
    <>
      <ContactListConteiner>
        {contact.map(item => {
          const { id, name, number } = item;
          return (
            <ContactCard
              key={id}
              name={name}
              number={number}
              id={id}
              onDelete={onDelete}
            />
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
    }).isRequired
  ),
};
