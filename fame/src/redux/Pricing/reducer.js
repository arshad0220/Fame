import * as types from "./actionType";

const initialState = {
    isLoading: false,
    price: [],
    error: false
}

export const pricingReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case types.GET_PAYMENT_REQUEST:
            return {
                ...state,
                error:false,
                isLoading: true
            }
        case types.GET_PAYMENT_SUCCESS:
            return {
                ...state,
                price: payload,
                error:false,
                isLoading: false,
            }
        case types.GET_PAYMENT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error :true
            }
        default:
            return state;
    }
}