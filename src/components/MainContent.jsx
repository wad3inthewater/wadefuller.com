import React from 'react';
import { Route, Switch } from 'react-router-dom'
import AboutSection from './AboutSection'
import MusicSection from './MusicSection'
import SkillsSection from './SkillsSection'
import SocialSection from './SocialSection'

export default function ContentDisplay() {
  return (
    <React.Fragment>

      <main className="main-content">
        <Switch>
          <Route path="/about" component={AboutSection} />
          <Route path="/listen" component={MusicSection} />
          <Route path="/abilities" component={SkillsSection} />
          <Route path="/connect" component={SocialSection} />
        </Switch>
        {/* <iframe src="https://open.spotify.com/embed/user/djswade/playlist/0I3RzhTWmhUPybunNrzKFY" width="300" height="380" frameborder="0" allowtransparency="true"></iframe> */}
      </main>
    </React.Fragment>
  )
}