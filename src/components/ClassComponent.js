import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Good Afternoon",
      backgroundColor: "yellow",
    };
  }

  handleClick = () => {
    this.setState({
      message: "Welcome to React!",
      backgroundColor: "pink",
    });
  };

  render() {
    const { clgName, city, children, apply } = this.props;
    let applyStyle = apply ? "heading" : "";
    let inlineStyle = {
      color: "green",
      backgroundColor: this.state.backgroundColor, 
      fontSize: "50px",
      padding: "10px",
      borderRadius: "5px",
    };

    return (
      <div>
        <h1 className={`${applyStyle} font-style`}>
          Welcome to my React class {clgName} {city}
        </h1>
        {children}
        <h2 style={inlineStyle}>{this.state.message}</h2>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}
