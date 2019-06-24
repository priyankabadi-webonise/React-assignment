import axios from "axios";

export const addProd = prod => ({
  type: "ADD_TO_CART",
  payload: prod
});

export const deleteProd = item => ({
  type: "DELETE_FROM_CART",
  payload: item
});
export const emptyCart = () =>({
  type: "EMPTY_CART",
  payload: null
})

export const getProduct = products=>({
  type : "GET_PRODUCTS",
  payload : products
})
export const LoadProductFromServer = () => {
  debugger;
  return dispatch => {
    return axios({
      method: "get",
      url: "http://localhost:5000/products"
    })
      .then(response => {
        let products = response.data;
        dispatch(getProduct(products));
      })
      .catch(e => console.log("error", e));
  };
};

export const addProductToCartOnServer = (item) => {
  debugger;
  return dispatch => {
    return axios({
      method: "post",
      url: "http://localhost:5000/cartList",
      data:item
    })
      .then(response => {
        let item = response.data;
        dispatch(addProd(item));
      })
      .catch(e => console.log("error", e));
  };
};

export const deleteProductFromCartOnServer = (item) => {
  debugger;
  return dispatch => {
    return axios({
      method: "post",
      url: "http://localhost:5000/cartListDelete",
      data:item
    })
      .then(response => {
        let item = response.data;
        dispatch(deleteProd(item));
      })
      .catch(e => console.log("error", e));
  };
};
export const getCartList = cartList=>({
  type : "GET_CARTLIST",
  payload : cartList
})
export const loadCartListFromServer = () => {
  debugger;
  return dispatch => {
    return axios({
      method: "get",
      url: "http://localhost:5000/getcartlist"
    })
      .then(response => {
        debugger;
        let cartlist = response.data;
        dispatch(getCartList(cartlist));
      })
      .catch(e => console.log("error", e));
  };
};
export const emptyCartFromServer = () => {
  debugger;
  return dispatch => {
    return axios({
      method: "post",
      url: "http://localhost:5000/emptycartlist"
    })
      .then(response => {
        debugger;
        let cartlist = response.data;
        dispatch(emptyCart(cartlist));
      })
      .catch(e => console.log("error", e));
  };
};







