import React from 'react';
import './header.css';

const Header = (props) => {
  const { header } = props;
  return (
    <h1>{header}</h1>
  );
};

export default Header;
