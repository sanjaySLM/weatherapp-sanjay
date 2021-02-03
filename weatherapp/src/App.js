import "./App.css";
import React from "react";
import Child from "./Child";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      place: "",
      result: "none",
      weatherLocation: {},
      weatherCurrent: {},
      weatherCondition:"",
    };
  }
  place=(u)=>{
    this.setState({
place:u.target.value
    })
  }

  value = () => {
    this.fetchData();
};
 
  fetchData = () => {
    fetch(
      "https://weatherapi-com.p.rapidapi.com/forecast.json?q=" +
        this.state.place +
        "&days=3",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "44fb08b279msh78d8e08afb5f5e2p1c6ef1jsn4381c390f806",
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        },
      }
    )
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log("state value is changed")
        this.setState({
          weatherLocation: data.location,
          weatherCurrent: data.current,
          weatherCondition:data.current.condition.text,
          weatherIcon:data.current.condition.icon,
          result:"display"


        });
      })
      .catch((error) => {
        console.log(error, "catch the hoop");
      });
  };

  render() {
    return (
        <div id="main">
      <div className="app">
        <h1>Weather Report</h1>
        <input type="text" id="city" onChange={this.place} placeholder="Enter City"></input>
        <br></br>
        <button onClick={this.value}> search</button>
        </div>
        <div>
        {this.state.result === "display" && (
          <Child
          //from object location
            passName={this.state.weatherLocation.name}
            passRegion={this.state.weatherLocation.region}
            passCountry={this.state.weatherLocation.country}
            passTime={this.state.weatherLocation.localtime}
            //from object current
            passDegreec={this.state.weatherCurrent.temp_c}
            passDegreef={this.state.weatherCurrent.temp_f}
            passText={this.state.weatherCondition}
            // passIcon={this.state.}
          ></Child>
        )}
      </div>
      </div>
    );
  }
}
export default App;