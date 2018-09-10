import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/css/main.css"
import { BrowserRouter, browserHistory } from 'react-router-dom';
import Gundam from './components/Gundam';
// import "./main.css"
// import "purecss";
// document.body.appendChild(Header());

const title = 'My Minimal React Webpack Babel Setup';
// let Gundam = Gundam();

// document.body.appendChild(comp);

// // HMR interface

ReactDOM.render((
  <BrowserRouter history={browserHistory}>
    <Gundam />
  </BrowserRouter>
), document.getElementById('app'));


// if (module.hot) {
//   // Capture hot update
//   module.hot.accept("./components/SimpleComponent", () => {
//     const nextComponent = component();

//     // Replace old content with the hot loaded one
//     document.body.replaceChild(nextComponent, comp);

//     comp = nextComponent;
//   });
// }
