import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import propConf from '../../proptypes';
import ConfigContext from '../../context';
import { checkIP } from '../../validation';
import './twoInputs.css';

class TwoInputs extends PureComponent {
  state = {
    main: '',
    sub: '',
    reset: false,
  }

  mainRef = React.createRef();

  subRef = React.createRef();

  componentDidMount() {
    const { network, config } = this.props;
    this.setState({
      main: config[`${network}-main-dns`],
      sub: config[`${network}-sub-dns`],
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { network, config } = nextProps;
    if (nextProps.config.reset !== prevState.reset) {
      return {
        main: config[`${network}-main-dns`],
        sub: config[`${network}-sub-dns`],
        reset: config.reset,
      };
    }
    return null;
  }

  componentDidUpdate() {
    const { main, sub } = this.state;
    this.mainRef.current.setCustomValidity(checkIP(main));
    this.subRef.current.setCustomValidity(checkIP(sub));
  }

  handleInputChange = (event) => {
    const { target } = event;
    const { value } = target;
    const { name } = target;
    const key = name.split('-')[1];
    this.setState({
      [key]: value,
    });
  }

  render() {
    const { network, wifiStatus, dhcpDNS } = this.props;
    const inputMain = `${network}-main-dns`;
    const inputSub = `${network}-sub-dns`;
    const { main, sub } = this.state;
    const status = (dhcpDNS || !wifiStatus);
    const divClass = `input-text opacity-${status}`;
    return (
      <div className={divClass}>
        <label htmlFor={inputMain}>
          <span className="name-field">
            Prefered DNS server:
            &nbsp;
            <span className="asterisk">*</span>
          </span>
          <input
            name={inputMain}
            type="text"
            id={inputMain}
            disabled={status}
            noValidate={status}
            value={main}
            onChange={this.handleInputChange}
            ref={this.mainRef}
            required
          />
        </label>
        <label htmlFor={inputSub}>
          <span className="name-field">
            Alternative DNS server:
          </span>
          <input
            name={inputSub}
            type="text"
            id={inputSub}
            disabled={status}
            noValidate={status}
            value={sub}
            onChange={this.handleInputChange}
            ref={this.subRef}
          />
        </label>
      </div>
    );
  }
}

TwoInputs.propTypes = {
  network: PropTypes.oneOf(['eth', 'wifi']).isRequired,
  wifiStatus: PropTypes.bool.isRequired,
  dhcpDNS: PropTypes.bool.isRequired,
  config: propConf.isRequired,
};

export default props => (
  <ConfigContext.Consumer>
    {config => <TwoInputs {...props} config={config} />}
  </ConfigContext.Consumer>
);
