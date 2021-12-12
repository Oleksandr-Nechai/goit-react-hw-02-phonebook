import React, { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import "./App.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  serchName = (value) => {
    return this.state.contacts.find(
      (item) => item.name.toUpperCase() === value.toUpperCase()
    );
  };
  formSubmitHandler = (data) => {
    const { name } = data;
    if (this.serchName(name)) {
      alert(`${name} is already in contacts`);
    } else {
      const contact = { ...data, id: nanoid() };
      this.setState((state) => ({ contacts: [...state.contacts, contact] }));
    }
  };
  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };
  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contacts) =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  removeContact = (contactId) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((contact) => contact.id !== contactId),
    }));
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onRemoveContact={this.removeContact}
        />
      </div>
    );
  }
}

export default App;
