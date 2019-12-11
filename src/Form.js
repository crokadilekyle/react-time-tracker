import React, { Component } from "react";
import Punch from "./Punch";

class Form extends Component {
  render() {
    return (
      <form id="addTimeStampForm" onSubmit={this.props.onSubmit}>
        <fieldset>
          <legend>
            <h3>Choose a Code</h3>
          </legend>
          <Punch onChange={this.props.onChange} codes={this.props.codes} />
          <button type="Submit">Submit</button>
        </fieldset>
      </form>
    );
  }
}

export default Form;
