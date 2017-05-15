// src/components/App/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import Header from '../Header';

import './contentStyles.css';

export default class Content extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className='Content'>
        <div className={classnames('contentContent', this.props.className)}></div>
        <div className='contentContent'>

        </div>
      </div>
    );
  }
}
