import React, { Component } from 'react'; 

class CaseyProps extends Component {
  render() {
    var caseyPropsStyle = {
        color: this.props.color,
        fontSize: "20"
      };
    return (
      <p style={caseyPropsStyle}>The property passed to me is: {this.props.color}. and i used it to color this line. </p> 
    );
  }
}

export default CaseyProps;
