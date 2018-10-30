import React, { Component } from "react";
import { Grid, Col, Image } from "react-bootstrap";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div>
        <Image src="assets/dog-people.jpg" className="header-image" />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image src="" />
          </Col>
        </Grid>
      </div>
    );
  }
}
