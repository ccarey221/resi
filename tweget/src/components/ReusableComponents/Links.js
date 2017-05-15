// src/components/App/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './styles.css';

export default class Links extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <a href={this.props.link} className={classnames('Links', className)}>
        <div>
          {this.props.linkName}
        </div>
      </a>
    );
  }
}