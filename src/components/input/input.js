import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { passwordRequirements } from '../../validation';
import Tooltip from '../tooltip';
import './input.css';

class Input extends PureComponent {
  state = {
    key: '',
    validKey: true,
  }

  componentDidUpdate() {
    const { validationData } = this.props;
    if (validationData) this.validateInputs();
  }

  validateInputs = () => {
    const { key } = this.state;
    if (passwordRequirements(key)) this.setState({ validKey: true });
    else this.setState({ validKey: false });
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
    const { securityStatus } = this.props;
    const { key, validKey } = this.state;
    return (
      <div className="input-text">
        <label htmlFor="securityKey">
          <span className="name-field">
            Security Key:
            &nbsp;
            <span className="asterisk">*</span>
          </span>
          <Tooltip
            text="Not follow password requirements"
            valid={validKey}
            input={key}
            dhcp={false}
          />
          <input
            name="securitykey"
            type="password"
            id="securityKey"
            disabled={!securityStatus}
            value={key}
            onChange={this.handleInputChange}
            required
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  securityStatus: PropTypes.bool.isRequired,
  validationData: PropTypes.bool.isRequired,
};

export default Input;
