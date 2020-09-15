import React from 'react'

type Props = {
    ingredients: any
}

const OrderSummary = ({ ingredients }: Props) => {
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
            <p>Continue to Checkout?</p>
        </div>
    )
}

export default OrderSummary
