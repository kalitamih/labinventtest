import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import propConf from '../../proptypes';
import ConfigContext from '../../context';
import './radiobuttons.css';

class RadioButtons extends PureComponent {
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
  network: PropTypes.oneOf(['eth', 'wifi']).isRequired,
  purpose: PropTypes.oneOf(['ip', 'dns']),
  wifiStatus: PropTypes.bool.isRequired,
  setDHCP: PropTypes.func.isRequired,
  config: propConf.isRequired,
};

export default props => (
  <ConfigContext.Consumer>
    {config => <RadioButtons {...props} config={config} />}
  </ConfigContext.Consumer>
);
