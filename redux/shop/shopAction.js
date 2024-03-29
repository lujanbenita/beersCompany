import * as types from "./shopActionTypes"

export const updateCart = cart => {
	return dispatch => {
		dispatch({
			type: types.UPDATE_CART,
			payload: cart,
		})
	}
}

export const resetCart = () => {
	return dispatch => {
		dispatch({
			type: types.UPDATE_CART,
		})
	}
}
