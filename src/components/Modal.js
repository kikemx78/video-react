import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

const propTypes = {
  className: PropTypes.string
};

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.getChildren = this.getChildren.bind(this);
  }

  getChildren() {
    const { modalChildren } = this.props;

    if (!modalChildren || !modalChildren[0]) {
      return (
        <div>
          Please add content through modalChildren props on Player Component
        </div>
      );
    }

    return modalChildren.map(child => {
      return child;
    });
  }

  render() {
    const { className, hasModal } = this.props;

    if (!hasModal) return null;

    return (
      <div className={classNames('video-react-modal', className)}>
        <div className="video-react-modal-content">{this.getChildren()}</div>
      </div>
    );
  }
}

Modal.propTypes = propTypes;
Modal.displayName = 'Modal';
