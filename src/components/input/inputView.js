import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

const InputView = (props) => {
  const {
    wifiStatus, securityStatus,
    handleInputChange, pswd, inputRef,
  } = props;
  const status = !securityStatus || !wifiStatus;
  const divClass = `input-text opacity-${status}`;
  return (
    <div className={divClass}>
      <label htmlFor="securityKey">
        <span className="name-field">
          Security Key:
          &nbsp;
          <span className="asterisk">*</span>
        </span>
        <input
          name="key"
          type="password"
          id="securityKey"
          disabled={status}
          noValidate={status}
          value={pswd}
          onChange={handleInputChange}
          autoComplete="off"
          ref={inputRef}
          required
        />
      </label>
    </div>
  );
};

InputView.propTypes = {
  pswd: PropTypes.string.isRequired,
  securityStatus: PropTypes.bool.isRequired,
  wifiStatus: PropTypes.bool.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  inputRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
};

export default InputView;
