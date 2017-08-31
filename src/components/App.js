import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import UserInfo from './userCard/userInfo';
import UserMeta from './userCard/userMeta';
import UserActivity from './userCard/userActivity';
import UserPole from './userCard/userPole';
import UserOptions from './userCard/userOptions';

class App extends Component {
  render() {

    return (

      <Grid fluid={true}>
        <Row>
          <Col md={12}>
            <div className="card">
                <UserInfo/>
                <UserMeta/>
                <UserActivity/>
                <UserPole/>
                <UserOptions/>
            </div>
          </Col>
        </Row>


      </Grid>
    );
  }
}

export default App;
