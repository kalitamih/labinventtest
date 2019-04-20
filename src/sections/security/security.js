import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../../components/checkbox';
import Input from '../../components/input';
import { checkboxEnableSecurity } from '../../constants';
import './security.css';

class Security extends Component {
  state = {
    security: false,
  }

  setStatusSecurity = (security) => {
    console.log('security', security);
    this.setState({
      security,
    });
  }

  render() {
    const { security } = this.state;
    const { wifiStatus, validationData } = this.props;
    return (
      <div className="security">
        <Checkbox
          description={checkboxEnableSecurity}
          purpose="security"
          setStatus={this.setStatusSecurity}
          wifiStatus={wifiStatus}
        />
        <Input
          securityStatus={security}
          validationData={validationData}
        />
      </div>
    );
  }
}

Security.propTypes = {
  wifiStatus: PropTypes.bool.isRequired,
  validationData: PropTypes.bool.isRequired,
};

export default Security;
