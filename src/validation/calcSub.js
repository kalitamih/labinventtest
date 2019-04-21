const calcSub = (ip, mask) => (
  ip.map((item, index) => (item * mask[index])).join('')
);

export default calcSub;
