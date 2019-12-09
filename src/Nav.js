import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>Time Tracker</li>
          <li>
            <span onClick={this.props.showModal}>Add Code</span>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
