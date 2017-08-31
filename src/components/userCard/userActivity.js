import React, { Component}  from 'react';
import { Row, Col } from 'react-bootstrap';

class UserActivity extends Component{
  render () {
    return (
      <Row id="userActivity" className="mbm gutters">
        <Col className="col-auto plm">
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
        <div class="w-100"></div>
        <Col className="col">
          <div className="devider"></div>
        </Col>
      </Row>
    )
  }
}

export default UserActivity;
