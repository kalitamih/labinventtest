import transInBin from './transInBin';
import { errGtw } from '../constants';
import calcSub from './calcSub';

const checkSub = (ip, mask, gtw) => {
  const binIP = transInBin(ip);
  const binMask = transInBin(mask);
  const binGate = transInBin(gtw);
  const subIP = calcSub(binIP, binMask);
  const subGate = calcSub(binGate, binMask);
  if (subIP === subGate) return '';
  return errGtw['en-EN'];
};

export default checkSub;
