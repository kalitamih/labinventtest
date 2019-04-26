import { errMask, emptyMask, CIDR } from '../constants';

const checkMask = (mask) => {
  if (Object.keys(CIDR).includes(mask)) return '';
  if (!mask) return emptyMask['en-EN'];
  return errMask['en-EN'];
};

export default checkMask;
