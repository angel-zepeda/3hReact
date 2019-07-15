import React, { Component } from 'react'
import SearchShop from './SearchShop';
import Events from './Events';
import ListHistory from './ListHistory';

export default class History extends Component {

  render() {
    return (
      <div>

        <div className="col-md-6 mx-auto">
          <div className="text-center mb-5 mt-5 bg-primary rounded">
            <img src="http://hostingwebmex.com/z3h/logo.png" alt="3 Hermanos Logo" />
          </div>
        </div>
        <div className="row">
          <SearchShop />
          <div className="card col-md-6 col-sm-12">
            <div className="card-header bg-primary mt-2">
              <h3 className="text-center text-white">Eventos del día</h3>
            </div>
            <div className="card-body">
              <Events />
            </div>
          </div>
        </div>
      </div>

    )
  }
}
