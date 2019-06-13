import React from 'react';

class AddToDo extends React.Component {
  constructor(props) {
    super(props);
   // this.saveData=this.saveData.bind(this);Cannot read property 'bind' of undefined
    this.state = {
      textValue : ' ',
    }
  }

  render() {
    let lable = this.props.update === false ? 'Add' :'Update';
    let functionToCall = this.props.update === false ? this.callsaveData :this.props.updateArray; 
    return (
      <div className="App">
          <input type="text" onChange={this.props.handleChange} value={this.props.idName}/>
          <input type="button" onClick={functionToCall} value={lable}/>
      </div>
    );
  }

  callsaveData = () => {
    this.props.saveData(this.state.textValue);
  }

  
}
export default AddToDo;
