import fakeStoreApi from '../../apis/fakeStoreApi';
import { ActionTypes } from "../constants/action-types"

export const fetchProducts = () => {
    //middleware
    return async(dispatch) => {
        const response = await fakeStoreApi.get('/products');
        dispatch({
            type: ActionTypes.FETCH_PRODUCTS,
            payload: response.data
        })
    }
}

export const fetchProduct = (id) => {
    //middleware
    return async(dispatch) => {
        const response = await fakeStoreApi.get(`/products/${id}`);
        dispatch({
            type: ActionTypes.SELECTED_PRODUCT,
            payload: response.data
        })
    }
}


export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    }
}


export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}