import React from 'react';
import { Route, Switch } from 'react-router-dom'
import AboutSection from './AboutSection'
import MusicSection from './MusicSection'

export default function ContentDisplay() {
  return (
    <React.Fragment>

      <div className="main-content">
        <Switch>
          <Route path="/about" component={AboutSection} />
          <Route path="/music" component={MusicSection} />
        </Switch>
        <p className="animation-paragraph">
          and lets also talk about this. and something or other happens here. and the ever expanding mind continues to master things
        </p>
        {/* <iframe src="https://open.spotify.com/embed/user/djswade/playlist/0I3RzhTWmhUPybunNrzKFY" width="300" height="380" frameborder="0" allowtransparency="true"></iframe> */}
      </div>
    </React.Fragment>
  )
}