import product from './../../product.json';
import { Z_FILTERED } from 'zlib';
export const shopReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if(state == null){
        state=[];
      }
      var getItemToAdd = action.payload;
      var checkItemExists = state.find((prod)=> prod.item==getItemToAdd.item);
      if(checkItemExists){
        return state.map((prod)=>{
          if(prod.item === getItemToAdd.item){
            prod.quantity += 1;
            prod.Total += prod.price;
            return prod;
          }
          return prod;
        })
      }else{
      getItemToAdd.quantity = 1;
      getItemToAdd.Total = getItemToAdd.price;
      
      return [...state,getItemToAdd];
      }
    case "DELETE_FROM_CART":
      var getItemTodel = action.payload;
      checkItemExists = state.find((prod)=> prod.item==getItemTodel.item);
      if(checkItemExists){
        if(checkItemExists.quantity === 1){
          return state.filter((prod) => prod.item != getItemTodel.item);
        }else{
          return state.map((prod)=>{
            if(prod.item === getItemTodel.item){
              prod.quantity -= 1;
              prod.Total -= prod.price;
              return prod;
            }
            return prod;
          });
        }
        
      }
      return state;
    case "EMPTY_CART":
      return action.payload;

    case "GET_CARTLIST":
      debugger;
      return action.payload;

    default:
      return state;
  }
};

export const productReducer = (state = [], action) =>{
  switch(action.type){
    case "GET_PRODUCTS":
      debugger;
      return action.payload;
      default:
        return state;
  }
}
