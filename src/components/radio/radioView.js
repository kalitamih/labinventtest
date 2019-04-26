import React from 'react';
import PropTypes from 'prop-types';
import './radio.css';

const RadioView = (props) => {
  const {
    wifiStatus, purpose, network,
    handleChange, value,
    radioOne, radioTwo,
  } = props;
  const inputDHCP = `${network}-${purpose}-dhcp`;
  const inputStat = `${network}-${purpose}-static`;
  const inputName = `${network}-${purpose}`;
  const divClass = `radiobuttons opacity-${!wifiStatus}`;
  return (
    <div className={divClass}>
      <label htmlFor={inputDHCP}>
        <input
          type="radio"
          value="dhcp"
          id={inputDHCP}
          name={inputName}
          disabled={!wifiStatus}
          checked={value === 'dhcp'}
          onChange={handleChange}
        />
        <span>{radioOne}</span>
      </label>
      <label htmlFor={inputStat}>
        <input
          type="radio"
          value="static"
          id={inputStat}
          name={inputName}
          disabled={!wifiStatus}
          checked={value === 'static'}
          onChange={handleChange}
        />
        <span>{radioTwo}</span>
      </label>
    </div>
  );
};

RadioView.propTypes = {
  radioOne: PropTypes.string.isRequired,
  radioTwo: PropTypes.string.isRequired,
  network: PropTypes.oneOf(['eth', 'wifi']).isRequired,
  purpose: PropTypes.oneOf(['ip', 'dns']).isRequired,
  value: PropTypes.oneOf(['dhcp', 'static']).isRequired,
  handleChange: PropTypes.func.isRequired,
  wifiStatus: PropTypes.bool.isRequired,
};

export default RadioView;
