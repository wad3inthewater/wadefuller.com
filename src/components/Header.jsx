import React, { PureComponent } from 'react';
import classNames from 'classnames';
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
    const rightPanelclasses = classNames('right-panel', {
      'runanimation': mounted
    })
    return (
      <header className="header">
        <div className="left-panel">
          80*
      </div>
        <div className="center-panel"><h1>something here</h1>
          <p>please enter the passcode here things here</p>
        </div>
        <div className={rightPanelclasses}>
          <p>another thing</p>
          <div className="right-panel-outline"></div>
        </div>
      </header >
    )
  }
}