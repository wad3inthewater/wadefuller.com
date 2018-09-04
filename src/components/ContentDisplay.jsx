import React from 'react';

export default function ContentDisplay() {
  return (
    <React.Fragment>
      <div className="main-content">
        {/* <div className="circle-overlay-main"></div> */}
        <div className="left-content ">
          <p>lets say this</p>
          <p>and lets also talk about this</p>
        </div>
        <div>
          <p>stuff goes here</p>
          <p>more stuff here</p>
        </div>
        <div className="right-content"></div>
      </div>

    </React.Fragment>
  )
}