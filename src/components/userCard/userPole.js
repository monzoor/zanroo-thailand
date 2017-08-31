import React, { Component}  from 'react';
import { Row, Col } from 'react-bootstrap';

const poles = [
  {
    smile: {
      poleName: "Tom N Toms",
      pillName: "Tom N Toms",
      poleCount: 1
    }
  },
  {
    poker: {
      poleName: "Tom N Toms",
      pillName: "Tom N Toms",
      poleCount: 2
    }
  },
  {
    sad: {
      poleName: "Tom N Toms",
      pillName: "Tom N Toms",
      poleCount: 2
    }
  }
]

class UserPole extends Component{
  render () {
    return (
      <Row id="userPole">
        <Col md={12}>
          <Row className="mbs">
            <Col md={3} sm={4} className="col-12 tag--name prn pts">
              <i className="icon-smile text--green text--lg iman"></i>
              <span className="plm">Tom N Toms</span>
              <span className="colon float-sm-right float-md-right">:</span>
            </Col>
            <Col md={9} sm={8} className="col-12">
              <span className="badge badge-pill badge--light-gray mrs">Tom N Toms</span>
              <i className="icon-plus text--lg align-middle text--light-gray"></i>
            </Col>
          </Row>
          <Row className="mbs">
            <Col md={3} sm={4} className="col-12 tag--name prn pts">
              <i className="icon-poker text--poker text--lg iman"></i>
              <span className="plm">Starbuck</span>
              <span className="colon float-sm-right float-md-right">:</span>
            </Col>
            <Col md={9} sm={8} className="col-12">
              <span className="badge badge-pill badge--light-gray mrs">starbuck</span>
              <span className="badge badge-pill badge--light-gray mrs">starbuck</span>
              <i className="icon-plus text--lg align-middle text--light-gray"></i>
            </Col>
          </Row>
          <Row>
            <Col md={3} sm={4} className="col-12 tag--name prn pts">
              <i className="icon-sad text--red text--lg iman"></i>
              <span className="plm">Toms coffee</span>
              <span className="colon float-sm-right float-md-right">:</span>
            </Col>
            <Col md={9} sm={8} className="col-12">
              <span className="badge badge-pill badge--light-gray mrs">Tom N</span>
              <i className="icon-plus text--lg align-middle text--light-gray"></i>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default UserPole;
