import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={require("../Assets/logo.png")} alt="classic phil's logo" />
      </div>
    );
  }
}
