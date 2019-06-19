export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "LOADED_TODO":
      return [...action.payload];
    case "DELETE_TODO":
      return [...action.payload];
    case "UPDATE_TODO":
      return [...action.payload];
    default:
      return state;
  }
};
