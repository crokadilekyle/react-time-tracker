import React, { Component } from "react";
import moment from "moment";

import Form from "./Form";
import Log from "./Log";
import Nav from "./Nav";
import CodeCreate from "./CodeCreate";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      punch: {
        code: "",
        timestamp: ""
      },
      stamps: JSON.parse(localStorage.timestamps),
      show: false
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  //Add time code functions
  onChange = e => {
    this.setState({
      punch: {
        code: e.target.value,
        timestamp: moment().format()
      }
    });
  };

  onSubmit = e => {
    e.preventDefault();

    let timestamps = JSON.parse(localStorage.timestamps);
    if (this.state.punch.code !== "") {
      timestamps.push(this.state.punch);
      localStorage.setItem("timestamps", JSON.stringify(timestamps));
      this.setState({
        punch: {
          code: "",
          timestamp: ""
        },
        stamps: JSON.parse(localStorage.timestamps)
      });
    } else {
      console.log("cant be blank");
    }
  };

  //clear Time Stamps function
  clearStamps = () => {
    this.setState({
      stamps: []
    });
    localStorage.setItem("timestamps", JSON.stringify([]));
  };

  //Add Code Functions
  showModal = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    const { punch, stamps, show } = this.state;
    return (
      <div className="container-fluid">
        <Nav showModal={this.showModal} />
        {show ? <CodeCreate showModal={this.showModal} /> : ""}
        <Form
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          code={punch.code}
          timestamp={punch.timestamp}
        />
        <Log stamps={stamps} clearStamps={this.clearStamps} />
      </div>
    );
  }
}

export default Container;
