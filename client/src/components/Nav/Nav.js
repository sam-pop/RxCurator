import React, { Component } from "react";
// import { Link } from "react-router";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <div className="Nav__container">
        
          {/* <Link to="/" className="Nav__brand">
            <img src="" className="Nav__logo" />
          </Link> */}

          <div className="Nav__right">
            <ul className="Nav__item-wrapper">
              <li className="Nav__item">
                <Link className="Nav__link" to="/scan">
                  Scan
                </Link>
              </li>
              <li className="Nav__item">
                <Link className="Nav__link" to="/api/meds">
                  My Meds
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
