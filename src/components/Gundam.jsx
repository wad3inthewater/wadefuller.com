import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import { hot } from 'react-hot-loader';

const Gundam = () =>
  <div className="gundam-wrapper">
    <Header></Header>
    <MainContent></MainContent>
    <Footer></Footer>
  </div>

export default hot(module)(Gundam)