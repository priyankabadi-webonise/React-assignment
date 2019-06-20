import React from 'react';

class DisplayToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
   // var data = this.props.Update ? updateData(this.props.Id,this.state.textValue) : saveData(this.state.textValue);
    return (
      <div className="App">
        <table>
         {this.printTable()}
        </table>
      </div>
    );
  }
   printTable = () => {
    return this.props.arraylist.map((item,index) => {
      const { id, desc } = item //destructuring
      return (
         <tr>
            <td>{id}</td>
            <td>{desc}</td>
            <td><button key="edit" onClick={()=> this.props.updateItem(item)}>Edit</button></td>
            <td><button key ="delete" onClick={()=> this.props.DeleteItem(item)}>Delete</button></td>
          </tr>
      )
   })
   }

}
export default DisplayToDo;

