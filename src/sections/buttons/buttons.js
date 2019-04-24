import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/button';
import './buttons.css';

const Buttons = (props) => {
  const { handleCancel } = props;
  return (
    <div className="buttons">
      <Button text="Save" handleCancel={handleCancel} />
      <Button text="Cancel" handleCancel={handleCancel} />
    </div>
  );
};

Buttons.propTypes = {
  handleCancel: PropTypes.func.isRequired,
};

export default Buttons;
