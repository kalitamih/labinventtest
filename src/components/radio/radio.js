import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { propConf } from '../../proptypes';
import ConfigContext from '../../context';
import RadioView from './radioView';

class Radio extends PureComponent {
  state = {
    value: 'dhcp',
    reset: false,
  }

  componentDidMount() {
    const { purpose, config, network } = this.props;
    const value = config[`${network}-${purpose}`];
    this.setState({
      value,
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      config, purpose, network,
    } = nextProps;
    const value = config[`${network}-${purpose}`];
    if (nextProps.config.reset !== prevState.reset) {
      return {
        value,
        reset: config.reset,
      };
    }
    return null;
  }

  componentDidUpdate() {
    const { setDHCP } = this.props;
    const { value } = this.state;
    if (value === 'dhcp') setDHCP(true);
    else setDHCP(false);
  }

  handleChange = (event) => {
    const { target } = event;
    const { value } = target;
    this.setState({
      value,
    });
  }

  render() {
    const {
      radioOne, radioTwo, network, purpose, wifiStatus,
    } = this.props;
    const { value } = this.state;
    return (
      <RadioView
        value={value}
        radioOne={radioOne}
        radioTwo={radioTwo}
        network={network}
        purpose={purpose}
        handleChange={this.handleChange}
        wifiStatus={wifiStatus}
      />
    );
  }
}

Radio.defaultProps = {
  purpose: 'ip',
};

Radio.propTypes = {
  radioOne: PropTypes.string.isRequired,
  radioTwo: PropTypes.string.isRequired,
  network: PropTypes.oneOf(['eth', 'wifi']).isRequired,
  purpose: PropTypes.oneOf(['ip', 'dns']),
  wifiStatus: PropTypes.bool.isRequired,
  setDHCP: PropTypes.func.isRequired,
  config: propConf.isRequired,
};

export default props => (
  <ConfigContext.Consumer>
    {config => <Radio {...props} config={config} />}
  </ConfigContext.Consumer>
);
