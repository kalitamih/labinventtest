import PropTypes from 'prop-types';

const propPoint = PropTypes.shape({
  favorite: PropTypes.bool,
  name: PropTypes.string,
  security: PropTypes.arrayOf(PropTypes.string),
  strength: PropTypes.number,
});

export default propPoint;
