import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../../components/checkbox';
import Select from '../../components/select';
import RoundButton from '../../components/roundButton';
import { checkboxEnableWiFi } from '../../constants';
import './enableWiFi.css';

const EnableWiFi = (props) => {
  const { setStatus, wifiStatus, validationData } = props;
  return (
    <div className="enable-wifi">
      <Checkbox description={checkboxEnableWiFi} setStatus={setStatus} />
      <div className="wireless-name">
        <Select
          wifiStatus={wifiStatus}
          validationData={validationData}
        />
        <RoundButton wifiStatus={wifiStatus} />
      </div>
    </div>
  );
};

EnableWiFi.propTypes = {
  setStatus: PropTypes.func.isRequired,
  wifiStatus: PropTypes.bool.isRequired,
  validationData: PropTypes.bool.isRequired,
};

export default EnableWiFi;
