import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Clock from './Clock.js'
import ListItem from './ListItem.js'

class App extends React.Component{
  constructor(props) {
    super(props);

  }
  render(){
  return (
    <div className="App">
    <Router>
     <div>
       <li>
         <Link to="/">Clock</Link>
       </li>
       <li>
         <Link to="/ListItem">ListItem</Link>
       </li>
     </div>
     <hr/>
    
       <Route exact path="/" component={Clock}></Route>
       <Route exact path="/ListItem" component={ListItem}></Route>
     </Router>
    </div>
  );
  }
}

export default App;
