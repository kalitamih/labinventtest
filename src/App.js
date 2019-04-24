import React, { Component } from 'react';
import ConfigContext from './context';
import Ethernet from './sections/ethernet';
import Wireless from './sections/wireless';
import Buttons from './sections/buttons';
import Loader from './components/loader';
import Message from './components/message';
import { formObj, headers, linkSave } from './constants';
import './App.css';

class App extends Component {
  state = {
    config: '',
    message: '',
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
        const config = { ...data, reset: false };
        this.setState({
          config,
        });
      })
      .catch((error) => {
        const { message } = error;
        console.log(`${message}`);
      });
  }

  handleSubmit = (event) => {
    const { config } = this.state;
    const obj = {};
    const method = 'POST';
    const sentObj = new FormData(event.target);
    event.preventDefault();
    sentObj.forEach((value, key) => {
      switch (value) {
        case 'true':
          obj[key] = true;
          break;
        case 'false':
          obj[key] = false;
          break;
        default:
          obj[key] = value;
      }
    });
    const body = JSON.stringify({ ...formObj, ...obj });
    const saveConfig = { ...config, ...formObj, ...obj };
    this.setState({
      config: saveConfig,
      message: 'Saving data',
    });
    fetch(linkSave, {
      method,
      headers,
      body,
    })
      .then(res => res.json())
      .catch((err) => {
        console.log(`${err}`);
        this.setState({
          message: 'Form was send incorrectly. Try again.',
        });
      });
  };

  handleCancel = (event) => {
    event.preventDefault();
    const { config } = this.state;
    const obj = { ...config, reset: !config.reset };
    this.setState({
      config: obj,
      message: 'Cancel unsaved data',
    });
  }

  handleAnimation = () => {
    this.setState({
      message: '',
    });
  }

  render() {
    const { config, message } = this.state;
    return (
      <ConfigContext.Provider value={config}>
        <form className="App" id="data" onSubmit={this.handleSubmit}>
          {message && (
            <Message
              message={message}
              handleAnimation={this.handleAnimation}
            />
          )}
          {!config && <Loader />}
          {config && <Ethernet />}
          {config && <Wireless />}
          {config && <Buttons handleCancel={this.handleCancel} />}
        </form>
      </ConfigContext.Provider>
    );
  }
}

export default App;
