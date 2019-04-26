import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Message from '../message';
import { MsgSearchWiFi } from '../../constants';

const View = (props) => {
  const {
    wifiStatus, handleMessage,
    handleAnimation, handlePoints,
    message,
  } = props;
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

View.propTypes = {
  wifiStatus: PropTypes.bool.isRequired,
  handlePoints: PropTypes.func.isRequired,
  handleAnimation: PropTypes.func.isRequired,
  handleMessage: PropTypes.func.isRequired,
  message: PropTypes.oneOf(['', MsgSearchWiFi]).isRequired,
};

export default View;
