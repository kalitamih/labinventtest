import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const Button = (props) => {
  const { text } = props;
  return (
    <button type="button" className="button">
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
