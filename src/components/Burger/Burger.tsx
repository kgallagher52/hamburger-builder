import React from 'react'

import BurgerIngredient from './BurgerIngredents/BurgerIngredient'

import './burger.css'

type Props = {
    ingredients: any
}

// WIP - needs the actual type that should be passed in
const Burger = ({ ingredients }: Props) => {
    //Nugget - Returns all keys /
    let transformedIngredients = Object.keys(ingredients).map((ik: any) => {
        return [...Array(ingredients[ik])].map((_, i) => {
            return <BurgerIngredient key={ik + i} type={ik} />
        })
    }).reduce((i, v) => {
        return i.concat(v)
    }, [])
    if (!transformedIngredients.length) {
        (transformedIngredients as any) = <p>Please start adding ingredients!</p>
    }
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger
