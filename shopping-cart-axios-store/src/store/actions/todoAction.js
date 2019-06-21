import axios from "axios";

export const addProd = name => ({
  type: "ADD_TO_CART",
  payload: name
});

export const deleteProd = name => ({
  type: "DELETE_FROM_CART",
  payload: name
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
      data:{item:item}
    })
      .then(response => {
        let item = response.data;
        dispatch(addProd(item.item));
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
      data:{item:item}
    })
      .then(response => {
        let item = response.data;
        dispatch(deleteProd(item.item));
      })
      .catch(e => console.log("error", e));
  };
};









