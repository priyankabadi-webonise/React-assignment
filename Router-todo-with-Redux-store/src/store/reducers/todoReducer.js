export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "LOADED_TODO":
      return [...action.payload];
    case "DELETE_TODO":
      return state.filter((todo)=> todo.id!=action.payload.id);
    case "UPDATE_TODO":
      debugger
      return state.map((todo)=>{
        if(todo.id === action.payload.id){
          todo.desc=action.payload.desc;
          return todo;
        }
        return todo;
      })
    default:
      return state;
  }
};
