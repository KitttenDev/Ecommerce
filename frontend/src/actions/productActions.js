import axios from "axios";
import { 
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS, 
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_FAIL,
    PRODUCT_ADD_REQUEST,
    PRODUCT_ADD_SUCCESS,
    PRODUCT_ADD_FAIL,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_FAIL,
    PRODUCT_ADD_REVIEW_REQUEST,
    PRODUCT_ADD_REVIEW_SUCCESS,
    PRODUCT_ADD_REVIEW_FAIL,
    PRODUCT_TOP_RATED_REQUEST,
    PRODUCT_TOP_RATED_SUCCESS,
    PRODUCT_TOP_RATED_FAIL,
    PRODUCT_BY_TIME_REQUEST,
    PRODUCT_BY_TIME_SUCCESS,
    PRODUCT_BY_TIME_FAIL
} from "../Constants/productConstants";

export const listProducts = (keyword = "") => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST });

        const { data } = await axios.get(`/api/products?keyword=${keyword}`);
        
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message ? 
            error.response.data.message : 
            error.message
        })
    }
}

export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST });

        const { data } = await axios.get(`/api/products/${id}`);
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? 
            error.response.data.message : 
            error.message
        })
    }
}


export const deleteProduct  = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_DELETE_REQUEST,
        })

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        await axios.delete(`/api/products/${id}`, config);

        dispatch({type: PRODUCT_DELETE_SUCCESS});
        
    } catch (error) {
        dispatch({
            type: PRODUCT_DELETE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const addProduct  = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_ADD_REQUEST,
        })

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } =  await axios.post(`/api/products`, {}, config);

        dispatch({
            type: PRODUCT_ADD_SUCCESS,
            payload: data
        });
        
    } catch (error) {
        dispatch({
            type: PRODUCT_ADD_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const updateProduct  = (product) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_UPDATE_REQUEST,
        })

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } =  await axios.put(`/api/products/${product._id}`, product, config);

        dispatch({
            type: PRODUCT_UPDATE_SUCCESS,
            payload: data
        });
        
    } catch (error) {
        dispatch({
            type: PRODUCT_UPDATE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const addReviewToProduct  = (productId, review) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_ADD_REVIEW_REQUEST,
        })

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        await axios.post(`/api/products/${productId}/reviews`, review, config);

        dispatch({
            type: PRODUCT_ADD_REVIEW_SUCCESS,
        });
        
    } catch (error) {
        dispatch({
            type: PRODUCT_ADD_REVIEW_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


export const listtTopRatedProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_TOP_RATED_REQUEST });

        const { data } = await axios.get(`/api/products/top`);
        
        dispatch({
            type: PRODUCT_TOP_RATED_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_TOP_RATED_FAIL,
            payload: error.response && error.response.data.message ? 
            error.response.data.message : 
            error.message
        })
    }
}

export const listProductsByTime = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_BY_TIME_REQUEST });

        const { data } = await axios.get(`/api/products/bytime`);
        
        dispatch({
            type: PRODUCT_BY_TIME_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_BY_TIME_FAIL,
            payload: error.response && error.response.data.message ? 
            error.response.data.message : 
            error.message
        })
    }
}