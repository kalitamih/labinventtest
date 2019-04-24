import { errSel } from '../constants';

const checkSel = (value) => {
  const { language } = window.navigator;
  if (value !== 'Please selected') return '';
  return errSel[language];
};

export default checkSel;
