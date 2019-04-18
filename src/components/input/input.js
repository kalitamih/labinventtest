import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './input.css';

class Input extends Component {
  state = {
    key: '',
  }

  handleInputChange = (event) => {
    const { target } = event;
    const { value } = target;
    console.log(value);
    this.setState({
      key: value,
    });
  }

  render() {
    const { securityStatus, wifiStatus } = this.props;
    const { key } = this.state;
    return (
      <div className="input-text">
        <label htmlFor="securityKey">
          <span className="name-field">
            Security Key:
            &nbsp;
            <span className="asterisk">*</span>
          </span>
          <input
            name="securitykey"
            type="text"
            id="securityKey"
            disabled={!(securityStatus && wifiStatus)}
            value={key}
            onChange={this.handleInputChange}
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  securityStatus: PropTypes.bool.isRequired,
  wifiStatus: PropTypes.bool.isRequired,
};

export default Input;
