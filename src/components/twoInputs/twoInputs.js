import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { validateIP } from '../../validation';
import { errorIP } from '../../constants';
import './twoInputs.css';

class TwoInputs extends PureComponent {
  state = {
    prefered: '',
    alternative: '',
  }

  preferedRef = React.createRef();

  alternativeRef = React.createRef();

  componentDidUpdate() {
    const { prefered, alternative } = this.state;
    this.validateInputs(prefered, this.preferedRef);
    this.validateInputs(alternative, this.alternativeRef);
  }

  handleInputChange = (event) => {
    const { target } = event;
    const { value } = target;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  }

  validateInputs = (value, ref) => {
    const { language } = window.navigator;
    if (!validateIP(value) && value) ref.current.setCustomValidity(errorIP[language]);
    else ref.current.setCustomValidity('');
  };

  render() {
    const {
      network, wifiStatus, dhcpDNS,
    } = this.props;
    const inputIdPreferedDNS = `${network}-prefered-dns`;
    const inputIdAlternativeDNS = `${network}-alternative-dns`;
    const {
      prefered,
      alternative,
    } = this.state;
    return (
      <div className="input-text">
        <label htmlFor={inputIdPreferedDNS}>
          <span className="name-field">
            Prefered DNS server:
            &nbsp;
            <span className="asterisk">*</span>
          </span>
          <input
            name="prefered"
            type="text"
            id={inputIdAlternativeDNS}
            disabled={(dhcpDNS || !wifiStatus)}
            value={prefered}
            onChange={this.handleInputChange}
            ref={this.preferedRef}
            required
          />
        </label>
        <label htmlFor={inputIdAlternativeDNS}>
          <span className="name-field">
            Alternative DNS server:
          </span>
          <input
            name="alternative"
            type="text"
            id={inputIdPreferedDNS}
            disabled={(dhcpDNS || !wifiStatus)}
            value={alternative}
            onChange={this.handleInputChange}
            ref={this.alternativeRef}
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
};

export default TwoInputs;
