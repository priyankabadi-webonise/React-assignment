import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Clock } from './Clock';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name : "wellcome",
    }
  }
  changeName = (event) => {
    this.setState({name : event.target.value});
  }
  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.changeName} value={this.state.name}/>
        <p>Hello  {this.state.name}</p>
        <p>Displaying time :</p>
        <p><Clock></Clock></p>
      </div>
    );
  }
  
}

export default App;
