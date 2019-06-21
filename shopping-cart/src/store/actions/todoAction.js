

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









