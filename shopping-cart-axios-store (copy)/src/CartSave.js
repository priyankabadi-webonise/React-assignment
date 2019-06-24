import React from 'react';
import { ShowCart } from './ShowCart.js'
import { Link } from 'react-router-dom'
export class CartSave extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="App">
        <button onClick={()=>this.props.showCartData()}>Cart : {this.props.items}</button>
      </div>
    );
    }
}