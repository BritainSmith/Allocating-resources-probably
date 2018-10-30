import React, { Component } from "react";

export default class Listings extends Component {
  componentDidMount() {
    this.getBars();
  }

  getBars() {
    fetch("http:localhost:3003/api/bars")
      .then(res => res.json())
      .then(res => console.log(res));
  }
  render() {
    return <div>Listings</div>;
  }
}
