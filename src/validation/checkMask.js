import { errMask, emptyMask, CIDR } from '../constants';

const checkMask = (mask) => {
  const { language } = window.navigator;
  if (Object.keys(CIDR).includes(mask)) return '';
  if (!mask) return emptyMask[language];
  return errMask[language];
};

export default checkMask;
