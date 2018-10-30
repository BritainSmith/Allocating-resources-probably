import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>An interesting title about apartments here</h2>
          <p>an equally interesting title</p>
          <Link to="/about">
            <Button bsStyle="primary">About</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="" circle className="profile-pic" />
          </Col>
        </Row>
      </Grid>
    );
  }
}
