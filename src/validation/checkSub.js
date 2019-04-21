import transInBin from './transInBin';
import { errGtw } from '../constants';
import calcSub from './calcSub';

const checkSub = (ip, mask, gtw) => {
  const { language } = window.navigator;
  const binIP = transInBin(ip);
  const binMask = transInBin(mask);
  const binGate = transInBin(gtw);
  const subIP = calcSub(binIP, binMask);
  const subGate = calcSub(binGate, binMask);
  if (subIP === subGate) return '';
  return errGtw[language];
};

export default checkSub;
