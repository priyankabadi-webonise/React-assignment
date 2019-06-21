import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CartSave } from './CartSave.js'
import { ShowProduct } from './ShowProduct.js'
import item1 from './images/item1.jpg'
import item2 from './images/item2.jpg'
import item3 from './images/item3.jpg'
import product from './product.json';
import { connect } from "react-redux";
import {
  addProd,
  deleteProd
} from "./store/actions/todoAction";


class ShoppingCart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items : 0,
      product :[
        {
          item : 'gray tabby',
          discription :'The name gray tabby describes not a breed but a coat color and pattern. The sporty looks of the gray tabby are peerless. ',
          price : 2000,
          img : item1,
        },
        {
          item : 'Persian',
          discription :' known for the pushed-in Pekingese nose that many are bred for, arguably the best part of these cats is their pettability. All that fur needs a lot of daily grooming, ',
          price : 5000,
          img : item2,
        },
        {
          item : 'Norwegian Forest Cat',
          discription :'A big cat with big paws and lots of fur, the Norwegian is like a Maine Coon cat’s Viking cousin.',
          price : 3000,
          img : item3,
        },
      ],
      cartList :[{
        item : 'Norwegian Forest Cat',
        discription :'A big cat with big paws and lots of fur, the Norwegian is like a Maine Coon cat’s Viking cousin.',
        price : 3000,
        img : item3,
      }],
      total:0,

    }
  }
  componentDidMount(){
    this.calculateQuantity();
  }
  calculateQuantity=()=>{
    if(this.props.cartList !== null){
      var total=0;
      this.props.cartList.map((prod)=>{
        total +=prod.quantity;
      })
      this.setState({items:total});
    }
  }
  render(){
   /* var classDis = this.state.flag ? <ShowProduct products={this.state.product}
    addItem={this.addItem}
    deleteItem={this.deleteItem}
    ></ShowProduct> : <ShowCart cartdata={this.state.cartList} products={this.state.product}/>;*/
  return (
    <div className="App">
      <div>{this.state.items}</div>
      <ShowProduct products={this.state.product}
      addItem={this.addItem}
     deleteItem={this.deleteItem}
      ></ShowProduct>
    </div>
  );
  }

  addItem = (item) => {
    this.props.addProduct(item);
    this.calculateQuantity();
    
  }
  deleteItem = (item) => {
    this.props.removeProduct(item);
    this.calculateQuantity();
   
  }

  showCartData =()=>{
    var f = this.state.flag;
    this.setState({flag : !f});
  }
}
const mapStateToProps = state => ({
  cartList: state.cartList
});

const mapDispatchToProps = dispatch => ({
addProduct : (name) => dispatch(addProd(name)),
removeProduct : (name) => dispatch(deleteProd(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);
