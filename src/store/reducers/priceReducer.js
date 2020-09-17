import * as at from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
    ingredientPrices: {},
    totalPrice: 0,

}

const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case at.SET_INGRIDENTS_PRICES: return updateObject(state, { ingredientPrices: action.value })
        case at.SET_TOTAL_PRICE:
            return {
                ...state,
                totalPrice: action.value
            }
        default: return state
    }
}
export default ingredientsReducer
