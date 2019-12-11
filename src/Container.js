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
        timestamp: "",
        inout: "in"
      },
      prevPunch: {
        code: "",
        timestamp: "",
        inout: "out"
      },
      code: {
        code: "",
        disabled: false
      },
      stamps: JSON.parse(localStorage.timestamps),
      codes: Array.from(JSON.parse(localStorage.codes)),
      show: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.addNewCode = this.addNewCode.bind(this);
  }

  //Add time code functions
  timestamps = JSON.parse(localStorage.timestamps);

  onChange = e => {
    if (this.timestamps.length > 0) {
      let prevPunch = {
        code: this.state.punch.code,
        timestamp: moment().format(),
        inout: "out"
      };
      this.timestamps.push(prevPunch);
    }
    this.setState({
      punch: {
        code: e.target.value,
        timestamp: moment().format(),
        inout: "in"
      }
    });
  };

  onSubmit = e => {
    e.preventDefault();

    if (this.state.punch.code !== "") {
      this.timestamps.push(this.state.punch);
      localStorage.setItem("timestamps", JSON.stringify(this.timestamps));
      this.setState({
        stamps: JSON.parse(localStorage.timestamps)
      });
      document.getElementById("addTimeStampForm").reset();
    } else {
      console.log("cant be blank");
    }
  };

  //clear Time Stamps function
  clearStamps = () => {
    this.timestamps = [];
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

  getNewCode = e => {
    this.setState({
      code: {
        code: e.target.value,
        disabled: false
      }
    });
  };

  addNewCode = e => {
    e.preventDefault();

    let codes = JSON.parse(localStorage.codes);
    if (this.state.code.code !== "") {
      codes.push(this.state.code);
      localStorage.setItem("codes", JSON.stringify(codes));
      this.setState({
        code: {
          code: "",
          disabled: false
        },
        show: !this.state.show,
        codes: Array.from(JSON.parse(localStorage.codes))
      });
    } else {
      console.log("cant be blank");
    }
  };

  render() {
    const { punch, stamps, show } = this.state;
    return (
      <div className="container-fluid">
        <Nav showModal={this.showModal} />
        {show ? (
          <CodeCreate
            code={this.state.code}
            showModal={this.showModal}
            getNewCode={this.getNewCode}
            addNewCode={this.addNewCode}
          />
        ) : (
          ""
        )}
        <Form
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          code={punch.code}
          timestamp={punch.timestamp}
          codes={this.state.codes}
        />
        <Log stamps={stamps} clearStamps={this.clearStamps} />
      </div>
    );
  }
}

export default Container;
