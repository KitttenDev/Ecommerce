import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer, productDetailsReducer, productDeleteReducer, productAddReducer, productUpdateReducer, productAddReviewReducer, productTopRatedReducer, productByTimeReducer } from "./Reducers/productReducers";
import { cartReducer } from "./Reducers/cartReducer";
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer, userListReducer, userDeleteReducer, userUpdateReducer } from "./Reducers/userReducers";
import { orderCreateReducer, orderDetailsReducer, orderPayReducer, listMyOrdersReducer, listOrdersReducerAdmin } from "./Reducers/orderReducers";

const reducer = combineReducers({
    productList: productReducer,
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    productAdd: productAddReducer,
    productUpdate: productUpdateReducer,
    productAddReview: productAddReviewReducer,
    productTopRated: productTopRatedReducer,
    productByTime: productByTimeReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,    
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderDeliver: orderDetailsReducer,
    listMyorders: listMyOrdersReducer,
    listOrdersAdmin: listOrdersReducerAdmin
});

const cartItemsFromStorage = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
const userInfoFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null
const shippingAddressFromStorage = localStorage.getItem("shippingAddress") ? JSON.parse(localStorage.getItem("shippingAddress")) : {}

const initialState = {
    cart: { cartItems: cartItemsFromStorage, shippingAddress: shippingAddressFromStorage },
    userLogin: { userInfo: userInfoFromStorage }
};

const middleWare = [thunk];

const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleWare))
);


export default store;