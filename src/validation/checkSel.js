import { errSel } from '../constants';

const checkSel = (value) => {  
  if (value !== 'Please selected') return '';
  return errSel['en-EN'];
};

export default checkSel;
