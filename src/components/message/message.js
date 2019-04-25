import React from 'react';
import PropTypes from 'prop-types';
import { errFetch } from '../../constants';
import './message.css';

const Message = (props) => {
  const { message, handleAnimation } = props;
  let divClass;
  switch (message) {
    case 'Searching access points':
      divClass = 'message search';
      break;
    case 'Form was send incorrectly. Try again.':
      divClass = 'message err-submit';
      break;
    case 'You need to select access point':
      divClass = 'message point';
      break;
    case `${errFetch}`:
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
