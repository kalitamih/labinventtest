import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import propConf from '../../proptypes';
import ConfigContext from '../../context';
import RoundButton from '../roundButton';
import getPoints from '../../wifiPoints';
import Message from '../message';
import { errFetch } from '../../constants';
import './select2.css';

class Select extends Component {
  state = {
    value: 'Please select',
    selected: '',
    points: [],
    message: '',
    reset: false,
  }

  componentDidMount() {
    const { config } = this.props;
    const { point } = config;
    const array = [];
    if (point) {
      array.push(point);
      this.setState({
        points: array,
        value: point.name,
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

  handleChange = (event) => {
    console.log(event.target.value);
    const { points } = this.state;
    const { config } = this.props;
    const { point, savePoint } = config;
    const { target } = event;
    const { value } = target;
    if ((value === 'closer')) {
      this.setState({
        value: 'Please select',
        selected: 'Please select',
      });
    } else if (point && (value !== 'opener')) {
      this.setState({
        value,
        selected: value,
      });
    } else {
      this.setState({
        value: 'Please select',
        selected: value,
      });
    }
    savePoint(points.filter(item => item.name === value)[0]);
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
      value, selected, message, points,
    } = this.state;
    console.log('props', this.props);
    return (
      <Fragment>
        {message && (
          <Message
            message={message}
            handleAnimation={this.handleAnimation}
          />
        )}
        <div className="dropdown">
          <span className="name-field">
            Wireless Network Name:
            <span className="asterisk">*</span>
          </span>
          <ul className="select">
            <span className="select_label select_label-placeholder">{value}</span>
            <input
              className="select_close"
              type="radio"
              name="point"
              id="closer"
              value="closer"
              disabled={!wifiStatus}
              checked={selected === 'closer'}
              onChange={this.handleChange}
            />
            <li className="select_items">
              <input
                className="select_expand"
                value="opener"
                type="radio"
                name="point"
                id="opener"
                disabled={!wifiStatus}
                checked={selected === 'opener'}
                onChange={this.handleChange}
              />
              <label className="select_closeLabel" htmlFor="closer"></label>
              <ul className="select_options">
                {points && points.map(item => (
                  <li className="select_option" key={item.name}>
                    <input
                      className="select_input"
                      value={item.name}
                      type="radio"
                      name="point"
                      id={item.name}
                      onChange={this.handleChange}
                    />
                    <label className="select_label" htmlFor={item.name}>{item.name}</label>
                  </li>
                ))}
              </ul>
              <label className="select_expandLabel" htmlFor="opener"></label>
            </li>
          </ul>
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
