import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { validateIP, validateMask } from '../../validation';
import { errorIPaddress } from '../../constants';
import Tooltip from '../tooltip';
import './threeInputs.css';

class ThreeInputs extends PureComponent {
  state = {
    ip: '',
    mask: '',
    gateway: '',
    validIP: true,
    validMask: true,
    validGateway: true,
    sameSubnet: true,
  }

  componentDidUpdate() {
    const { validationData } = this.props;
    if (validationData) this.validateInputs();
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
    const { ip, gateway, mask } = this.state;
    if (validateIP(ip)) this.setState({ validIP: true });
    else this.setState({ validIP: false });
    if (validateIP(gateway)) this.setState({ validGateway: true });
    else this.setState({ validGateway: false });
    if (validateMask(mask)) this.setState({ validMask: true });
    else this.setState({ validMask: false });
  }

  render() {
    const { network, dhcpIP, wifiStatus } = this.props;
    const inputIdAddress = `${network}-IP`;
    const inputIdSubnet = `${network}-mask`;
    const inputIdGateway = `${network}-gateway`;
    const {
      ip, mask, gateway, validIP, validMask, validGateway, sameSubnet,
    } = this.state;
    return (
      <div className="input-text">
        <label htmlFor={inputIdAddress}>
          <span className="name-field">
            IP address:
            &nbsp;
            <span className="asterisk">*</span>
          </span>
          <Tooltip
            text={errorIPaddress}
            valid={validIP}
            dhcp={dhcpIP}
            WiFiOFF={!wifiStatus}
            input={ip}
          />
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
          <Tooltip
            text={errorIPaddress}
            valid={validMask}
            dhcp={dhcpIP}
            WiFiOFF={!wifiStatus}
            input={mask}
          />
          <input
            name="mask"
            type="text"
            id={inputIdSubnet}
            disabled={(dhcpIP || !wifiStatus)}
            value={mask}
            onChange={this.handleInputChange}
            required
          />
        </label>
        <label htmlFor={inputIdGateway}>
          <span className="name-field">
            Default Gateway:
          </span>
          <Tooltip
            text={errorIPaddress}
            valid={validGateway}
            dhcp={dhcpIP}
            WiFiOFF={!wifiStatus}
            input={gateway}
          />
          <input
            name="gateway"
            type="text"
            id={inputIdGateway}
            disabled={(dhcpIP || !wifiStatus)}
            value={gateway}
            onChange={this.handleInputChange}
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
