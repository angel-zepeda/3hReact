import React, { Component } from 'react'
import Report from './Report';

export default class ListHistory extends Component {
  render() {
    const { report } = this.props;
    return (
      <div>
        {report.map(report => <Report key={report._id} report={report} />)}
      </div>
    )
  }
}
