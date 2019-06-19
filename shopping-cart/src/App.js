import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CartSave } from './CartSave.js'
import { ShowProduct } from './ShowProduct.js'
import item1 from './images/item1.jpg'
import item2 from './images/item2.jpg'
import item3 from './images/item3.jpg'
import { ShowCart } from './ShowCart';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      flag:true,
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
      cartList :[],

    }
  }
  render(){
    var classDis = this.state.flag ? <ShowProduct products={this.state.product}
    addItem={this.addItem}
    deleteItem={this.deleteItem}
    ></ShowProduct> : <ShowCart cartdata={this.state.cartList} products={this.state.product}/>;
  return (
    <div className="App">
      <CartSave items ={this.state.items}
      showCartData = {this.showCartData}></CartSave>
      {classDis}
      
    </div>
  );
  }

  addItem = (item) => {
    
    var arraylist = this.state.cartList;
    arraylist.push(item);
    this.setState({cartList : arraylist, items : arraylist.length});
  }
  deleteItem = (item) => {
    
    var arraylist = this.state.cartList;
    for( var i = arraylist.length-1;i >=0; i--) {
      if ( arraylist[i] === item) {
        arraylist.splice(i, 1);
        break;
      }
    }
    this.setState({cartList : arraylist , items : arraylist.length });
  }

  showCartData =()=>{
    var f = this.state.flag;
    this.setState({flag : !f});
  }
}

export default App;
