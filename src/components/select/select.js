import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { propConf } from '../../proptypes';
import ConfigContext from '../../context';
import getPoints from '../../wifiPoints';
import SelectView from './selectView';
import { ErrFetch, SltMsg } from '../../constants';

class Select extends Component {
  state = {
    valueSlt: SltMsg,
    slt: '',
    points: [],
    message: '',
    reset: false,
    firstLoad: true,
  }

  componentDidMount() {
    const { config } = this.props;
    const { point } = config;
    const array = [];
    if (point.name) {
      array.push(point);
      this.setState({
        points: array,
        valueSlt: point.name,
        slt: point.name,
      });
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { config } = nextProps;
    if (nextProps.config.reset !== prevState.reset) {
      return {
        valueSlt: SltMsg,
        reset: config.reset,
      };
    }
    return null;
  }

  handleChange = (event) => {    
    const { points } = this.state;
    const { config } = this.props;
    const { savePoint } = config;
    const { target } = event;
    const { value } = target;
    if ((value === 'closer')) {
      this.setState({
        valueSlt: SltMsg,
        slt: SltMsg,
        firstLoad: false,
      });
    } else if (value !== 'opener') {
      this.setState({
        valueSlt: value,
        slt: value,
        firstLoad: false,
      });
    } else {
      this.setState({
        valueSlt: SltMsg,
        slt: 'opener',
        firstLoad: false,
      });
    }
    savePoint(points.filter(item => item.name === value)[0]);
  }

  handlePoints = () => {
    getPoints()
      .then(points => this.setState({ points }))
      .catch(() => {
        this.setState({
          message: `${ErrFetch}`,
        });
      });
  }

  handleAnimation = () => {
    this.setState({
      message: '',
    });
  }

  render() {
    const { wifiStatus } = this.props;
    const {
      valueSlt, slt, message, points, firstLoad,
    } = this.state;
    const liClass = (slt === 'opener') ? 'select_items violet' : 'select_items';
    let arrowClass = (slt === 'opener') ? 'arrow up' : 'arrow down';
    if (firstLoad) arrowClass = 'arrow';
    return (
      <SelectView
        liClass={liClass}
        arrowClass={arrowClass}
        message={message}
        handleAnimation={this.handleAnimation}
        valueSlt={valueSlt}
        slt={slt}
        points={points}
        handleChange={this.handleChange}
        wifiStatus={wifiStatus}
        handlePoints={this.handlePoints}
      />
    );
  }
}

Select.propTypes = {
  wifiStatus: PropTypes.bool.isRequired,
  config: propConf.isRequired,
};

export default props => (
  <ConfigContext.Consumer>
    {config => <Select {...props} config={config} />}
  </ConfigContext.Consumer>
);
