import React from 'react'
export class View2 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      date : new Date(),
    }
  }
  componentWillMount() {
    this.timmer = setInterval(() => this.tick(),1000);
  }

  componentDidMount() {
    setTimeout(() => clearInterval(this.timmer),60000);
  }

  tick = () => {
    this.setState({date : new Date()});
  }

  render() {
    return (
      <div className="App">View B : 
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}