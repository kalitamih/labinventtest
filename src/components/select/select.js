import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Tooltip from '../tooltip';
import './select.css';

class Select extends PureComponent {
  state = {
    value: 'initial',
    valid: true,
  }

  componentDidMount() {
    console.log(this.state);
  }

  componentDidUpdate() {
    const { validationData } = this.props;
    if (validationData) this.validateInputs();
  }

  handleChange = (event) => {
    const { target } = event;
    const { value } = target;
    console.log(value);
    this.setState({
      value,
    });
  }

  validateInputs = () => {
    const { value } = this.state;
    if (!['open', 'close', 'initial'].includes(value)) this.setState({ valid: true });
    else this.setState({ valid: false });
  }

  render() {
    const { wifiStatus } = this.props;
    const array = ['SSID1', 'SSID2', 'SSID4'];
    const { value, valid } = this.state;
    return (
      <div className="dropdown">
        <span className="name-field">
          Wireless Network Name:
          <span className="asterisk">*</span>
        </span>
        <ul className="select">
          <span className="select_label select_label-placeholder">Please select</span>
          <Tooltip
            text="Not selected network"
            valid={valid}
            input={value}
            WiFiOFF={!wifiStatus}
            dhcp={false}
          />
          <input
            className="select_close"
            type="radio"
            name="awesomeness"
            id="close"
            value="close"
            disabled={!wifiStatus}
            checked={value === 'close'}
            onChange={this.handleChange}
          />
          <li className="select_items">
            <input
              className="select_expand"
              value="open"
              type="radio"
              name="awesomeness"
              id="open"
              disabled={!wifiStatus}
              checked={value === 'open'}
              onChange={this.handleChange}
            />
            <label className="select_closeLabel" htmlFor="close"></label>
            <ul className="select_options">
              { array.map(item => (
                <li className="select_option" key={item}>
                  <input
                    className="select_input"
                    value={item}
                    type="radio"
                    name="awesomeness"
                    id={item}
                    onChange={this.handleChange}
                  />
                  <label className="select_label" htmlFor={item}>{item}</label>
                </li>
              ))}
            </ul>
            <label className="select_expandLabel" htmlFor="open"></label>
          </li>
        </ul>
      </div>
    );
  }
}

Select.propTypes = {
  wifiStatus: PropTypes.bool.isRequired,
  validationData: PropTypes.bool.isRequired,
};

export default Select;
