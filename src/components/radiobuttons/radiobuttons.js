import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './radiobuttons.css';

class RadioButtons extends Component {
  state = {
    value: '',
  }

  handleDHCP = (value) => {
    const { setDHCP } = this.props;
    if (value.split('-').includes('dhcp')) setDHCP(true);
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
    const inputIdDHCP = `${network}-${purpose}-dhcp`;
    const inputIdStatic = `${network}-${purpose}-static`;
    const inputName = `${network}-${purpose}`;
    const { value } = this.state;
    return (
      <form className="radiobuttons">
        <label htmlFor={inputIdDHCP}>
          <input
            type="radio"
            value={inputIdDHCP}
            id={inputIdDHCP}
            name={inputName}
            disabled={!wifiStatus}
            checked={value === inputIdDHCP}
            onChange={this.handleChange}
          />
          <span>{radioOne}</span>
        </label>
        <label htmlFor={inputIdStatic}>
          <input
            type="radio"
            value={inputIdStatic}
            id={inputIdStatic}
            name={inputName}
            disabled={!wifiStatus}
            checked={value === inputIdStatic}
            onChange={this.handleChange}
          />
          <span>{radioTwo}</span>
        </label>
      </form>
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
