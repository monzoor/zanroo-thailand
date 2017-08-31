import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup, Checkbox, Button} from 'react-bootstrap';

class App extends Component {
  render() {

    return (

      <Grid fluid={true}>
        <Row>
          <Col md={12}>
            <div className="card">
                <Row id="userInfo" className="man">
                  <form>
                    <FormGroup className="mts">
                      <Checkbox onChange=""></Checkbox>
                    </FormGroup>
                  </form>
                  <Col className="col-md-auto plm">
                    <div className="avatar avatar--sm profile-avatar">
                      <img className="avatar__img" src={require('../assets/images/user.jpg')} alt=""/>
                    </div>
                    <div className="avatar avatar__social">
                      <i className="icon-facebook-circled avatar__social--facebook"></i>
                    </div>
                  </Col>
                  <Col className="col col-lg-10">
                    <p className="text--fb mbn"><b>Oil Wanichpoonsuk</b></p>
                    <p className="text--sm text--description mbn"><i className="icon-earth"></i>Public. 15 May 2017 9:00AM</p>
                  </Col>

                  <Col className="col-auto mr-auto">
                    <Button bsStyle="link"><i className="icon-menu"></i></Button>
                  </Col>
                </Row>

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

                <Row id="userOptions" className="mtl ptm pbm bg--gray">
                  <Col md={12}>
                    <ul>
                      <li><i className="icon-eye"></i></li>
                      <li><i className="icon-like"></i></li>
                      <li className="border"><i className="icon-plus"></i></li>
                      <li className="border"><i className="icon-ticket"></i></li>
                      <li className="border"><i className="icon-trash"></i></li>
                    </ul>
                  </Col>
                </Row>
            </div>
          </Col>
        </Row>


      </Grid>
    );
  }
}

export default App;
