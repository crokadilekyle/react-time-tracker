import React, { Component } from "react";
import Punch from "./Punch";

class Form extends Component {
  render() {
    return (
      <form className="border p-2 mt-3" onSubmit={this.props.onSubmit}>
        <fieldset>
          <legend>
            <h3>Choose a Code</h3>
          </legend>
          <Punch onChange={this.props.onChange} />
          <button type="Submit">Submit</button>
        </fieldset>
      </form>
    );
  }
}

export default Form;
