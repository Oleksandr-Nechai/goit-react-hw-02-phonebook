import React, { Component } from "react";
import styles from "./ContactForm.module.css";
import PropTypes from "prop-types";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };
  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.reset();
  };
  reset = () => {
    this.setState({ name: "", number: "" });
  };
  render() {
    return (
      <form onSubmit={this.onHandleSubmit}>
        <label>
          <span>Name</span>
        </label>
        <input
          type="text"
          onChange={this.onHandleChange}
          name="name"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label>
          <span>Number</span>
        </label>
        <input
          type="tel"
          value={this.state.number}
          onChange={this.onHandleChange}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    );
  }
}
ContactForm.prototype = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onSubmit:PropTypes.func.isRequired,
}
export default ContactForm;
