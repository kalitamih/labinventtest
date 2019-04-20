import React from 'react';
import PropTypes from 'prop-types';
import './tooltip.css';

const Tooltip = (props) => {
  const {
    text, valid, dhcp, WiFiOFF, input,
  } = props;
  if ((input === '') || WiFiOFF || dhcp || valid) return null;
  return (
    <button className="tooltips" type="button">
      <span>{text}</span>
    </button>
  );
};

Tooltip.defaultProps = {
  valid: true,
  dhcp: true,
  WiFiOFF: false,
};

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  valid: PropTypes.bool,
  dhcp: PropTypes.bool,
  WiFiOFF: PropTypes.bool,
  input: PropTypes.string.isRequired,
};

export default Tooltip;
