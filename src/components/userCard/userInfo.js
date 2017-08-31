import React, { Component}  from 'react';
import { Row, Col, FormGroup, Checkbox, Button} from 'react-bootstrap';

class UserInfo extends Component{
  render () {
    return (
      <Row id="userInfo" className="man">
        <form>
          <FormGroup className="mts">
            <Checkbox onChange=""></Checkbox>
          </FormGroup>
        </form>
        <Col className="col-md-auto plm">
          <div className="avatar avatar--sm profile-avatar">
            <img className="avatar__img" src={require('../../assets/images/user.jpg')} alt=""/>
          </div>
          <div className="avatar avatar__social">
            <i className="icon-facebook-circled avatar__social--facebook"></i>
          </div>
        </Col>
        <Col md={10} sm={9} className="col-auto info">
          <p className="text--fb mbn"><b>Oil Wanichpoonsuk</b></p>
          <p className="text--sm text--description mbn"><i className="icon-earth"></i>Public. 15 May 2017 9:00AM</p>
        </Col>
        <Button bsStyle="link"><i className="icon-menu"></i></Button>
      </Row>
    )
  }
}

export default UserInfo;
