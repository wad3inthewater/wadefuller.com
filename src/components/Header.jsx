import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
// import React from 'react';
import ReactDOM from 'react-dom';

// export default class Header extends PureComponent {

// }

export default class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false
    }
  }
  componentDidMount() {
    this.setState({
      mounted: true
    });
  }
  render() {
    const { mounted } = this.state;
    const headerClasses = classNames('header', {
      'runanimation': mounted
    })
    return (
      <header className={headerClasses}>
        <div className="left-panel">
          <li><Link to="/about">about</Link></li>
          <div className="boarder-highlight"></div>
          <div className="content-wrap">
            80*
          </div>
        </div>
        <div className="center-panel">
          <div className="boarder-highlight delay-animation-extended-1"></div>
          <div className="content-wrap">
            <h1>Wade Fuller III</h1>
          </div>
        </div>
        <div className="right-panel">
          <div className="boarder-highlight delay-animation-extended-2"></div>
          <div className="content-wrap">
            <p>another thing</p>
          </div>
        </div>
      </header>
    )
  }
}