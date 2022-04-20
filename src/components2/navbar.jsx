import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <p>
              NavBar{" "}
              <span className="badge rounded-pill bg-secondary">
                {this.props.totalCounters}
              </span>
            </p>
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
