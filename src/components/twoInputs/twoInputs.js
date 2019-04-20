import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { validateIP } from '../../validation';
import { errorIPaddress } from '../../constants';
import Tooltip from '../tooltip';
import './twoInputs.css';

class TwoInputs extends PureComponent {
  state = {
    prefered: '',
    alternative: '',
    preferedDNSValid: true,
    alternativeDNSValid: true,
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
    const { prefered, alternative } = this.state;
    if (validateIP(prefered)) this.setState({ preferedDNSValid: true });
    else this.setState({ preferedDNSValid: false });
    if (validateIP(alternative)) this.setState({ alternativeDNSValid: true });
    else this.setState({ alternativeDNSValid: false });
  }

  render() {
    const {
      network, wifiStatus, dhcpDNS,
    } = this.props;
    const inputIdPreferedDNS = `${network}-prefered-dns`;
    const inputIdAlternativeDNS = `${network}-alternative-dns`;
    const {
      prefered,
      alternative,
      preferedDNSValid,
      alternativeDNSValid,
    } = this.state;
    return (
      <div className="input-text">
        <label htmlFor={inputIdPreferedDNS}>
          <span className="name-field">
            Prefered DNS server:
            &nbsp;
            <span className="asterisk">*</span>
          </span>
          <Tooltip
            text={errorIPaddress}
            valid={preferedDNSValid}
            dhcp={dhcpDNS}
            WiFiOFF={!wifiStatus}
            input={prefered}
          />
          <input
            name="prefered"
            type="text"
            id={inputIdAlternativeDNS}
            disabled={(dhcpDNS || !wifiStatus)}
            value={prefered}
            onChange={this.handleInputChange}
            required
          />
        </label>
        <label htmlFor={inputIdAlternativeDNS}>
          <span className="name-field">
            Alternative DNS server:
          </span>
          <Tooltip
            text={errorIPaddress}
            valid={alternativeDNSValid}
            dhcp={dhcpDNS}
            WiFiOFF={!wifiStatus}
            input={alternative}
          />
          <input
            name="alternative"
            type="text"
            id={inputIdPreferedDNS}
            disabled={(dhcpDNS || !wifiStatus)}
            value={alternative}
            onChange={this.handleInputChange}
          />
        </label>
      </div>
    );
  }
}

TwoInputs.propTypes = {
  network: PropTypes.string.isRequired,
  wifiStatus: PropTypes.bool.isRequired,
  dhcpDNS: PropTypes.bool.isRequired,
  validationData: PropTypes.bool.isRequired,
};

export default TwoInputs;
