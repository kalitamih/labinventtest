import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { checkPsw } from '../../validation';

import './input.css';

class Input extends PureComponent {
  state = {
    key: '',
  }

  inputRef = React.createRef();

  componentDidUpdate() {
    const { key } = this.state;
    this.inputRef.current.setCustomValidity(checkPsw(key));
  }

  handleInputChange = (event) => {
    const { target } = event;
    const { value } = target;
    this.setState({
      key: value,
    });
  }

  render() {
    const { securityStatus, wifiStatus } = this.props;
    const { key } = this.state;
    const divClass = `input-text opacity-${!securityStatus}`;
    return (
      <div className={divClass}>
        <label htmlFor="securityKey">
          <span className="name-field">
            Security Key:
            &nbsp;
            <span className="asterisk">*</span>
          </span>
          <input
            name="key"
            type="password"
            id="securityKey"
            disabled={!securityStatus || !wifiStatus}
            noValidate={!securityStatus || !wifiStatus}
            value={key}
            onChange={this.handleInputChange}
            autoComplete="on"
            ref={this.inputRef}
            required
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
