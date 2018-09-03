import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ContentDisplay from './ContentDisplay';

export default function Gundam() {
  return (
    <div className="gundam-wrapper">
      <Header></Header>
      <ContentDisplay></ContentDisplay>
      <Footer></Footer>
    </div>
  )
}