import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export default class Footer extends PureComponent {
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
    const centerPanelclasses = classNames('center-panel', {
      'runanimation': mounted
    })
    return (
      <footer className="footer">
        <div className={centerPanelclasses}>
          <div className="boarder-highlight"></div>
          <div className="content-wrap footer-content">
            <nav>
              <ul className="no-list-style">
                <li><Link to="/about">origins</Link></li>
                <li><Link to="/listen">listen</Link></li>
                <li><Link to="/abilities">abilities</Link></li>
                <li><Link to="/connect">connect</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    )
  }
}