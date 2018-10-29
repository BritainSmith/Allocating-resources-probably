import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2> Welcome to CodeLife.io</h2>
          <p> This is how to build a website</p>
          <Link to="/about">
            <Button bsStyle="primary">About</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image
              src="assets/kitty-cat-kitten-pet-45201.jpeg"
              circle
              className="profile-pic"
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}
