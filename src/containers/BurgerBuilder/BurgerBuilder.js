import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ac from '../../store/actions/index'
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';



class BurgerBuilder extends Component {
    state = {
        purchasing: false,
        loading: false,
    }

    componentDidMount() {
        this.props.onSetIngredientsPrices()
        this.props.onSetIngredients()
    }


    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () => {
        this.props.history.push("/checkout");
    }

    render() {
        const disabledInfo = {
            ...this.props.ings
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = null;
        let burger = this.props.err ? <p>Ingredients can't be loaded!</p> : <Spinner />;

        if (this.props.ings) {
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemove}
                        setTotal={this.props.onSetTotalPrice}
                        ordered={this.purchaseHandler}
                        purchasable={this.props.total <= 0}
                        totalPrice={this.props.total}
                        prices={this.props.prices}
                        disabled={disabledInfo}
                    />
                </Aux>
            );
            orderSummary = <OrderSummary
                ingredients={this.props.ings}
                price={this.props.total}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler} />;
        }
        if (this.state.loading) {
            orderSummary = <Spinner />;
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredientReducer.ingredients,
        prices: state.priceReducer.ingredientPrices,
        total: state.priceReducer.totalPrice,
        err: state.errorReducer.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetIngredients: () => dispatch(ac.setIngredients()),
        onIngredientAdded: (ingName) => dispatch(ac.addIngredient(ingName)),
        onIngredientRemove: (ingName) => dispatch(ac.removeIngredient(ingName)),
        onSetTotalPrice: (price) => dispatch(ac.handleTotalPrice(price)),
        onSetIngredientsPrices: () => dispatch(ac.setPrices()),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));