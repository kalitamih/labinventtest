import { errIP } from '../constants';
import frmIP from './frmIP';

const checkIP = (ip, required) => {
  if (!ip && required) return 'You have to fill this field';
  if (frmIP(ip) || !ip) return '';
  return errIP['en-EN'];
};

export default checkIP;
