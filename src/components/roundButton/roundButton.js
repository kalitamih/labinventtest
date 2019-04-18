import React from 'react';
import PropTypes from 'prop-types';
import './roundButton.css';

const RoundButton = (props) => {
  const { wifiStatus } = props;
  return (
    <button type="button" className="round" disabled={!wifiStatus}>
      <div className="arrow-round" />
    </button>
  );
};

RoundButton.propTypes = {
  wifiStatus: PropTypes.bool.isRequired,
};

export default RoundButton;
