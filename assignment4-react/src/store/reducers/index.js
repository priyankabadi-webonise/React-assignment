import { combineReducers } from "redux";
import { shopReducer } from "./todoReducer";

export default combineReducers({
  cartList: shopReducer
});
