import React, { Component } from "react";
import BodyColor from "../components/BodyColor";

class BizCard extends Component {
  render() {
    return (
      <div class="container-bizCard" isBizCardGradient={true}>
        <div class="bizCard-item-1">
          <h1>I am the Business Card</h1>
        </div>
      </div>
    );
  }
}

export default BizCard;
