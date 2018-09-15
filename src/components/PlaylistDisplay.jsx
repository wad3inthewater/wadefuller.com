import React from 'react';

export default function PlaylistDisplay({ link }) {
  return (
    <React.Fragment>
      <div className="playlist-display">
        <iframe className="section-boarder" src={link} width="300" height="380" frameBorder="0" allowtransparency="true"></iframe>
      </div>
    </React.Fragment>
  )
}
