import React, { Component } from 'react'
import axios from 'axios';
import ListHistory from './ListHistory';

export default class SearchShop extends Component {
  state = {
    name: '',
    shop: [],
    report: []
  }

  handleOnChange = (e) => {
    const name = e.target.value;
    this.setState({
      name
    })
  }

  handelOnSubmit = (e) => {
    e.preventDefault();
    this.getShop();

  }

  getShop = async () => {
    const { name } = this.state;
    const shopReq = await axios.post('http://157.230.81.230:5000/api/shops/search-shop', { name });
    const shop = shopReq.data.shops;
    this.setState({
      shop
    })
    this.getReportShop();

  }

  getReportShop = async () => {
    const { shop } = this.state;
    const reportReq = await axios.post('http://157.230.81.230:5000/api/history/report/by-shop/last', { "shop_id": shop[0]._id });
    const report = reportReq.data;
    this.setState({
      report
    })

  }

  render() {
    return (
      <div className="form-group col-md-6 col-sm-12 mt-5" >
        <form onSubmit={this.handelOnSubmit}>
          <div className="row">
            <input
              type="text"
              className="form-control col-md-6 col-sm-12 mr-2"
              name="name"
              placeholder="Número de Tienda"
              onChange={this.handleOnChange}
            />
            <input
              type="submit"
              className="btn btn-primary col-md-4"
              value="Buscar"
            />
          </div>
        </form>
        <div className="row">
          <div className="col-md-10">
            <ListHistory report={this.state.report} />
          </div>
        </div>
      </div >
    )
  }
}

