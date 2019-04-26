import { wrongPswd, setPswd } from '../constants';
import pswdReqmts from './pswdReqmts';

const checkPsw = (psw) => {  
  if (!psw) return setPswd['en-EN'];
  if (pswdReqmts(psw)) return '';
  return wrongPswd['en-EN'];
};

export default checkPsw;
