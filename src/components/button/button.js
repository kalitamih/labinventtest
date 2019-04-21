import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const Button = (props) => {
  const { text } = props;
  const textClass = text;
  const btnClass = `button ${textClass}`.toLowerCase();
  return (
    <button type="submit" className={btnClass} form="data">
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
