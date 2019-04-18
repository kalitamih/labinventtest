import CIDR from './CIDR';

const validateMask = mask => (
  Object.keys(CIDR).includes(mask)
);

export default validateMask;
