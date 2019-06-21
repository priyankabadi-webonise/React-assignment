import React from 'react';
import { connect } from "react-redux";
import { emptyCart } from "./store/actions/todoAction";

class ShowCart extends React.Component{
  constructor(props){
    super(props);
    this.state={
      total:0
    }
  }
  componentDidMount(){
    if(this.props.cartList !=null){
      var tot=0;
      this.props.cartList.map(total=>{
        tot += total.Total;
      })
      this.setState({total:tot});
    }
  }
  render(){
    return (
      <div className="App">
        {this.cartDisplay()}
        <div>Total amount to pay :{this.state.total}</div>
        <div><button onClick={()=>this.clearDisplay()}>Pay Now </button></div>
      </div>

    );
  } 
  clearDisplay=()=>{
    this.props.billpay();
    this.setState({total: 0});
  }
  cartDisplay = () => {
    if(this.props.cartList !== null){
      return this.props.cartList.map((prod,index) => {
        
       const { item, discription, price, img, quantity, Total } = prod //destructuring
        return (
          <div>
            <span>item : {item}</span>
            <span>    quantity : {quantity}</span>
            <span>    price : {quantity} X {price}</span>
            <span>    total : {Total}</span>
          </div>
        )
      })
    }
  }

}


const mapStateToProps = state => ({
  cartList: state.cartList
});

const mapDispatchToProps = dispatch => ({
  billpay: () => dispatch(emptyCart())
  });
export default connect(mapStateToProps, mapDispatchToProps)(ShowCart);