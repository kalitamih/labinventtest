import React, { Component } from 'react';
import ConfigContext from './context';
import Ethernet from './sections/ethernet';
import Wireless from './sections/wireless';
import Buttons from './sections/buttons';
import { formObj, headers, linkSave } from './constants';
import './App.css';

class App extends Component {
  state = {
    config: '',
  }

  componentDidMount() {
    fetch(linkSave)
      .then(response => response.json())
      .then(data => data.data[0])
      .then((data) => {
        const obj = {};
        const result = { ...obj, ...data };
        delete result.url;
        return result;
      })
      .then((data) => {
        this.setState({
          config: data,
        });
      })
      .catch((error) => {
        const { message } = error;
        console.log(`${message}`);
      });
  }

  handleSubmit = (event) => {
    const obj = {};
    const method = 'POST';
    const sentObj = new FormData(event.target);
    event.preventDefault();
    sentObj.forEach((value, key) => {
      obj[key] = value;
    });
    const body = JSON.stringify({ ...formObj, ...obj });
    console.log(sentObj);

    fetch(linkSave, {
      method,
      headers,
      body,
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };

  render() {
    const { config } = this.state;
    console.log(config);
    return (
      <ConfigContext.Provider value={config}>
        <form className="App" id="data" onSubmit={this.handleSubmit}>
          {config && <Ethernet />}
          {config && <Wireless />}
          <Buttons />
        </form>
      </ConfigContext.Provider>
    );
  }
}

export default App;
