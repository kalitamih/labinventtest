import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './checkbox.css';

class Checkbox extends Component {
  state = {
    status: false,
  }

  handleCheckboxChange = (event) => {
    const { target } = event;
    const { setStatus } = this.props;
    setStatus(target.checked);
    this.setState({
      status: target.checked,
    });
  }

  render() {
    const { description, purpose, wifiStatus } = this.props;
    const checkboxId = `${purpose}`;
    const { status } = this.state;
    const labelClass = `opacity-${!wifiStatus}`;
    return (
      <label htmlFor={checkboxId} className={labelClass}>
        <input
          type="checkbox"
          id={checkboxId}
          disabled={!wifiStatus}
          onChange={this.handleCheckboxChange}
          checked={status}
          name={checkboxId}
          value={status}
        />
        <span>{description}</span>
      </label>
    );
  }
}

Checkbox.defaultProps = {
  wifiStatus: true,
  purpose: 'wifi',
};

Checkbox.propTypes = {
  description: PropTypes.string.isRequired,
  purpose: PropTypes.string,
  wifiStatus: PropTypes.bool,
  setStatus: PropTypes.func.isRequired,
};

export default Checkbox;
