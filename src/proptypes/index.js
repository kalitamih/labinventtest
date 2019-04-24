import PropTypes from 'prop-types';

const propConf = PropTypes.shape({
  'eth-ip': PropTypes.string,
  'eth-ip-addr': PropTypes.string,
  'eth-mask': PropTypes.string,
  'eth-gtw': PropTypes.string,
  'eth-dns': PropTypes.string,
  'eth-main-dns': PropTypes.string,
  'eth-sub-dns': PropTypes.string,
  wifi: PropTypes.bool,
  point: PropTypes.string,
  security: PropTypes.bool,
  key: PropTypes.string,
  'wifi-ip': PropTypes.string,
  'wifi-ip-addr': PropTypes.string,
  'wifi-mask': PropTypes.string,
  'wifi-gtw': PropTypes.string,
  'wifi-dns': PropTypes.string,
  'wifi-main-dns': PropTypes.string,
  'wifi-sub-dns': PropTypes.string,
  reset: PropTypes.bool,
});

export default propConf;
