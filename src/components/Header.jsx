import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
// import React from 'react';
import ReactDOM from "react-dom";

// export default class Header extends PureComponent {

// }

export default class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false
    };
  }
  componentDidMount() {
    this.setState({
      mounted: true
    });
  }
  render() {
    const { mounted } = this.state;
    const headerClasses = classNames("header", {
      runanimation: mounted
    });
    return (
      <header className={headerClasses}>
        <div className="center-panel">
          <div className="boarder-highlight delay-animation-extended-1"></div>
          <div className="content-wrap">
            <Link className="no-link-style" to="/">
              <h1 className="main-header">Wade Fuller III</h1>
            </Link>
          </div>
        </div>
      </header>
    );
  }
}
