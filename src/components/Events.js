import React, { Component } from 'react'
import axios from 'axios';
import ListEvents from './ListEvents';

export default class Events extends Component {

  state = {
    events: []
  }

  componentDidMount() {
    this.getEvents();

  }

  getEvents = async () => {
    const eventsReq = await axios.get('http://157.230.81.230:5000/api/history/report/by-day');
    const events = { ...this.state, events: eventsReq.data.reports };
    this.setState({
      events
    })
  }

  render() {
    return (
      <div>
        {this.state.events.length > 0 ? <ListEvents events={this.state.events} />
          : <div className="alert alert-primary">
            <strong>No hay reportes registrados hoy!</strong>
          </div>}
      </div>
    )
  }
}
