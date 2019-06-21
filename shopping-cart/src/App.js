import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import ShoppingCart from './ShoppingCart';
import ShowCart from './ShowCart';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
   
  return (
    <div className="App"> 
    <Router>
      <div>
      <Link to="/">Home</Link>
      <Link to="/cartList">Check Out</Link>
      </div>
      <hr />
      <Route path="/" exact component={ShoppingCart}/>
      <Route path="/cartList" component={ShowCart}/>
    </Router>
    </div>
  );
  }
}

export default App;
