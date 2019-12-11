import React, { Component } from "react";

class Punch extends Component {
  render() {
    return (
      <select id="select" onChange={this.props.onChange}>
        <option value="" default>
          Choose a code
        </option>
        {this.props.codes.map((code, i) => {
          return <option key={i}>{code.code}</option>;
        })}
      </select>
    );
  }
}

export default Punch;
