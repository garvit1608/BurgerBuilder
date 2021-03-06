import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactDetails from './ContactDetails/ContactDetails';

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      bacon: 1,
      cheese: 1
    }
  }

  componentDidMount() {

    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for ( let param of query.entries() ) {
      ingredients[param[0]] = +param[1];
    }
    this.setState({ingredients});
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-details');
  }

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutContinued={this.checkoutContinuedHandler}
          checkoutCancelled={this.checkoutCancelledHandler}
        />
        <Route
          path={this.props.match.path + '/contact-details'}
          component={ContactDetails}
        />
      </div>
    );
  }
}

export default Checkout;