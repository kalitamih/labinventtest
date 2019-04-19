import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { validateIP } from '../../validation';
import { errorIPaddress } from '../../constants/constants';
import Tooltip from '../tooltip';
import './twoInputs.css';

class TwoInputs extends PureComponent {
  state = {
    prefered: '',
    alternative: '',
    preferedNotValid: false,
    alternativeNotValid: false,
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
    if (!validateIP(prefered)) this.setState({ preferedNotValid: true });
    else this.setState({ preferedNotValid: false });
    if (!validateIP(alternative)) this.setState({ alternativeNotValid: true });
    else this.setState({ alternativeNotValid: false });
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
      preferedNotValid,
      alternativeNotValid,
    } = this.state;
    const error = alternative && (alternativeNotValid && !dhcpDNS);
    return (
      <div className="input-text">
        <label htmlFor={inputIdPreferedDNS}>
          <span className="name-field">
            Prefered DNS server:
            &nbsp;
            <span className="asterisk">*</span>
          </span>
          {prefered && (preferedNotValid && !dhcpDNS) && <Tooltip inscription={errorIPaddress} />}
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
          {error && <Tooltip inscription={errorIPaddress} />}
          <input
            name="alternative"
            type="text"
            id={inputIdPreferedDNS}
            disabled={(dhcpDNS || !wifiStatus)}
            value={alternative}
            onChange={this.handleInputChange}
            required
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
