import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactDetails.css';

class ContactDetails extends Component {

  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    }
  }

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your details</h4>
        <form>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="text" name="street" placeholder="Street" />
          <input type="text" name="postalCode" placeholder="Postal Code" />
        </form>
      </div>
    );
  }
}

export default ContactDetails;