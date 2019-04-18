import { amountOctestsInIPv4 } from '../constants/constants';

const validateIP = (ip) => {
  const octets = ip.split('.');
  if (octets.length === 4) {
    return octets.every(octet => (
      (parseInt(octet, 10) >= 0 && parseInt(octet, 10) <= 255)
    ));
  }
  return false;
};

export default validateIP;
