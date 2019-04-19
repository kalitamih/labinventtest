import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header';
import NetworkSettings from '../networkSettings';
import { ethernetHeader } from '../../constants/constants';
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
    const { validationData } = this.props;
    return (
      <div className="ethernet">
        <Header header={ethernetHeader} />
        <NetworkSettings
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

Ethernet.propTypes = {
  validationData: PropTypes.bool.isRequired,
};


export default Ethernet;
