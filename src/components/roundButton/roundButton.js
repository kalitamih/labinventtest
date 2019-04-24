import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Message from '../message';
import './roundButton.css';

const RoundButton = (props) => {
  const { wifiStatus, handlePoints } = props;
  const [message, setMessage] = useState('');

  const handleAnimation = () => {
    setMessage('');
  };

  const handleMessage = () => {
    setMessage('Searching access points');
  };

  return (
    <Fragment>
      { message && (
        <Message
          message={message}
          handleAnimation={handleAnimation}
        />
      )}
      <button
        type="button"
        className="round"
        onClick={() => { handlePoints(); handleMessage(); }}
        disabled={!wifiStatus}
      >
        <div className="arrow-round" />
      </button>
    </Fragment>
  );
};

RoundButton.propTypes = {
  wifiStatus: PropTypes.bool.isRequired,
  handlePoints: PropTypes.func.isRequired,
};

export default RoundButton;
