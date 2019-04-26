import React from 'react';
import PropTypes from 'prop-types';
import './checkbox.css';

const CheckboxView = (props) => {
  const {
    wifiStatus, purpose,
    handleCheckboxChange, status, description,
  } = props;
  const labelClass = `opacity-${!wifiStatus}`;
  return (
    <label htmlFor={purpose} className={labelClass}>
      <input
        type="checkbox"
        id={purpose}
        disabled={!wifiStatus}
        onChange={handleCheckboxChange}
        checked={status}
        name={purpose}
        value={status}
      />
      <span>{description}</span>
    </label>
  );
};

CheckboxView.propTypes = {
  description: PropTypes.string.isRequired,
  purpose: PropTypes.oneOf(['security', 'wifi']).isRequired,
  wifiStatus: PropTypes.bool.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  status: PropTypes.bool.isRequired,
};

export default CheckboxView;
