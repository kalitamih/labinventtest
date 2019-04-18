const translateInBinary = ip => (
  ip.split('.').map(item => parseInt(item, 10).toString(2)).join('')
);

export default translateInBinary;
