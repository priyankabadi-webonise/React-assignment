import React from 'react';

export class Clock extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        date : new Date(),
      }
    }

    componentWillMount() {
      this.timmer = setInterval(() => this.tick(),1000);
    }

    tick = () => {
      this.setState({date : new Date()});
    }

    render() {
      return (
        <div className="App">
          {this.state.date.toLocaleString()}
        </div>
      );
    }
}