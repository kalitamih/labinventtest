import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import propConf from '../../proptypes';
import ConfigContext from '../../context';
import { checkPsw } from '../../validation';

import './input.css';

class Input extends PureComponent {
  state = {
    key: '',
    reset: false,
  }

  inputRef = React.createRef();

  componentDidMount() {
    const { config } = this.props;
    const { key } = config;
    this.setState({
      key,
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { config } = nextProps;
    const { key } = config;
    if (nextProps.config.reset !== prevState.reset) {
      return {
        key,
        reset: config.reset,
      };
    }
    return null;
  }

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
    const status = !securityStatus || !wifiStatus;
    const divClass = `input-text opacity-${status}`;
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
            disabled={status}
            noValidate={status}
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
  config: propConf.isRequired,
};

export default props => (
  <ConfigContext.Consumer>
    {config => <Input {...props} config={config} />}
  </ConfigContext.Consumer>
);
