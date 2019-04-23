import byStrength from './sort';

const handlePoints = (arr) => {
  const favorite = arr.filter(item => item.favorite);
  const usual = arr.filter(item => !item.favorite);
  favorite.sort(byStrength);
  usual.sort(byStrength);
  console.log(...favorite, ...usual);
  return [...favorite, ...usual];
};

export default handlePoints;
