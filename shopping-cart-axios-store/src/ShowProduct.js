import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
export class ShowProduct extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="App">
        {this.productDisplay()}
      </div>
    );
  }

  productDisplay = () => {
    debugger;
    return this.props.products.map((prod,index) => {
      const { item, discription, price, img } = prod //destructuring
      return (
        <div>
        <div className="card" key={item}>
          <div className="card-image">
            <img src={img} alt={item}/>
            <span className="card-title">{item}</span>   
          </div>
          <div className="card-content">
            <p>Discription : {discription}</p>
            <p><b>Price : {price} Rs</b></p>
          </div>
          <div>
            <button key="add" onClick={() => this.props.addItem(item)}>+</button>
            <button key="minus" onClick={() => this.props.deleteItem(item)}>-</button>
          </div>
        </div>
        </div>
      )
   })
  }

}