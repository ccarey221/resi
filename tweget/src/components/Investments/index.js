import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import Header from '../Header';
import InvestmentTiles from './InvestmentTiles';

import './styles.css';

export default class Investments extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
        <div className={classnames('Investments', className)} {...props}>
          <Header />
          <h1>
            Investments
          </h1>
          <div className="tiles">
            <InvestmentTiles />
            <InvestmentTiles />
            <InvestmentTiles />
            <InvestmentTiles />
            <InvestmentTiles />
            <InvestmentTiles />
            <InvestmentTiles />
            <InvestmentTiles />
            <InvestmentTiles />
          </div>
        </div>
    );
  }
}