import React from 'react';
import PropTypes from 'prop-types';
import './header.css';

const Header = (props) => {
  const { header } = props;
  return (
    <h1>{header}</h1>
  );
};

Header.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Header;
