import { reqmts } from '../constants';

const pswdReqmts = (pswd) => {
  if (pswd.length < 8) return false;
  return reqmts.every(rule => rule.test(pswd));
};

export default pswdReqmts;
