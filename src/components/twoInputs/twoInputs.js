import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import View from './view';
import { propConf } from '../../proptypes';
import ConfigContext from '../../context';
import { checkIP } from '../../validation';

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
    const { main, sub } = this.state;
    return (
      <View
        network={network}
        main={main}
        sub={sub}
        dhcpDNS={dhcpDNS}
        wifiStatus={wifiStatus}
        handleInputChange={this.handleInputChange}
        mainRef={this.mainRef}
        subRef={this.subRef}
      />
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
