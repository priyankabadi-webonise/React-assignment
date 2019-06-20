import React from 'react'
export class View1 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      date : new Date(),
    }
  }
  componentDidMount() {
    this.timmer = setInterval(() => this.tick(),1000);
    if(this.props.stopAt) {
     setTimeout(() => this.stoptick(),5000);
    }
  }
  stoptick = () => {
    debugger
    clearInterval(this.timmer);
  }
  tick = () => {
    this.setState({date : new Date()});
  }

  render() {
    const showdate = this.props.stopAt;
    return (
      <div className="App">
        {showdate ? 'showing date and time to stop : ': 'only time : '}
        {showdate ? this.state.date.toString(): this.state.date.toTimeString()}
      </div>
    );
  }
}