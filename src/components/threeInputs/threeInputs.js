import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { validateIP, validateMask, validateSubnet } from '../../validation';
import {
  errorIP, errorMask, errorGatewayOne, errorGatewayTwo,
} from '../../constants';
import './threeInputs.css';

class ThreeInputs extends PureComponent {
  state = {
    ip: '',
    mask: '',
    gateway: '',
  }

  ipRef = React.createRef();

  maskRef = React.createRef();

  gatewayRef = React.createRef();

  componentDidUpdate() {
    const { ip, gateway, mask } = this.state;
    this.validateInputs(ip, this.ipRef, validateIP, errorIP);
    this.validateInputs(mask, this.maskRef, validateMask, errorMask);
    if (validateIP(gateway)) {
      this.validateSubnet(ip, mask, gateway, this.gatewayRef, validateSubnet, errorGatewayTwo);
    } else {
      this.validateInputs(gateway, this.gatewayRef, validateIP, errorGatewayOne);
    }
  }

  handleInputChange = (event) => {
    const { target } = event;
    const { value } = target;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  }

  validateInputs = (value, ref, func, error) => {
    const { language } = window.navigator;
    if (!func(value) && value) ref.current.setCustomValidity(error[language]);
    else ref.current.setCustomValidity('');
  }

  validateSubnet = (ip, mask, gateway, ref, func, error) => {
    const { language } = window.navigator;
    if (!func(ip, mask, gateway) && gateway) ref.current.setCustomValidity(error[language]);
    else ref.current.setCustomValidity('');
  }

  render() {
    const { network, dhcpIP, wifiStatus } = this.props;
    const inputIdAddress = `${network}-IP`;
    const inputIdSubnet = `${network}-mask`;
    const inputIdGateway = `${network}-gateway`;
    const { ip, mask, gateway } = this.state;
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
            ref={this.ipRef}
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
            name="mask"
            type="text"
            id={inputIdSubnet}
            disabled={(dhcpIP || !wifiStatus)}
            value={mask}
            onChange={this.handleInputChange}
            ref={this.maskRef}
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
            ref={this.gatewayRef}
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
};

export default ThreeInputs;
