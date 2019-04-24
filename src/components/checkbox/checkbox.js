import React, { Component } from 'react';
import PropTypes from 'prop-types';
import propConf from '../../proptypes';
import ConfigContext from '../../context';
import './checkbox.css';

class Checkbox extends Component {
  state = {
    status: false,
    reset: false,
  }

  componentDidMount() {
    const { purpose, config, setStatus } = this.props;
    setStatus(config[`${purpose}`]);
    this.setState({
      status: config[`${purpose}`],
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { config, purpose, setStatus } = nextProps;
    if (nextProps.config.reset !== prevState.reset) {
      setStatus(config[`${purpose}`]);
      return {
        status: config[`${purpose}`],
        reset: config.reset,
      };
    }
    return null;
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
  purpose: PropTypes.oneOf(['security', 'wifi']),
  wifiStatus: PropTypes.bool,
  setStatus: PropTypes.func.isRequired,
  config: propConf.isRequired,
};

export default props => (
  <ConfigContext.Consumer>
    {config => <Checkbox {...props} config={config} />}
  </ConfigContext.Consumer>
);
