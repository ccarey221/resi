import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import Header from '../Header';

import './styles.css';

export default class Investments extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
        <div className={classnames('InvestmentTiles', className)} {...props}>
          <h1>
            Investments
          </h1>
        </div>
    );
  }
}