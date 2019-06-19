import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddToDo from './AddToDo';
import DisplayToDo from './DisplayToDo';
import { connect } from "react-redux";
import {
  saveTodoOnServer,
  loadTodoFromServer,
  deleteTodoFromServer,
  updateTodoOnServer
} from "./store/actions/todoAction";
import axios from "axios";

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
  componentDidMount() {
    this.props.loadTodos();
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
            arraylist={this.props.ArrayToDo} 
            DeleteItem={this.DeleteItem}
            updateItem={this.updateItem}></DisplayToDo>
        </div>
      </div>
    );
  }

  saveData = () => {
      var desc=this.state.ToDoName;
      this.props.addTodo(desc);
      this.setState({ToDoName : ''});
  }
  
  handleChange = (event) => {
    this.setState({ToDoName : event.target.value});
  }

  DeleteItem = (todo) => {
    this.props.deleteTodo(todo.id);
  }

  updateItem = (todo) => {
    this.setState({ToDoName : todo.desc, Update : true, updateTodo : todo});
  }

  updateArray = () =>{
    var name = this.state.ToDoName; 
    this.props.updateTodo(this.state.updateTodo.id,name);
    this.setState({ Update : false,ToDoName : ''});
    
  }
}

const mapStateToProps = state => ({
  ArrayToDo: state.ArrayToDo
});

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(saveTodoOnServer(text)),
  loadTodos: () => dispatch(loadTodoFromServer()),
  deleteTodo: id => dispatch(deleteTodoFromServer(id)),
  updateTodo: (id,desc) => dispatch(updateTodoOnServer(id,desc)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItem);

