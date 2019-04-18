import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './twoInputs.css';

class TwoInputs extends Component {
  state = {
    prefered: '',
    alternative: '',
  }

  handleInputChange = (event) => {
    const { target } = event;
    const { value } = target;
    const { name } = target;
    console.log(value);
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { network, wifiStatus, dhcpDNS } = this.props;
    const inputIdPreferedDNS = `${network}-prefered-dns`;
    const inputIdAlternativeDNS = `${network}-alternative-dns`;
    const { prefered, alternative } = this.state;
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
