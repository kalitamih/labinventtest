import { requirements } from '../constants';

const passwordRequirements = (password) => {
  if (password.length < 8) return false;
  return requirements.every(rule => rule.test(password));
};

export default passwordRequirements;
