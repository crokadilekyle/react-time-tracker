import React, { Component } from "react";

class Punch extends Component {
  state = {
    codes: Array.from(JSON.parse(localStorage.codes))
  };
  render() {
    return (
      <select className="form-control" onChange={this.props.onChange}>
        <option default>Choose a code</option>
        {this.state.codes.map((code, i) => {
          return <option key={i}>{code.code}</option>;
        })}
      </select>
    );
  }
}

export default Punch;
