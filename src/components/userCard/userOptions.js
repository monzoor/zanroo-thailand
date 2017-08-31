import React, { Component}  from 'react';
import { Row, Col } from 'react-bootstrap';

class UserOptions extends Component{
  render () {
    return (
      <Row id="userOptions" className="mtl ptm pbm bg--gray">
        <Col md={12} sm={12} className="col-auto mx-auto">
          <ul>
            <li><i className="icon-eye"></i></li>
            <li><i className="icon-like"></i></li>
            <li className="border"><i className="icon-plus"></i></li>
            <li className="border"><i className="icon-ticket"></i></li>
            <li className="border float-md-right float-sm-right"><i className="icon-trash"></i></li>
          </ul>
        </Col>
      </Row>
    )
  }
}

export default UserOptions;
