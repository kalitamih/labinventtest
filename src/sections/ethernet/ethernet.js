import React, { Component } from 'react';
import Header from '../../components/header';
import NetworkSettings from '../networkSettings';
import { ethH } from '../../constants';
import './ethernet.css';

class Ethernet extends Component {
  state = {
    dhcpIP: true,
    dhcpDNS: true,
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
    const { dhcpIP, dhcpDNS } = this.state;
    return (
      <div className="ethernet">
        <Header header={ethH} />
        <NetworkSettings
          dhcpIP={dhcpIP}
          dhcpDNS={dhcpDNS}
          setIPdhcp={this.setIPdhcp}
          setDNSdhcp={this.setDNSdhcp}
        />
      </div>
    );
  }
}

export default Ethernet;
