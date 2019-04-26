import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { propPoint } from '../../proptypes';
import RoundButton from '../roundButton';
import Message from '../message';
import { ErrFetch } from '../../constants';
import './select.css';

const SelectView = (props) => {
  const {
    wifiStatus, arrowClass, message,
    handleAnimation, valueSlt, slt,
    handleChange, liClass, points, handlePoints,
  } = props;  
  const divClass = `dropdown opacity-${!wifiStatus}`;
  return (
    <Fragment>
      <div className={arrowClass} />
      {message && (
        <Message
          message={message}
          handleAnimation={handleAnimation}
        />
      )}
      <div className={divClass}>
        <span className="name-field">
          Wireless Network Name:
          <span className="asterisk">*</span>
        </span>
        <ul className="select">
          <span className="select_label select_label-placeholder">{valueSlt}</span>
          <input
            className="select_close"
            type="radio"
            name="point"
            id="closer"
            value="closer"
            disabled={!wifiStatus}
            checked={slt === 'closer'}
            onChange={handleChange}
          />
          <li className={liClass}>
            <input
              className="select_expand"
              value="opener"
              type="radio"
              name="point"
              id="opener"
              disabled={!wifiStatus}
              checked={slt === 'opener'}
              onChange={handleChange}
            />
            <label className="select_closeLabel" htmlFor="closer"></label>
            <ul className="select_options">
              {points.length !== 0 && points.map(item => (
                <li className="select_option" key={item.name}>
                  <input
                    className="select_input"
                    value={item.name}
                    type="radio"
                    name="point"
                    id={item.name}
                    onChange={handleChange}
                    checked={slt === item.name}
                  />
                  <label className="select_label" htmlFor={item.name}>{item.name}</label>
                </li>
              ))}
            </ul>
            <label className="select_expandLabel" htmlFor="opener"></label>
          </li>
        </ul>
      </div>
      <RoundButton wifiStatus={wifiStatus} handlePoints={handlePoints} />
    </Fragment>
  );
};

SelectView.propTypes = {
  slt: PropTypes.string.isRequired,
  valueSlt: PropTypes.string.isRequired,
  arrowClass: PropTypes.oneOf(['arrow', 'arrow up', 'arrow down']).isRequired,
  liClass: PropTypes.oneOf(['select_items violet', 'select_items']).isRequired,
  message: PropTypes.oneOf(['', ErrFetch]).isRequired,
  wifiStatus: PropTypes.bool.isRequired,
  handlePoints: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleAnimation: PropTypes.func.isRequired,
  points: PropTypes.arrayOf(propPoint).isRequired,
};

export default SelectView;
