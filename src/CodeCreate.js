import React, { Component } from "react";

export default class CodeCreate extends Component {
  render() {
    return (
      <div className="modal-bg">
        <div className="modal">
          <header>
            <h5 className="modal-title">Add A Code</h5>
            <button type="button" onClick={this.props.showModal}>
              <span aria-hidden="true">&times;</span>
            </button>
          </header>
          <main className="modal-body">
            <form>
              <div className="form-group border rounded p-4">
                <label for="addcode">
                  <h3>Add Code</h3>
                </label>
                <span
                  id="codeerror"
                  className="d-block text-danger alert"
                  style={{ minHeight: "24px" }}
                />
                <input
                  className="form-control m-auto"
                  type="text"
                  id="addcode"
                  placeholder="Add a Project Code"
                  aria-describedby="addcodehelp"
                />
                <small id="addcodehelp" className="form-text text-muted">
                  Add a Project Code
                </small>
              </div>
            </form>
          </main>
          <div className="modal-footer">
            <button type="button" onClick={this.props.showModal}>
              Close
            </button>
            <button>Create Time Code</button>
          </div>
        </div>
      </div>
    );
  }
}
