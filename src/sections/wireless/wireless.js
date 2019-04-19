import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header';
import Security from '../security';
import EnableWiFi from '../enableWiFi';
import NetworkSettings from '../networkSettings';
import { wirelessHeader } from '../../constants/constants';
import './wireless.css';

class Wireless extends Component {
  state = {
    wifi: false,
    dhcpIP: true,
    dhcpDNS: true,
  }

  setStatusWiFi = (wifi) => {
    console.log('wifi', wifi);
    this.setState({
      wifi,
    });
  }

  setIPdhcp = (dhcpIP) => {
    console.log('dhcpIP', dhcpIP);
    this.setState({
      dhcpIP,
    });
  }

  setDNSdhcp = (dhcpDNS) => {
    console.log('dhcpDNS', dhcpDNS);
    this.setState({
      dhcpDNS,
    });
  }

  render() {
    const { wifi, dhcpIP, dhcpDNS } = this.state;
    const { validationData } = this.props;
    return (
      <div className="wireless">
        <Header header={wirelessHeader} />
        <EnableWiFi wifiStatus={wifi} setStatus={this.setStatusWiFi} />
        <Security wifiStatus={wifi} />
        <NetworkSettings
          network="wireless"
          wifiStatus={wifi}
          dhcpIP={dhcpIP}
          dhcpDNS={dhcpDNS}
          setIPdhcp={this.setIPdhcp}
          setDNSdhcp={this.setDNSdhcp}
          validationData={validationData}
        />
      </div>
    );
  }
}

Wireless.propTypes = {
  validationData: PropTypes.bool.isRequired,
};

export default Wireless;
