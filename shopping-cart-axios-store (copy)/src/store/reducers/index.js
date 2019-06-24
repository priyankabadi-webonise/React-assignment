import { combineReducers } from "redux";
import { shopReducer, productReducer } from "./todoReducer";

export default combineReducers({
  cartList: shopReducer,
  product: productReducer
});

