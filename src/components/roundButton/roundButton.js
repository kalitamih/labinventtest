import React, { useState } from 'react';
import PropTypes from 'prop-types';
import View from './view';
import { MsgSearchWiFi } from '../../constants';
import './roundButton.css';

const RoundButton = (props) => {
  const { wifiStatus, handlePoints } = props;
  const [message, setMessage] = useState('');

  const handleAnimation = () => {
    setMessage('');
  };

  const handleMessage = () => {
    setMessage(MsgSearchWiFi);
  };

  return (
    <View
      handlePoints={handlePoints}
      handleAnimation={handleAnimation}
      handleMessage={handleMessage}
      message={message}
      wifiStatus={wifiStatus}
    />
  );
};

RoundButton.propTypes = {
  wifiStatus: PropTypes.bool.isRequired,
  handlePoints: PropTypes.func.isRequired,
};

export default RoundButton;
