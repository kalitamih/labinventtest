import React from 'react';
import PropTypes from 'prop-types';
import './threeInputs.css';

const View = (props) => {
  const {
    wifiStatus, network, ip,
    gtw, mask, dhcpIP,
    handleInputChange, ipRef,
    maskRef, gtwRef,
  } = props;
  const inputIP = `${network}-ip-addr`;
  const inputMask = `${network}-mask`;
  const inputGtw = `${network}-gtw`;
  const divClass = `input-text opacity-${(dhcpIP || !wifiStatus)}`;
  return (
    <div className={divClass}>
      <label htmlFor={inputIP}>
        <span className="name-field">
          IP address:
          &nbsp;
          <span className="asterisk">*</span>
        </span>
        <input
          name={inputIP}
          type="text"
          id={inputIP}
          disabled={(dhcpIP || !wifiStatus)}
          noValidate={(dhcpIP || !wifiStatus)}
          value={ip}
          onChange={handleInputChange}
          ref={ipRef}
          required
        />
      </label>
      <label htmlFor={inputMask}>
        <span className="name-field">
          Subnet Mask:
          &nbsp;
          <span className="asterisk">*</span>
        </span>
        <input
          name={inputMask}
          type="text"
          id={inputMask}
          disabled={(dhcpIP || !wifiStatus)}
          noValidate={(dhcpIP || !wifiStatus)}
          value={mask}
          onChange={handleInputChange}
          ref={maskRef}
          required
        />
      </label>
      <label htmlFor={inputGtw}>
        <span className="name-field">
          Default gateway:
        </span>
        <input
          name={inputGtw}
          type="text"
          id={inputGtw}
          disabled={(dhcpIP || !wifiStatus)}
          noValidate={(dhcpIP || !wifiStatus)}
          value={gtw}
          onChange={handleInputChange}
          ref={gtwRef}
        />
      </label>
    </div>
  );
};

View.propTypes = {
  network: PropTypes.oneOf(['eth', 'wifi']).isRequired,
  ip: PropTypes.string.isRequired,
  mask: PropTypes.string.isRequired,
  gtw: PropTypes.string.isRequired,
  dhcpIP: PropTypes.bool.isRequired,
  wifiStatus: PropTypes.bool.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  ipRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
  maskRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
  gtwRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
};

export default View;
