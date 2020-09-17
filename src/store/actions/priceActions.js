import * as at from './actionTypes'
import axios from "../../axios-orders";

export const setPrices = () => {
    return (dispatch) => {
        axios.get('/prices.json')
            .then(res => {
                dispatch({ type: at.SET_INGRIDENTS_PRICES, value: res.data })
            })
            .catch(error => {
                dispatch({ type: at.ERROR, value: true })
            });
    }
}
export const handleAddTotal = (payload) => {
    return {
        type: at.ADD_TOTAL,
        value: payload
    }
}
export const handleSubTotal = (payload) => {
    return {
        type: at.SUB_TOTAL,
        value: payload
    }
}