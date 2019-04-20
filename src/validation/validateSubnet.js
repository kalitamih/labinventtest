import translateInBinary from './translateInBinary';

const validateSubnet = (ip, mask, gateway) => {
  const binaryIP = translateInBinary(ip);
  const binaryMask = translateInBinary(mask);
  const binaryGateway = translateInBinary(gateway);
  return ((binaryIP && binaryMask) === (binaryGateway && binaryMask));
};

export default validateSubnet;
