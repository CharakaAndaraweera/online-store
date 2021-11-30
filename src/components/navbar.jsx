import React, { Component } from "react";
class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Navbar{" "}
                <span className="badge rounded-pill bg-secondary">
                  {this.props.numofCounters}
                </span>
              </a>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default NavBar;
