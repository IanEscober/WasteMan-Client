import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Card } from '../../components/Card/Card';

class Home extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col >
              <Card
                content={
                  <div>
                    <h1>IoT-based Garbage Bin 
                    <br/>For Solid Waste Collection 
                    <br/>With Determination Of Route 
                    <br/>Using the Shortest Path First Algorithm</h1>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Home;
