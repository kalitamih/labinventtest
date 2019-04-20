import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { errorSelect } from '../../constants';
import './select.css';

class Select extends PureComponent {
  state = {
    value: '',
    open: false,
    firstLoad: true,
  }

  selectRef = React.createRef();

  componentDidUpdate() {
    const { value } = this.state;
    const { language } = window.navigator;
    if (value) this.selectRef.current.setCustomValidity('');
    else this.selectRef.current.setCustomValidity(errorSelect[language]);
  }

  handleChange = (event) => {
    const { target } = event;
    const { value } = target;
    console.log(target);
    this.setState({
      value,
    });
  }

  clickSelect = () => {
    this.setState(prevState => (
      { open: !prevState.open, firstLoad: false }
    ));
  }

  blurSelect = () => {
    this.setState({
      open: false,
    });
  }

  render() {
    const { wifiStatus } = this.props;
    const array = ['SSID1', 'SSID2', 'SSID4'];
    const { open, firstLoad } = this.state;
    return (
      <div className="dropdown">
        <span className="name-field">
          Wireless Network Name:
          <span className="asterisk">*</span>
        </span>
        { firstLoad && <div className="select" />}
        { open && !firstLoad && <div className="select up" />}
        { !open && !firstLoad && <div className="select down" />}
        <select
          disabled={!wifiStatus}
          onClick={this.clickSelect}
          onBlur={this.blurSelect}
          onChange={this.handleChange}
          ref={this.selectRef}
        >
          <option hidden value="">
            Выбрать
          </option>
          {array.map(item => (<option key={item}>{item}</option>))}
        </select>
      </div>
    );
  }
}

Select.propTypes = {
  wifiStatus: PropTypes.bool.isRequired,
};

export default Select;
