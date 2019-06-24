import React from 'react';
import './App.css';
import { ShowProduct } from './ShowProduct.js'
import { connect } from "react-redux";
import {
  deleteProductFromCartOnServer,
  LoadProductFromServer,
  addProductToCartOnServer,
  loadCartListFromServer
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
    this.props.getcartList();
    this.calculateQuantity();
    debugger;
  }
  calculateQuantity=()=>{
    debugger;
    if(this.props.cartList !== null){
      var total=0;
      this.props.cartList.map((prod)=>{
        total += prod.quantity;
        debugger;
      })
      this.setState({items:total});
      debugger;
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
    var objectToAdd = this.props.product.find((prod)=> prod.item == item);
    this.props.addProduct(objectToAdd);
    this.calculateQuantity();
    
  }
  deleteItem = (item) => {
    var objectTodelete = this.props.product.find((prod)=> prod.item == item);
    this.props.removeProduct(objectTodelete);
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
getProducts : ()=>dispatch(LoadProductFromServer()),
getcartList : ()=>dispatch(loadCartListFromServer())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);
