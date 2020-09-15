import React, { Component } from 'react'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Burger from '../../components/Burger/Burger'


type Ingredients = "salad" | "bacon" | "cheese" | "meat";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 3,
            cheese: 2,
            meat: 1
        },
        totalPrice: 4
    }

    addIngredientHandler = (type: Ingredients) => {
        const oldCount = this.state.ingredients[type]
        const updatedCounted = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCounted

        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition

        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
    }
    removeIngredientHandler = (type: Ingredients) => {
        const oldCount = this.state.ingredients[type]
        if (oldCount <= 0) return
        const updatedCounted = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCounted
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition

        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
    }

    render() {
        return (
            <>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls price={this.state.totalPrice} ingredentRemoved={this.removeIngredientHandler} ingredentAdded={this.addIngredientHandler} />
            </>
        )
    }
}

export default BurgerBuilder