import * as at from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
    error: false
}

const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case at.ERROR: return updateObject(state, action.value)
        default: return state
    }
}
export default ingredientsReducer
