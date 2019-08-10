import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <img
          className="media-icon small"
          src={require("../Assets/facebook.png")}
          alt="facebook"
        />
        <img
          className="media-icon small"
          src={require("../Assets/instagram.png")}
          alt="instagram"
        />
        <img
          className="media-icon small"
          src={require("../Assets/twitter.png")}
          alt="twitter"
        />
      </div>
    );
  }
}
