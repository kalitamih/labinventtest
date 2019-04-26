import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../../components/checkbox';
import Input from '../../components/input';
import { enableSec } from '../../constants';

class Security extends Component {
  state = {
    sec: false,
  }

  setSec = (sec) => {
    this.setState({
      sec,
    });
  }

  render() {
    const { sec } = this.state;
    const { wifiStatus } = this.props;
    return (
      <div className="security">
        <Checkbox
          description={enableSec}
          purpose="security"
          setStatus={this.setSec}
          wifiStatus={wifiStatus}
        />
        <Input
          securityStatus={sec}
          wifiStatus={wifiStatus}
        />
      </div>
    );
  }
}

Security.propTypes = {
  wifiStatus: PropTypes.bool.isRequired,
};

export default Security;
