import React, { Component } from 'react'; 

class Box extends Component {
  render() {
    var boxStyle = {
        color: this.props.color,
        fontSize: "20"
      };
    return (
      <p style={boxStyle}>The property passed to me is: {this.props.color}. and i used it to color this line. </p> 
    );
  }
}

export default Box;
