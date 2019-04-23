import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ConfigContext from '../../context';
import { checkIP, checkMask, checkSub } from '../../validation';
import './threeInputs.css';

class ThreeInputs extends PureComponent {
  state = {
    ip: '',
    mask: '',
    gtw: '',
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

  componentDidUpdate() {
    const { ip, gtw, mask } = this.state;
    this.ipRef.current.setCustomValidity(checkIP(ip));
    this.maskRef.current.setCustomValidity(checkMask(mask));
    this.gtwRef.current.setCustomValidity(checkIP(gtw));
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
    console.log(this.props);
    const { network, dhcpIP, wifiStatus } = this.props;
    const inputIP = `${network}-ip-addr`;
    const inputMask = `${network}-mask`;
    const inputGtw = `${network}-gtw`;
    const { ip, mask, gtw } = this.state;
    const divClass = `input-text opacity-${(dhcpIP || !wifiStatus)}`;
    return (
      <div className={divClass}>
        <label htmlFor={inputIP}>
          <span className="name-field">
            IP address:
            &nbsp;
            <span className="asterisk">*</span>
          </span>
          <input
            name={inputIP}
            type="text"
            id={inputIP}
            disabled={(dhcpIP || !wifiStatus)}
            noValidate={(dhcpIP || !wifiStatus)}
            value={ip}
            onChange={this.handleInputChange}
            ref={this.ipRef}
            required
          />
        </label>
        <label htmlFor={inputMask}>
          <span className="name-field">
            Subnet Mask:
            &nbsp;
            <span className="asterisk">*</span>
          </span>
          <input
            name={inputMask}
            type="text"
            id={inputMask}
            disabled={(dhcpIP || !wifiStatus)}
            noValidate={(dhcpIP || !wifiStatus)}
            value={mask}
            onChange={this.handleInputChange}
            ref={this.maskRef}
            required
          />
        </label>
        <label htmlFor={inputGtw}>
          <span className="name-field">
            Default gateway:
          </span>
          <input
            name={inputGtw}
            type="text"
            id={inputGtw}
            disabled={(dhcpIP || !wifiStatus)}
            noValidate={(dhcpIP || !wifiStatus)}
            value={gtw}
            onChange={this.handleInputChange}
            ref={this.gtwRef}
          />
        </label>
      </div>
    );
  }
}

ThreeInputs.propTypes = {
  network: PropTypes.string.isRequired,
  dhcpIP: PropTypes.bool.isRequired,
  wifiStatus: PropTypes.bool.isRequired,
};

export default props => (
  <ConfigContext.Consumer>
    {config => <ThreeInputs {...props} config={config} />}
  </ConfigContext.Consumer>
);
