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
  deleteProductFromCartOnServer,
  LoadProductFromServer,
  addProductToCartOnServer
} from "./store/actions/todoAction";


class ShoppingCart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items : 0,
      product :[],
      cartList :[],
      total:0,

    }
  }
  componentDidMount(){
    this.props.getProducts();
    this.calculateQuantity();
    debugger;
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
  return (
    <div className="App">
      <div>{this.state.items}</div>
      <ShowProduct products={this.props.product}
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
  cartList: state.cartList,
  product:state.product
});

const mapDispatchToProps = dispatch => ({
addProduct : (name) => dispatch(addProductToCartOnServer(name)),
removeProduct : (name) => dispatch(deleteProductFromCartOnServer(name)),
getProducts : ()=>dispatch(LoadProductFromServer())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);
