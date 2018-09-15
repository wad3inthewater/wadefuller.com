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
          <div>
            <ul class="playlist-list no-list-style">
              {playlists.map(function (playlist, index) {
                return <li className="link-style" key={index} {...tapOrClick(() => _this.onClick(playlist.url))}>{playlist.name}</li>;
              })}
            </ul>
          </div>
          <PlayListDisplay link={currentPlayList}></PlayListDisplay>
        </section>
      </React.Fragment>
    )
  }
}
