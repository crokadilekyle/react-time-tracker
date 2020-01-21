import React, { Component } from "react";

export default class CodeCreate extends Component {
  render() {
    return (
      <div className="modal-bg">
        <div className="modal">
          <header>
            <h5>Add A Code</h5>
            <button type="button" onClick={this.props.showModal}>
              <span aria-hidden="true">&times;</span>
            </button>
          </header>
          <main>
            <form onSubmit={this.props.addNewCode}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <legend>
                  <h3>Add a New Code</h3>
                </legend>
                <span id="codeerror" style={{ minHeight: "24px" }} />
                <input
                  onChange={this.props.getNewCode}
                  type="text"
                  placeholder="Add a Project Code"
                  name="addcode"
                />
                <label htmlFor="addcode">
                  <small>Add a New Project Code</small>
                </label>
              </div>
              <div>
                <button type="submit">Create Time Code</button>
                <button onClick={this.props.showModal}>Close</button>
              </div>
            </form>
          </main>
        </div>
      </div>
    );
  }
}
