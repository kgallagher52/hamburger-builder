import axios from '../../axios-orders'
import * as at from './actionTypes'

export const setIngredients = () => {
    return (dispatch) => {
        axios.get('/ingredients.json')
            .then(res => {
                dispatch({ type: at.SET_INGRIDENTS, value: res.data })
            })
            .catch(error => {
                dispatch({ type: at.ERROR, value: true })
            });
    }
}

export const addIngredient = payload => {
    return {
        type: at.ADD_INGREDIENT,
        value: payload
    }
}

export const removeIngredient = payload => {
    return {
        type: at.REMOVE_INGREDIENT,
        value: payload
    }
}