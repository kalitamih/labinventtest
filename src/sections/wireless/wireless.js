import React, { Component } from 'react';
import Header from '../../components/header';
import Security from '../security';
import EnableWiFi from '../enableWiFi';
import NetworkSettings from '../networkSettings';
import { wifiH } from '../../constants';
import './wireless.css';

class Wireless extends Component {
  state = {
    wifi: false,
    dhcpIP: true,
    dhcpDNS: true,
  }

  setStatusWiFi = (wifi) => {
    this.setState({
      wifi,
    });
  }

  setIPdhcp = (dhcpIP) => {
    this.setState({
      dhcpIP,
    });
  }

  setDNSdhcp = (dhcpDNS) => {
    this.setState({
      dhcpDNS,
    });
  }

  render() {
    const { wifi, dhcpIP, dhcpDNS } = this.state;
    return (
      <div className="wireless">
        <Header header={wifiH} />
        <EnableWiFi
          wifiStatus={wifi}
          setStatus={this.setStatusWiFi}
        />
        <Security
          wifiStatus={wifi}
        />
        <NetworkSettings
          network="wifi"
          wifiStatus={wifi}
          dhcpIP={dhcpIP}
          dhcpDNS={dhcpDNS}
          setIPdhcp={this.setIPdhcp}
          setDNSdhcp={this.setDNSdhcp}
        />
      </div>
    );
  }
}

export default Wireless;
