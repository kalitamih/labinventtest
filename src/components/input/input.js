import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { propConf } from '../../proptypes';
import ConfigContext from '../../context';
import InputView from './inputView';
import { checkPsw } from '../../validation';

class Input extends PureComponent {
  state = {
    pswd: '',
    reset: false,
  }

  inputRef = React.createRef();

  componentDidMount() {
    const { config } = this.props;
    const { key } = config;
    this.setState({
      pswd: key,
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { config } = nextProps;
    const { key } = config;
    if (nextProps.config.reset !== prevState.reset) {
      return {
        pass: key,
        reset: config.reset,
      };
    }
    return null;
  }

  componentDidUpdate() {
    const { pswd } = this.state;
    this.inputRef.current.setCustomValidity(checkPsw(pswd));
  }

  handleInputChange = (event) => {
    const { target } = event;
    const { value } = target;
    this.setState({
      pswd: value,
    });
  }

  render() {
    const { securityStatus, wifiStatus } = this.props;
    const { pswd } = this.state;
    return (
      <InputView
        securityStatus={securityStatus}
        wifiStatus={wifiStatus}
        pswd={pswd}
        handleInputChange={this.handleInputChange}
        inputRef={this.inputRef}
      />
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
