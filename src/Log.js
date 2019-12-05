import React, { Component } from "react";
import moment from "moment";

export default class Logs extends Component {
  render() {
    function getDuration(prevstamp, timestamp) {
      let duration = moment(timestamp).diff(prevstamp, "minutes");
      let hours = moment(timestamp).diff(prevstamp, "hours");
      if (duration < 10) {
        return `:0${duration}`;
      } else if (duration > 59) {
        return `${hours}:${duration % 60}`;
      } else {
        return `:${duration}`;
      }
    }
    return (
      <div>
        <h3>Time Stamps</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Time In</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {this.props.stamps.map((stamp, i, stamps) => {
              return (
                <tr key={i}>
                  <td>{stamp.code}</td>
                  <td>{moment(stamp.timestamp).format("LT")}</td>
                  <td>
                    {i > 0
                      ? getDuration(stamps[i - 1].timestamp, stamp.timestamp)
                      : "00"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button className="btn btn-danger" onClick={this.props.clearStamps}>
          Clear Time Stamps
        </button>
      </div>
    );
  }
}
