import React, { Component}  from 'react';
import { Row, Col, Button } from 'react-bootstrap';


class UserPole extends Component{

  constructor(props) {
      super(props);

      var poleStates = props.poles;
      this.state = {
          poleStates
      };

      this.createPole = this.createPole.bind(this);
  }

  createPole(e) {
    e.stopPropagation();
    const states = this.state.poleStates;
    const currentMode = e.currentTarget.getAttribute("data-index");
    states[currentMode].poleCount = states[currentMode].poleCount + 1
    this.setState({
      states: states
    })
  }

  render () {
    // render poles from data
    const renderPoleItmes = this.props.poles.map((pole, index) => {
      const pills = [];
      for (var i = 0; i < pole.poleCount; i++) {
        pills.push(<span className="badge badge-pill badge--light-gray mrs" key={i}>{pole.poleName}</span>)
      }
      return (
        <Row className="mbs" key={index}>
          <Col md={3} sm={4} className="col-12 tag--name prn pts">
            <i className={`icon-${pole.mode} text--${pole.mode} text--lg iman`}></i>
            <span className="plm">{pole.poleName}</span>
            <span className="colon float-sm-right float-md-right">:</span>
          </Col>
          <Col md={9} sm={8} className="col-12">
            {pills}
            <Button className="btn btn-link pan" onClick={this.createPole} data-index={index}>
              <i className="icon-plus text--lg align-middle text--light-gray"></i>
            </Button>
          </Col>
        </Row>
      );
    });

    return (
      <Row id="userPole">
        <Col md={12}>
          {renderPoleItmes}
        </Col>
      </Row>
    )
  }
}

export default UserPole;
