import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import propConf from '../../proptypes';
import ConfigContext from '../../context';
import RoundButton from '../roundButton';
import getPoints from '../../wifiPoints';
import Message from '../message';
import { checkSel } from '../../validation';
import { errFetch } from '../../constants';
import './select.css';

class Select extends PureComponent {
  state = {
    value: 'Please selected',
    open: false,
    firstLoad: true,
    points: null,
    reset: false,
    message: '',
  }

  selRef = React.createRef();

  componentDidMount() {
    const { config } = this.props;
    const { point } = config;
    if (point) {
      this.setState({
        value: point,
      });
    } else {
      this.setState({
        value: 'Please selected',
      });
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { config } = nextProps;
    if (nextProps.config.reset !== prevState.reset) {
      return {
        value: 'Please selected',
        reset: config.reset,
      };
    }
    return null;
  }

  componentDidUpdate() {
    const { value } = this.state;
    this.selRef.current.setCustomValidity(checkSel(value));
  }

  handleChange = (event) => {
    const { target } = event;
    const { value } = target;
    this.setState({
      value,
    });
  }

  clickSel = () => {
    this.setState(prevState => (
      { open: !prevState.open, firstLoad: false }
    ));
  }

  blurSel = () => {
    this.setState({
      open: false,
    });
  }

  handlePoints = () => {
    getPoints()
      .then(points => this.setState({ points }))
      .catch(() => {
        this.setState({
          message: `${errFetch}`,
        });
      });
  }

  handleAnimation = () => {
    this.setState({
      message: '',
    });
  }

  render() {
    const { wifiStatus } = this.props;
    const {
      open, firstLoad, points, value, message,
    } = this.state;
    const divClass = `dropdown opacity-${!wifiStatus}`;
    return (
      <Fragment>
        {message && (
          <Message
            message={message}
            handleAnimation={this.handleAnimation}
          />
        )}
        <div className={divClass}>
          <span className="name-field">
            Wireless Network Name:
            &nbsp;
            <span className="asterisk">*</span>
          </span>
          { firstLoad && <div className="select" />}
          { open && !firstLoad && <div className="select up" />}
          { !open && !firstLoad && <div className="select down" />}
          <select
            name="point"
            disabled={!wifiStatus}
            onClick={this.clickSel}
            onBlur={this.blurSel}
            onChange={this.handleChange}
            ref={this.selRef}
            value={value}
          >
            <option hidden value={value} className="opacity-true">
              {value}
            </option>
            {points && points.map(item => (
              <optgroup key={item.name}>
                <option value={item.name}>
                  {item.name}
                </option>
              </optgroup>
            ))}
          </select>
        </div>
        <RoundButton wifiStatus={wifiStatus} handlePoints={this.handlePoints} />
      </Fragment>
    );
  }
}

Select.propTypes = {
  wifiStatus: PropTypes.bool.isRequired,
  config: propConf.isRequired,
};

export default props => (
  <ConfigContext.Consumer>
    {config => <Select {...props} config={config} />}
  </ConfigContext.Consumer>
);
