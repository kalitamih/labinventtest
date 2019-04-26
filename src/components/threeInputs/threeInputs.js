import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import View from './view';
import ConfigContext from '../../context';
import { propConf } from '../../proptypes';
import { checkIP, checkMask, checkSub } from '../../validation';
import './threeInputs.css';

class ThreeInputs extends PureComponent {
  state = {
    ip: '',
    mask: '',
    gtw: '',
    reset: false,
  }

  ipRef = React.createRef();

  maskRef = React.createRef();

  gtwRef = React.createRef();

  componentDidMount() {
    const { network, config } = this.props;
    this.setState({
      ip: config[`${network}-ip-addr`],
      mask: config[`${network}-mask`],
      gtw: config[`${network}-gtw`],
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { network, config } = nextProps;
    if (nextProps.config.reset !== prevState.reset) {
      return {
        ip: config[`${network}-ip-addr`],
        mask: config[`${network}-mask`],
        gtw: config[`${network}-gtw`],
        reset: config.reset,
      };
    }
    return null;
  }

  componentDidUpdate() {
    const { ip, gtw, mask } = this.state;
    this.ipRef.current.setCustomValidity(checkIP(ip, true));
    this.maskRef.current.setCustomValidity(checkMask(mask));
    this.gtwRef.current.setCustomValidity(checkIP(gtw, false));
    if (!checkIP(gtw) && gtw) this.gtwRef.current.setCustomValidity(checkSub(ip, mask, gtw));
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
    const { network, dhcpIP, wifiStatus } = this.props;
    const { ip, mask, gtw } = this.state;
    return (
      <View
        network={network}
        ip={ip}
        mask={mask}
        gtw={gtw}
        dhcpIP={dhcpIP}
        wifiStatus={wifiStatus}
        handleInputChange={this.handleInputChange}
        ipRef={this.ipRef}
        maskRef={this.maskRef}
        gtwRef={this.gtwRef}
      />
    );
  }
}

ThreeInputs.propTypes = {
  network: PropTypes.oneOf(['eth', 'wifi']).isRequired,
  dhcpIP: PropTypes.bool.isRequired,
  wifiStatus: PropTypes.bool.isRequired,
  config: propConf.isRequired,
};

export default props => (
  <ConfigContext.Consumer>
    {config => <ThreeInputs {...props} config={config} />}
  </ConfigContext.Consumer>
);
