import * as at from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
    ingredients: {},
}

const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case at.SET_INGRIDENTS: return updateObject(state, { ingredients: action.value })
        case at.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.value]: state.ingredients[action.value] + 1

                }
            }
        case at.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.value]: state.ingredients[action.value] - 1

                }
            }
        default: return state
    }
}
export default ingredientsReducer
