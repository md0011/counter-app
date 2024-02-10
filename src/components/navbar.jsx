import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
            <span className="badge bg-pill bg-secondary mx-2">
              {this.props.totalCounters}
            </span>
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
