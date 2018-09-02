import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
// import "./main.css"
// import "purecss";
// document.body.appendChild(Header());

const title = 'My Minimal React Webpack Babel Setup';


ReactDOM.render(
  <Header />,
  document.getElementById('app')
);