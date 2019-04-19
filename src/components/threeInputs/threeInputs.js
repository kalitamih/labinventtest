import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { validateIP, validateMask } from '../../validation';
import { errorIPaddress } from '../../constants/constants';
import Tooltip from '../tooltip';
import './threeInputs.css';

class ThreeInputs extends Component {
  state = {
    ip: '',
    subnet: '',
    gateway: '',
    validIP: true,
    validSubnet: true,
    validGateway: true,
    sameSubnet: true,
  }

  handleInputChange = (event) => {
    const { target } = event;
    const { value } = target;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  }

  validateInputs = () => {
    const { ip, gateway, subnet } = this.state;
    if (validateIP(ip)) this.setState({ validIP: true });
    else this.setState({ validIP: false });
    if (validateIP(gateway)) this.setState({ validGateway: true });
    else this.setState({ validGateway: false });
    if (validateMask(subnet)) this.setState({ validSubnet: true });
    else this.setState({ validGSubnet: false });
  }

  render() {
    const { network, dhcpIP, wifiStatus } = this.props;
    const inputIdAddress = `${network}-IP`;
    const inputIdSubnet = `${network}-subnet`;
    const inputIdGateway = `${network}-gateway`;
    const { ip, subnet, gateway } = this.state;
    return (
      <div className="input-text">
        <label htmlFor={inputIdAddress}>
          <span className="name-field">
            IP address:
            &nbsp;
            <span className="asterisk">*</span>
          </span>
          <input
            name="ip"
            type="text"
            id={inputIdAddress}
            disabled={(dhcpIP || !wifiStatus)}
            value={ip}
            onChange={this.handleInputChange}
            required
          />
        </label>
        <label htmlFor={inputIdSubnet}>
          <span className="name-field">
            Subnet Mask:
            &nbsp;
            <span className="asterisk">*</span>
          </span>
          <input
            name="subnet"
            type="text"
            id={inputIdSubnet}
            disabled={(dhcpIP || !wifiStatus)}
            value={subnet}
            onChange={this.handleInputChange}
            required
          />
        </label>
        <label htmlFor={inputIdGateway}>
          <span className="name-field">
            Default Gateway:
          </span>
          <input
            name="gateway"
            type="text"
            id={inputIdGateway}
            disabled={(dhcpIP || !wifiStatus)}
            value={gateway}
            onChange={this.handleInputChange}
            required
          />
        </label>
      </div>
    );
  }
}

ThreeInputs.propTypes = {
  network: PropTypes.string.isRequired,
  dhcpIP: PropTypes.bool.isRequired,
  wifiStatus: PropTypes.bool.isRequired,
  validationData: PropTypes.bool.isRequired,
};

export default ThreeInputs;
