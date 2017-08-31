import React, { Component}  from 'react';
import { Row, Col } from 'react-bootstrap';

class UserMeta extends Component{
  render () {
    return (
      <Row id="userMeta">
        <Col md={12}>
          <p className="text-capitalize">
            <b>mixed berry sparkling @ tom n toms coffee, venice shopping plaza</b>
          </p>
          <p className="text--description">
            Mixed bugerry Sparkling @ Tom N Toms Coffee, Venice Shopping Plaza https://www.instagram.com/p/BXKo7nbg_qM/ (@ Tom N toms in Thanyaburi, Pathum Thani) https://t.co/DpRaGTnQjh https://t.co/V0V053c5TQ N TOMS in Thanyaburi, Pathum Thani) https://t.co/DpRaGTnQjh https://t.co/V0V053c5TQ...
          </p>
        </Col>
      </Row>
    )
  }
}

export default UserMeta;
