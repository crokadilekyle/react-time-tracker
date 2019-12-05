import React, { Component } from "react";

export default class CodeCreate extends Component {
  render() {
    return (
      <div className="addCode">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add A Code</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
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
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button id="createTimeCode" className="btn btn-primary">
                Create Time Code
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
