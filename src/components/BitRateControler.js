import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

const propTypes = {
  className: PropTypes.string
};

export default class BitRateControler extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { className, hasBitRateControler } = this.props;
    // console.log(this.props);
    if (!hasBitRateControler) return null;

    const containerStyles = {
      top: '0px',
      width: '100%',
      height: '20px',
      background: 'black',
      position: 'absolute'
    };
    // console.log(this.props);
    if (this.props.player && this.props.player.hls) {
      // console.log('levels');
      // console.log(this.props.player.hls.levels);
      console.log(this.props.player.hls.currentLevel, 'current level');
    }

    return (
      <div
        style={containerStyles}
        className={classNames('video-react-bit-rate-controler', className)}
      >
        Hello From BitRateControler
      </div>
    );
  }
}

BitRateControler.propTypes = propTypes;
BitRateControler.displayName = 'BitRateControler';
