import React from 'react';
import logo from './logo.svg';
import './App.css';
import { async } from 'q';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={city:'',country:''};
  }

  chageCity=(event)=>{
    this.setState({city: event.target.value});
  }

  chageCountry=(event)=>{
    this.setState({country: event.target.value});
  }

  getWeather=async()=>{
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&appid=65322a0d6184161cb1b3f1aa3e7b2e27`);
    let body = await api_call.json();
    this.setState({body});
    this.setState({
      wcity:body.name,
      weather: body.weather[0].description,
      humidity:body.main.humidity,
      pressure:body.main.pressure,
      temp:body.main.temp
    });
    debugger;
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
        <h1>Weather</h1>
       City: <input type="text" onChange={this.chageCity}/>
       Country:  <input type="text" onChange={this.chageCountry}/>
        <button onClick={this.getWeather}>Get Weather</button>
        <br/>City : {this.state.wcity}
        <br/>Weather : {this.state.weather}
        <br/>Temperature : {this.state.temp}
        <br/>humidity : {this.state.humidity}
        <br/>pressure : {this.state.pressure}
        </header>
     </div>
    );
  }

}

export default App;
