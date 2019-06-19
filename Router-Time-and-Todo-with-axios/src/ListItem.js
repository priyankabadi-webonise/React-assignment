import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddToDo from './AddToDo';
import DisplayToDo from './DisplayToDo';

class ListItem extends React.Component {
  id = 1;
  constructor(props) {
    super(props);
    this.state = {
      updateTodo : {},
      ToDoName : '',
      Update : false,
      ArrayToDo : [],
    }  
  }

  render() {
    return (
      <div className="App">
        <div className="App">
          <AddToDo 
            updateTodo={this.state.updateTodo}
            update={this.state.Update}
            idName={this.state.ToDoName}
            saveData={this.saveData}
            handleChange={this.handleChange}
            updateArray={this.updateArray}
          >
          </AddToDo>
        </div>
        <div className="App">
          <DisplayToDo 
            arraylist={this.state.ArrayToDo} 
            DeleteItem={this.DeleteItem}
            updateItem={this.updateItem}></DisplayToDo>
        </div>
      </div>
    );
  }

  saveData = () => {
    var item = {
      'id' : this.id ++, 'name' : this.state.ToDoName,
    }
    var newList = [...this.state.ArrayToDo,item];
    this.setState({ArrayToDo : newList,ToDoName : ''});
   // var newarray = this.state.ArrayToDo;
   // this.setState({ArrayToDo.push(item)});
  }
  
  handleChange = (event) => {
    this.setState({ToDoName : event.target.value});
  }

  DeleteItem = (todo) => {
    var filteredTodo = this.state.ArrayToDo.filter((item) => item.id !== todo.id);
    this.setState({ArrayToDo : filteredTodo, updateTodo : {}})
  }

  updateItem = (todo) => {
    this.setState({ToDoName : todo.name, Update : true, updateTodo : todo});
  }

  updateArray = () =>{
    var name = this.state.ToDoName; 
    var objIndex = this.state.ArrayToDo.findIndex((todo => todo.id == this.state.updateTodo.id));
    this.setState((prevstate) =>{
      prevstate.ArrayToDo[objIndex].name = name;
    })
    this.setState({Update : false,ToDoName : ''});
  }
}


export default ListItem;
