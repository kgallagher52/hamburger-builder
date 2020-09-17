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
export const handleTotalPrice = (payload) => {
    return {
        type: at.SET_TOTAL_PRICE,
        value: payload
    }
}