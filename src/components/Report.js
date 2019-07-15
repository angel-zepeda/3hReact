import React, { Component } from 'react'

const INFO_STYLE = {

  fontSize: '1rem'

}

class Area extends Component {
  state = {
    show: false
  }

  toggleModal = () => {
    this.setState({
      show: !this.state.show
    })

  }


  render() {
    const { name } = this.props.area;
    return (
      <div>
        <input
          type="button"
          className="btn btn-primary m-2"
          defaultValue={name}
          onClick={this.toggleModal}
        />
        {
          this.state.show ?
            <ListArea toggleModal={this.toggleModal} aspects={this.props.aspects} />
            : null
        }
      </div>
    );
  }
}

class ListArea extends Component {
  state = {
    visible: true
  }
  render() {
    const MODAL_CARD = {
      position: 'absolute',
      display: 'flex',
      transform: 'translate(10vw, -70vh)',
      boxShadow: '5px 10px 8px #888888',
      zIndex: 1,
      width: '100vw',
      height: '100vh',
      overflow: 'scroll'
    }
    console.log(this.props.aspects);
    return (
      <div className="card modal col-sm-12" style={MODAL_CARD}>
        {
          this.props.aspects.map(aspect => (
            <p key={aspect._id}>{aspect.name}: {aspect.score}</p>
          ))
        }
        <div className="row">
          <input
            type="button"
            className="btn btn-primary col-md-2 mx-auto col-sm-12"
            defaultValue="Cerrar"
            onClick={this.props.toggleModal}
          />
        </div>
      </div>
    );
  }
}

export default class Report extends Component {

  render() {
    const { score, created_at, areas } = this.props.report;
    const { address, name, shop_number, } = this.props.report.shop;
    const { nick } = this.props.report.user;

    return (
      <div>
        <div className="card p-2 mb-3 mt-4" style={INFO_STYLE}>
          <div className="card-header">Tienda:N°{shop_number} | {name} | {address} </div>
          <div className="card-body">
            <strong>Calificación:</strong> {score}<br />
            <strong>Fecha: </strong>{created_at}<br />
            <strong>Supervisor: </strong>{nick}<br />
          </div>
        </div>
        <div className="col-md-12 mt-4">
          <div className="row mx-auto">
            {
              areas.map(area => <Area key={area._id} area={area} aspects={area.aspects} />)
            }


          </div>
        </div>
      </div>
    )
  }
}


