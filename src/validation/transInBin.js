const transInBin = (ip) => {
  const binOctets = ip.split('.').map(item => parseInt(item, 10).toString(2));
  const arrayBits = binOctets.toString().split(',');
  const arrayBites = arrayBits.map((item) => {
    const nulls = Array(8 - item.length).fill('0');
    return [...nulls, ...item].join('');
  });
  return arrayBites.join('').split('');
};

export default transInBin;
