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
    savePoint: null,
  }

  componentDidMount() {
    fetch(linkSave)
      .then(response => response.json())
      .then(data => data.data[0])
      .then((data) => {
        if (data) {
          const obj = {};
          const result = { ...obj, ...data };
          delete result.url;
          return result;
        }
        return formObj;
      })
      .then((data) => {
        const config = {
          ...data,
          reset: false,
          savePoint: this.saveSltPoint,
        };
        this.setState({
          config,
        });
        console.log('config: ', config);
      })
      .catch((error) => {
        const { message } = error;
        console.log(`${message}`);
      });
  }

  handleSubmit = (event) => {
    const { config, savePoint } = this.state;
    const { point, wifi } = event.target;
    const obj = {};
    const method = 'POST';
    const sentObj = new FormData(event.target);
    event.preventDefault();
    if (wifi.value && (point.value === '' || point.value === 'closer')) {
      this.setState({
        message: 'You need to select access point',
      });
      return null;
    }
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
    console.log(savePoint);
    const body = JSON.stringify({ ...formObj, ...obj, point: savePoint });
    const saveConfig = {
      ...config, ...formObj, ...obj, point: savePoint,
    };
    console.log('saveConfig', saveConfig);
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
    return null;
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

  saveSltPoint = (point) => {
    console.log('savePoint', point);
    this.setState({
      savePoint: point,
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
