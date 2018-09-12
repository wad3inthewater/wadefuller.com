import React, { PureComponent } from 'react';
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
          <div className="content-wrap">
            <nav>
              <ul>
                <li>attributes</li>
                <li>listen</li>
                <li>abilities</li>
                <li>coordinates</li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    )
  }
}