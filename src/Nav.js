import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <nav className="bg-primary container-fluid">
        <ul className="nav justify-content-end">
          <li className="navbar-brand mr-auto text-light">Time Tracker</li>
          <li className="nav-item">
            <button
              onClick={this.props.showModal}
              className="nav-link btn btn-secondary"
            >
              Add Code
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
