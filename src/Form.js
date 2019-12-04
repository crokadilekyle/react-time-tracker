import React, { Component } from "react";
import Punch from "./Punch";

class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div className="form-group">
          <Punch onChange={this.props.onChange} />
          <button className="form-control" type="Submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
