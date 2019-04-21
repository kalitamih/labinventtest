import { amountOctestsInIPv4 } from '../constants';

const frmIP = (ip) => {
  const octets = ip.split('.');
  if (octets.length === amountOctestsInIPv4) {
    return octets.every(octet => (
      parseInt(octet, 10) >= 0
      && parseInt(octet, 10) <= 255
      && !/\D/.test(octet)
      && !(octet[0] === '0' && octet.length > 1)
    ));
  }
  return false;
};

export default frmIP;
