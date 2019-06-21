import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      str : '',
    };
  }
  callFunction = () => {
    var stre = this.parseStringToken(this.state.str);
    debugger;
    this.setState({str : stre});
    debugger;
  }

  handleChange=(value)=>{
    value=this.state.str+value;
    this.setState({str:value});
  }
  clearText(){
    this.setState({str: ""});
  }
  render(){
    return (
     <div className="App">
       <input type="text" value={this.state.str}/><br/>
        <button name="(" onClick={e=> this.handleChange(e.target.name)}>(</button>
        <button onClick={()=> this.clearText()}>CE</button>
        <button name=")" onClick={e=> this.handleChange(e.target.name)}>)</button>
        <button onClick={()=> this.clearText()}>C</button><br/>
        <button name="1" onClick={e=> this.handleChange(e.target.name)}>1</button>
        <button name="2" onClick={e=> this.handleChange(e.target.name)}>2</button>
        <button name="3" onClick={e=> this.handleChange(e.target.name)}>3</button>
        <button name="+" onClick={e=> this.handleChange(e.target.name)}>+</button><br/>
        <button name="4" onClick={e=> this.handleChange(e.target.name)}>4</button>
        <button name="5" onClick={e=> this.handleChange(e.target.name)}>5</button>
        <button name="6" onClick={e=> this.handleChange(e.target.name)}>6</button>
        <button name="-" onClick={e=> this.handleChange(e.target.name)}>-</button><br/>
        <button name="7" onClick={e=> this.handleChange(e.target.name)}>7</button>
        <button name="8" onClick={e=> this.handleChange(e.target.name)}>8</button>
        <button name="9" onClick={e=> this.handleChange(e.target.name)}>9</button>
        <button name="x" onClick={e=> this.handleChange(e.target.name)}>x</button><br/>
        <button name="." onClick={e=> this.handleChange(e.target.name)}>.</button>
        <button name="0" onClick={e=> this.handleChange(e.target.name)}>0</button>
        <button onClick={()=>this.callFunction()}>=</button>
        <button name="÷" onClick={e=> this.handleChange(e.target.name)}>÷</button><br/>
        {this.state.str}
        
      </div>
    );
  }

  precedence=(operator)=>{
    if(operator == '+' || operator == '-')
      return 1;
    if(operator == 'x' || operator == '/')
      return 2;
    return 0;
  }

  doCalculation=(op1,op2,operator)=>{
    debugger;
    switch(operator){
      case '+': return parseFloat(op1, 10)+parseFloat(op2,10);
      case '-': return op1-op2;
      case 'x': return op1*op2;
      case '÷': return op2/op1;
    }
  }

  parseStringToken=(tokens)=>{
    var arrayOperator = [];
    var arrayValues = [];
    if(tokens != undefined){
      for(let i=0; i<tokens.length; i++){
        debugger;
        if(tokens[i] === ' '){
          debugger;
          continue;
        }else if(tokens[i] == '('){
          debugger;
          arrayOperator.push(tokens[i]);
        }else if(!isNaN(tokens[i])){
          var num=tokens[i];
          while(!isNaN(tokens[i+1]) || tokens[i+1] == '.'){
            debugger;
            i=i+1;
            if(!isNaN(tokens[i])){
              debugger;
              if(tokens[i-1] == '.'){
                num=num+tokens[i];
              }
              else
                num=(num*10)+parseInt(tokens[i],10);
            }else{
              debugger;
              num=num+'.';
            }  
          }
          debugger;
          arrayValues.push(num);
        }else if(tokens[i] == ')'){
          debugger;
          while(arrayOperator.length!= 0 && arrayOperator[arrayOperator.length-1] !='('){
            let num1 = arrayValues[arrayValues.length-1];
            arrayValues.pop();

            let num2 = arrayValues[arrayValues.length-1];
            arrayValues.pop();

            let operator = arrayOperator[arrayOperator.length-1];
            arrayOperator.pop();

            arrayValues.push(this.doCalculation(num1,num2,operator));
          }
          arrayOperator.pop();
        }else{
          debugger;
          while(arrayOperator.length!=0 && this.precedence(arrayOperator[arrayOperator.length-1]) >= this.precedence(tokens[i])){
            let num1 = arrayValues[arrayValues.length-1];
            arrayValues.pop();

            let num2 = arrayValues[arrayValues.length-1];
            arrayValues.pop();

            let operator = arrayOperator[arrayOperator.length-1];
            arrayOperator.pop();

            arrayValues.push(this.doCalculation(num1,num2,operator));
          }
          debugger;
          arrayOperator.push(tokens[i]);
        }
      }
      debugger;
      while(arrayOperator.length != 0){
        let num1 = arrayValues[arrayValues.length-1];
            arrayValues.pop();

            let num2 = arrayValues[arrayValues.length-1];
            arrayValues.pop();

            let operator = arrayOperator[arrayOperator.length-1];
            arrayOperator.pop();

            arrayValues.push(this.doCalculation(num1,num2,operator));
      }
      debugger;
      if(arrayValues[arrayValues.length-1] != undefined)
        return arrayValues[arrayValues.length-1];
      else
        return '';
    }
    return '';
  }
  
}

export default App;
