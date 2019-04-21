import React from 'react';
import PropTypes from 'prop-types';
import ThreeInputs from '../../components/threeInputs';
import TwoInputs from '../../components/twoInputs';
import RadioButtons from '../../components/radiobuttons';
import {
  radioOne, radioTwo, radioThree, radioFour,
} from '../../constants';
import './networkSettings.css';

const NetworkSettings = (props) => {
  const {
    network, wifiStatus, dhcpIP, dhcpDNS, setIPdhcp, setDNSdhcp,
  } = props;
  return (
    <div className="networkSettings">
      <RadioButtons
        radioOne={radioOne}
        radioTwo={radioTwo}
        network={network}
        wifiStatus={wifiStatus}
        setDHCP={setIPdhcp}
      />
      <ThreeInputs
        network={network}
        dhcp={false}
        wifiStatus={wifiStatus}
        dhcpIP={dhcpIP}
      />
      <RadioButtons
        radioOne={radioThree}
        radioTwo={radioFour}
        network={network}
        purpose="dns"
        wifiStatus={wifiStatus}
        setDHCP={setDNSdhcp}
      />
      <TwoInputs
        network={network}
        dhcp={false}
        wifiStatus={wifiStatus}
        dhcpDNS={dhcpDNS}
      />
    </div>
  );
};

NetworkSettings.defaultProps = {
  network: 'eth',
  wifiStatus: true,
};

NetworkSettings.propTypes = {
  network: PropTypes.string,
  wifiStatus: PropTypes.bool,
  dhcpIP: PropTypes.bool.isRequired,
  dhcpDNS: PropTypes.bool.isRequired,
  setIPdhcp: PropTypes.func.isRequired,
  setDNSdhcp: PropTypes.func.isRequired,
};

export default NetworkSettings;
