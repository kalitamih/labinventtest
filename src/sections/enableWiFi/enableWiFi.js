import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../../components/checkbox';
import Select from '../../components/select';
import { enableWiFi } from '../../constants';
import './enableWiFi.css';

const EnableWiFi = (props) => {
  const { setStatus, wifiStatus } = props;
  return (
    <div className="enable-wifi">
      <Checkbox description={enableWiFi} setStatus={setStatus} />
      <div className="wireless-name">
        <Select wifiStatus={wifiStatus} />
      </div>
    </div>
  );
};

EnableWiFi.propTypes = {
  setStatus: PropTypes.func.isRequired,
  wifiStatus: PropTypes.bool.isRequired,
};

export default EnableWiFi;
