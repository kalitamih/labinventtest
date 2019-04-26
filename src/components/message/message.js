import React from 'react';
import PropTypes from 'prop-types';
import { ErrFetch, MsgSearchWiFi } from '../../constants';
import './message.css';

const Message = (props) => {
  const { message, handleAnimation } = props;
  let divClass;
  switch (message) {
    case MsgSearchWiFi:
      divClass = 'message search';
      break;
    case 'Form was send incorrectly. Try again.':
      divClass = 'message err-submit';
      break;
    case 'You need to select access point':
      divClass = 'message point';
      break;
    case `${ErrFetch}`:
      divClass = 'message err-fetch';
      break;
    default:
      divClass = 'message';
  }
  return (
    <div
      className={divClass}
      onAnimationEnd={handleAnimation}
    >
      {message}
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
  handleAnimation: PropTypes.func.isRequired,
};

export default Message;
