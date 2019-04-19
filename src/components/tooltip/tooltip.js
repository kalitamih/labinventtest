import React from 'react';
import PropTypes from 'prop-types';
import './tooltip.css';

const Tooltip = (props) => {
  const { inscription } = props;
  return (
    <button className="tooltips" type="button">
      <span>{inscription}</span>
    </button>
  );
};

Tooltip.propTypes = {
  inscription: PropTypes.string.isRequired,
};

export default Tooltip;
