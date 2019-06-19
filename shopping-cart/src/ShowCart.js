import React from 'react';

export class ShowCart extends React.Component{
  constructor(props){
    super(props);
    this.state={
      a:[],
      b:[],
      c:[],
      result:false,
    }
  }
  componentDidMount(){
    var  prev;
      this.props.cartdata.sort();
      for ( let i = 0; i < this.props.cartdata.length; i++ ) {
          if ( this.props.cartdata[i] !== prev ) {
              this.state.a.push(this.props.cartdata[i]);
              this.state.b.push(1);
          } else {
              this.state.b[this.state.b.length-1]++;
          }
          prev = this.props.cartdata[i];
      }

      this.state.a.map(name =>{
        var objIndex = this.props.products.findIndex((todo => todo.item == name));
        this.state.c.push(this.props.products[objIndex].price);
      })
      this.setState({result : true});
  }
  render(){
    return (
      <div className="App">
        {this.state.result ? this.printAmount() : 'nothing'}
      </div>
    );
  } 
  printAmount=()=>{
    var a=" ";
    for(let i=0;i< this.state.a.length;i++){
      a=a+this.state.a[i]+': '+this.state.b[i]+' X'+this.state.c[i]+'Rs'+' = '+(this.state.b[i] * this.state.c[i]);
    }

    return a;
  }
}