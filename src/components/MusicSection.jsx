import React, { PureComponent } from 'react';
import tapOrClick from 'react-tap-or-click'
import PlayListDisplay from './PlaylistDisplay';
import config from '../config.js';

export default class MusicSection extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayList: config.playlists[0].url
    };
    console.log(config.playlists);
  }
  onClick(playlistUrl) {
    this.setState({
      currentPlayList: playlistUrl
    });
  }
  render() {
    const {
      currentPlayList
    } = this.state;
    const _this = this;
    const playlists = config.playlists;
    return (
      <React.Fragment>
        <section className="music-section">
          <h2>A playlist is worth 1000 feels</h2>
          <div className="playlist-links">
            {playlists.map(function (playlist, index) {
              return <button className="playlist-select link-style display-block button-reset margin-bottom-1"
                key={index} {...tapOrClick(() => _this.onClick(playlist.url))}>
                {playlist.name}</button>;
            })}
          </div>
          <PlayListDisplay link={currentPlayList}></PlayListDisplay>
        </section>
      </React.Fragment>
    )
  }
}
