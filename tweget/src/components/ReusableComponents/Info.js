// src/components/App/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import Header from '../Header';

import './styles.css';

export default class Info extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Info', className)}>
        <div className="information">
          {this.props.text}
          <img />
        </div>
      </div>
    );
  }
}
