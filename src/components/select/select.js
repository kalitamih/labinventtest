import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './select.css';

class Select extends Component {
  state = {
    value: '',
  }

  handleChange = (event) => {
    const { target } = event;
    const { value } = target;
    console.log(value);
    this.setState({
      value,
    });
  }

  render() {
    const { wifiStatus } = this.props;
    const array = ['SSID1', 'SSID2', 'SSID4'];
    const { value } = this.state;
    return (
      <div className="dropdown">
        <span className="name-field">
          Wireless Network Name:
          <span className="asterisk">*</span>
        </span>
        <ul className="select">
          <span className="select_label select_label-placeholder">Please select</span>
          <input
            className="select_close"
            type="radio"
            name="awesomeness"
            id="awesomeness-close"
            value="awesomeness-close"
            disabled={!wifiStatus}
            checked={value === 'awesomeness-close'}
            onChange={this.handleChange}
          />
          <li className="select_items">
            <input
              className="select_expand"
              value="awesomeness-opener"
              type="radio"
              name="awesomeness"
              id="awesomeness-opener"
              disabled={!wifiStatus}
              checked={value === 'awesomeness-opener'}
              onChange={this.handleChange}
            />
            <label className="select_closeLabel" htmlFor="awesomeness-close"></label>
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
            <label className="select_expandLabel" htmlFor="awesomeness-opener"></label>
          </li>
        </ul>
      </div>
    );
  }
}

Select.propTypes = {
  wifiStatus: PropTypes.bool.isRequired,
};


export default Select;
