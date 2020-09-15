import React from 'react'
import Button from '../../UI/Button/Button'

type Props = {
    ingredients: any
    purchaseCancelled: any
    purchaseContinued: any
    price: number
}

//WIP types need actual types

const OrderSummary = ({ price, purchaseCancelled, purchaseContinued, ingredients }: Props) => {
    const ingredientSummary = Object.keys(ingredients).map((ik, i) => {
        return <li key={i}> <span style={{ textTransform: "uppercase" }}>{ik}</span>:{ingredients[ik]}</li>
    })
    return (
        <div>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price:</strong> {price}</p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={purchaseContinued}>CONTINUE</Button>
        </div>
    )
}

export default OrderSummary
