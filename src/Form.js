import React, { Component } from "react";
import Punch from "./Punch";

class Form extends Component {
  render() {
    return (
      <form className="border p-2 mt-3" onSubmit={this.props.onSubmit}>
        <legend>Choose a Code</legend>
        <div className="form-group">
          <Punch onChange={this.props.onChange} />
          <button className="form-control btn btn-primary" type="Submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
