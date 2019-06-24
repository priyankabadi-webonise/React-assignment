import { todoReducer } from './todoReducer';

describe('todoreducer...',()=>{
  var action1={
    type: "DELETE_TODO",
    payload: {id : 1}
  }
  var store =[{id:1, desc:'hello'},{id:2,desc:'hello'}];
  var expected=[{id:1, desc:'hello'}];
  it('DELETE_TODO should delete todo',()=>{
    expect(todoReducer(store,action1)).toEqual(expected);
  })
})