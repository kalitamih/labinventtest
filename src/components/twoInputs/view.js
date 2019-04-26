import React from 'react';
import PropTypes from 'prop-types';

const View = (props) => {
  const {
    wifiStatus, network,
    main, sub, dhcpDNS,
    handleInputChange,
    mainRef, subRef,
  } = props;
  const inputMain = `${network}-main-dns`;
  const inputSub = `${network}-sub-dns`;
  const status = (dhcpDNS || !wifiStatus);
  const divClass = `input-text opacity-${status}`;
  return (
    <div className={divClass}>
      <label htmlFor={inputMain}>
        <span className="name-field">
          Prefered DNS server:
          &nbsp;
          <span className="asterisk">*</span>
        </span>
        <input
          name={inputMain}
          type="text"
          id={inputMain}
          disabled={status}
          noValidate={status}
          value={main}
          onChange={handleInputChange}
          ref={mainRef}
          required
        />
      </label>
      <label htmlFor={inputSub}>
        <span className="name-field">
          Alternative DNS server:
        </span>
        <input
          name={inputSub}
          type="text"
          id={inputSub}
          disabled={status}
          noValidate={status}
          value={sub}
          onChange={handleInputChange}
          ref={subRef}
        />
      </label>
    </div>
  );
};

View.propTypes = {
  network: PropTypes.oneOf(['eth', 'wifi']).isRequired,
  main: PropTypes.string.isRequired,
  sub: PropTypes.string.isRequired,
  dhcpDNS: PropTypes.bool.isRequired,
  wifiStatus: PropTypes.bool.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  mainRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
  subRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
};

export default View;
