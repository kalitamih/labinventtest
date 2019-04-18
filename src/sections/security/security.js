import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../../components/checkbox';
import Input from '../../components/input';
import { checkboxEnableSecurity } from '../../constants/constants';
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
    const { wifiStatus } = this.props;
    return (
      <div className="security">
        <Checkbox
          description={checkboxEnableSecurity}
          purpose="security"
          setStatus={this.setStatusSecurity}
          wifiStatus={wifiStatus}
        />
        <Input securityStatus={security} wifiStatus={wifiStatus} />
      </div>
    );
  }
}

Security.propTypes = {
  wifiStatus: PropTypes.bool.isRequired,
};

export default Security;
