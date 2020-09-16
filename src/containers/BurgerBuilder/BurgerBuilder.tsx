import React, { Component } from 'react'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Burger from '../../components/Burger/Burger'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Modal from '../../components/UI/Modal/Modal'
import AxiosOrderInstance from '../../axios-orders'

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
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 0,
        purchasing: false
    }

    purchaseHandler = () => {
        this.setState({ purchasing: !this.state.purchasing })
    }

    purchaseContinueHandler = () => {
        //.json is a firebase syntax
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: "Keaton Gallagher",
                address: {
                    street: "test",
                    zipCode: "84058",
                    country: 'United States'
                },
                email: "test@test.com"
            }
        }
        AxiosOrderInstance.post('/orders.json', order).then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        })
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
                {this.state.purchasing &&
                    <Modal handleCheckout={this.purchaseHandler}>
                        <OrderSummary
                            price={this.state.totalPrice}
                            ingredients={this.state.ingredients}
                            purchaseCancelled={this.purchaseHandler}
                            purchaseContinued={this.purchaseContinueHandler}
                        />
                    </Modal>
                }
                <Burger ingredients={this.state.ingredients} />
                <BuildControls handleCheckout={this.purchaseHandler} puchasable={this.state.totalPrice > 0} price={this.state.totalPrice} ingredentRemoved={this.removeIngredientHandler} ingredentAdded={this.addIngredientHandler} />
            </>
        )
    }
}

export default BurgerBuilder