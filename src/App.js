import React, { Component } from 'react';
import Ethernet from './sections/ethernet';
import Wireless from './sections/wireless';
import Buttons from './sections/buttons';
import './App.css';

class App extends Component {
  state = {
    validationData: false,
  }

  componentDidMount() {
    console.log(this.state);
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      validationData: true,
    });
    console.log('checkValidity', event.target.checkValidity());
    const method = 'POST';
    const body = new FormData(event.target);
    body.forEach((value, key) => {
      console.log(key, value);
    });
    fetch('https://httpbin.org/post', { method, body })
      .then(res => res.json())
      .then(data => console.log(1));
  };

  render() {
    const { validationData } = this.state;
    return (
      <form className="App" id="data" onSubmit={this.handleSubmit}>
        <Ethernet validationData={validationData} />
        <Wireless validationData={validationData} />
        <Buttons />
      </form>
    );
  }
}

export default App;
