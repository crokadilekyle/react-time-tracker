import React, { Component } from "react";
import moment from "moment";

import Form from "./Form";
import Log from "./Log";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      timestamp: "",
      stamps: JSON.parse(localStorage.timestamps)
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = e => {
    this.setState({
      code: e.target.value,
      timestamp: moment().format()
    });
  };

  onSubmit = e => {
    e.preventDefault();
    let timestamps = JSON.parse(localStorage.timestamps);
    timestamps.push(this.state);
    localStorage.setItem("timestamps", JSON.stringify(timestamps));
    this.setState({
      code: "",
      timestamp: "",
      stamps: JSON.parse(localStorage.timestamps)
    });
  };

  render() {
    const { code, timestamp, stamps } = this.state;
    return (
      <div className="container">
        <h1>Time Tracker</h1>
        <Form
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          code={code}
          timestamp={timestamp}
        />
        <Log stamps={stamps} />
      </div>
    );
  }
}

export default Container;
