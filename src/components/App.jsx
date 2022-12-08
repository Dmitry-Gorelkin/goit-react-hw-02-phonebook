import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './Container/Container';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = ({ name, number }) => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { id: nanoid(), name, number }],
      };
    });
  };

  deleteContact = id => {
    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(item => item.id !== id) };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    const visibleContactList = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );

    return (
      <Container>
        <Section title="phonebook">
          <ContactForm onSubmit={this.handleSubmit} contactList={contacts} />
        </Section>
        <Section title="contacts">
          <Filter onChange={this.handleInput} value={filter} />
          {contacts.length !== 0 ? (
            <ContactList
              contact={visibleContactList}
              onDelete={this.deleteContact}
            />
          ) : (
            <Notification message="no contacts" />
          )}
        </Section>
      </Container>
    );
  }
}
