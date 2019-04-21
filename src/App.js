import React, { Component } from 'react';
import Ethernet from './sections/ethernet';
import Wireless from './sections/wireless';
import Buttons from './sections/buttons';
import { formObj } from './constants';
import './App.css';

class App extends Component {
  handleSubmit = (event) => {
    const obj = {};
    const method = 'POST';
    const body = new FormData(event.target);
    event.preventDefault();
    body.forEach((value, key) => {
      obj[key] = value;
    });
    const sentObj = { ...formObj, ...obj };
    console.log(sentObj);

  /*  fetch('https://httpbin.org/post', { method, body })
      .then(res => res.json())
      .then(data => console.log(1));*/
  };

  render() {
    return (
      <form className="App" id="data" onSubmit={this.handleSubmit}>
        <Ethernet />
        <Wireless />
        <Buttons />
      </form>
    );
  }
}

export default App;
