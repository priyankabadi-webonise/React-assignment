import React from 'react';
import logo from './logo.svg';
import './App.css';
import { View1 } from './View1';

var ReactDOM = require('react-dom');

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkBox : true,
    }
  }

  changeflag = (event) => {
    this.setState({checkBox : !this.state.checkBox});
  } 
/*
  componentWillUpdate(nextProps,nextState) {
    if(nextState.checkBox === true) {
      ReactDOM.render(<View2/>,document.getElementById("mount-here") );
    } else {    
      ReactDOM.render(<View1/>,document.getElementById("mount-here") ); 
    }
  }*/

  render() {
    const classSelect =
      this.state.checkBox ? <View1 stopAt={1} key="1"></View1> : <View1 key="2"/>;
    return (
      <div className="App">
        <input type="checkbox" onChange={this.changeflag} checked={this.state.checkBox}/>
        <p>Displaying time :</p>
        <div id="mount-here">{classSelect}</div>
      </div>
    );
  }
  
}
export default Clock;
