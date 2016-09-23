
import React from 'react';
import Contact from './Contact.jsx';
import NewContactModal from './NewContactModal.jsx';
import request from 'superagent';
import firebase from '../../firebase.config.js';

export default class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    }
    this.changeModalState = this.changeModalState.bind(this);
    this.addNewContact = this.addNewContact.bind(this);
  };
  componentDidMount() {
    this.getContacts()
  }

 getContacts() {
    const currentUserID = firebase.auth().currentUser.uid;
    const url = `https://react-sms-webapp.firebaseio.com/users/${currentUserID}/contacts.json`;
    request.get(url)
      .end((err, response) => {
        this.setState({
          contacts: response.body
        })
      })
  }

    render() {
    return (
      <div id="contact-list">
        <button id="new-contact-button" onClick={this.changeModalState}>Add Contact</button>
        <button id="edit-contact-button">Edit Contact</button>
        { this.state.modalOpen ? <NewContactModal addNewContact={this.addNewContact} /> : false}
        <Contact />
      </div>
    );
  };
