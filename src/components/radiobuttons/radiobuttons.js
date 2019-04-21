import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './radiobuttons.css';

class RadioButtons extends Component {
  state = {
    value: 'dhcp',
  }

  handleDHCP = (value) => {
    const { setDHCP } = this.props;
    if (value === 'dhcp') setDHCP(true);
    else setDHCP(false);
  }

  handleChange = (event) => {
    const { target } = event;
    const { value } = target;
    this.handleDHCP(value);
    this.setState({
      value,
    });
  }

  render() {
    const {
      radioOne, radioTwo, network, purpose, wifiStatus,
    } = this.props;
    const inputDHCP = `${network}-${purpose}-dhcp`;
    const inputStat = `${network}-${purpose}-static`;
    const inputName = `${network}-${purpose}`;
    const { value } = this.state;
    const divClass = `radiobuttons opacity-${!wifiStatus}`;
    return (
      <div className={divClass}>
        <label htmlFor={inputDHCP}>
          <input
            type="radio"
            value="dhcp"
            id={inputDHCP}
            name={inputName}
            disabled={!wifiStatus}
            checked={value === 'dhcp'}
            onChange={this.handleChange}
          />
          <span>{radioOne}</span>
        </label>
        <label htmlFor={inputStat}>
          <input
            type="radio"
            value="static"
            id={inputStat}
            name={inputName}
            disabled={!wifiStatus}
            checked={value === 'static'}
            onChange={this.handleChange}
          />
          <span>{radioTwo}</span>
        </label>
      </div>
    );
  }
}

RadioButtons.defaultProps = {
  purpose: 'ip',
};

RadioButtons.propTypes = {
  radioOne: PropTypes.string.isRequired,
  radioTwo: PropTypes.string.isRequired,
  network: PropTypes.string.isRequired,
  purpose: PropTypes.string,
  wifiStatus: PropTypes.bool.isRequired,
  setDHCP: PropTypes.func.isRequired,
};

export default RadioButtons;
