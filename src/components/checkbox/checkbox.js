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
    console.log(target.checked);
    this.setState({
      status: target.checked,
    });
  }

  render() {
    const { description, purpose, wifiStatus } = this.props;
    const checkboxId = `enable-${purpose}`;
    const { status } = this.state;
    return (
      <form>
        <label htmlFor={checkboxId}>
          <input
            type="checkbox"
            id={checkboxId}
            disabled={!wifiStatus}
            onChange={this.handleCheckboxChange}
            checked={status}
          />
          <span>{description}</span>
        </label>
      </form>
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
