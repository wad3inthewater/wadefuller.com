import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ContentDisplay from './ContentDisplay';
import { hot } from 'react-hot-loader';

const Gundam = () =>
  <div className="gundam-wrapper">
    <Header></Header>
    <ContentDisplay></ContentDisplay>
    <Footer></Footer>
  </div>

export default hot(module)(Gundam)