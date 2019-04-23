import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import RoundButton from '../roundButton';
import getPoints from '../../wifiPoints';
import { checkSel } from '../../validation';
import { errFetch } from '../../constants';
import './select.css';

class Select extends PureComponent {
  state = {
    value: '',
    open: false,
    firstLoad: true,
    points: null,
  }

  selRef = React.createRef();

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
      .catch((err) => {
        console.log(`${errFetch}${err}`);
        alert('Произошла ошибкаю Попробуйте еще раз');
      });
  }

  render() {
    const { wifiStatus } = this.props;
    const { open, firstLoad, points } = this.state;
    const divClass = `dropdown opacity-${!wifiStatus}`;
    return (
      <Fragment>
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
          >
            <option hidden value="" className="opacity-true">
              Please selected
            </option>
            {points && points.map(item => (
              <optgroup key={item.name}>
                <option>
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
};

export default Select;
