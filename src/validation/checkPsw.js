import { wrongPswd, setPswd } from '../constants';
import pswdReqmts from './pswdReqmts';

const checkPsw = (psw) => {
  const { language } = window.navigator;
  if (!psw) return setPswd[language];
  if (pswdReqmts(psw)) return '';
  return wrongPswd[language];
};

export default checkPsw;
