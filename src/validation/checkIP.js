import { errIP } from '../constants';
import frmIP from './frmIP';

const checkIP = (ip) => {
  const { language } = window.navigator;
  if (frmIP(ip) || !ip) return '';
  return errIP[language];
};

export default checkIP;
