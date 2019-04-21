import React from 'react';
import PropTypes from 'prop-types';
import './roundButton.css';

const RoundButton = (props) => {
  const { wifiStatus, handlePoints } = props;
  return (
    <button type="button" className="round" onClick={handlePoints} disabled={!wifiStatus}>
      <div className="arrow-round" />
    </button>
  );
};

RoundButton.propTypes = {
  wifiStatus: PropTypes.bool.isRequired,
  handlePoints: PropTypes.func.isRequired,
};

export default RoundButton;
