import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Card } from '../../components/Card/Card';

class Home extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col>
              <Card
                content={
                  <div>
                    <h1>WasteMan</h1>
                    <h3>an implementation of the researches entitled:</h3>
                    <h4>
                      <i>
                        <ul>
                          <li>
                            "IoT-based Garbage Bin for Solid Waste Collection with Determination of Route
                            <br />Using the Shortest Path First Algorithm"
                          </li>
                          <li>
                            "Determination of Solid Waste Collection Routes by Graph Theory with Graph Minimization 
                            <br />Using Transitive Reduction for an IoT-based Garbage Bin"
                          </li>
                        </ul>
                      </i>
                    </h4>
                    <p>Research Status</p>
                    <ul>
                      <li>Peer Review - Done</li>
                      <li>Proofread - Done</li>
                      <li>Local Colloquium - Done</li>
                      <li>Conference - On proceeding</li>
                    </ul>
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
