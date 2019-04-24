import React from 'react';
import './loader.css';

const Loader = () => (
  <div className="loading">
    <div className="lds-spinner">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
    <h2>Loading last configuration</h2>
  </div>
);

export default Loader;
