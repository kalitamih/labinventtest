import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const Button = (props) => {
  const { text, handleCancel } = props;
  const textClass = text;
  const btnClass = `button ${textClass}`.toLowerCase();
  if (text === 'Save') {
    return (
      <button type="submit" className={btnClass} form="data">
        {text}
      </button>
    );
  }
  return (
    <button type="button" className={btnClass} onClick={handleCancel}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.oneOf(['Save', 'Cancel']).isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default Button;
