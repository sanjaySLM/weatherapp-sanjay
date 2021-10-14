import React from 'react';
import "./App.css";


class Child extends React.Component{
render(){
    return(
        <div className="child">
            <div className="child1">
                <span id="location">{this.props.passName}</span>,
                <span id="region">{this.props.passRegion}</span><br/>
                <span id="country">{this.props.passCountry}</span><br/>
                <span id="time">{this.props.passTime}</span>
            </div>
            <div className="child2">
            <span id="celcius"> {this.props.passDegreec} &#8451; </span><br/>
            <span id="faren"> {this.props.passDegreef} &#x2109;</span><br/>
            <span id="time">{this.props.passText}</span><br></br>
            </div>

           
        </div>
    )
}
}
export default Child 
