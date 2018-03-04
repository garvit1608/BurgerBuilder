import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICE = {
  salad: 0.5,
  cheese: 0.5,
  meat: 1.5,
  bacon: 0.7
}

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 2
  }

  addIngredientHandler = (type) => {
    const updatedCount = ++this.state.ingredients[type];
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const newPrice = INGREDIENT_PRICE[type] + this.state.totalPrice;
    this.setState({ingredients: updatedIngredients, totalPrice: newPrice});

  }

  removeIngredientHandler = (type) => {
    const updatedCount = --this.state.ingredients[type];
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const newPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
    this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };

    console.log('click');
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
         />
      </Aux>
    );
  }
}

export default BurgerBuilder;

