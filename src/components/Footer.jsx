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
        <div>side content</div>
        <div className={centerPanelclasses}>
          <div className="boarder-highlight"></div>
        </div>
        <div></div>
      </footer>
    )
  }
}