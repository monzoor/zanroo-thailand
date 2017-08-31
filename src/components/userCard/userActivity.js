import React, { Component}  from 'react';
import { Row, Col } from 'react-bootstrap';

class UserActivity extends Component{
  render () {
    return (
      <Row id="userActivity" className="justify-content-md-center mbm">
        <Col md={5}>
          <Row className="no-gutters">
            <ul>
              <li>
                  <i className="icon-calender"></i>
                  <span>549</span>
              </li>
              <li>
                  <i className="icon-like"></i>
                  <span>549</span>
              </li>
              <li>
                  <i className="icon-chat"></i>
                  <span>549</span>
              </li>
            </ul>
          </Row>
        </Col>
        <Col md={7} className="no-gutter">
          <div className="devider"></div>
        </Col>
      </Row>
    )
  }
}

export default UserActivity;
