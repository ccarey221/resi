import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import Header from '../Header';

import './styles.css';

export default class Homes extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
        <div className={classnames('Homes', className)} {...props}>
         <Header />
          <h1>
            Homes
          </h1>
        </div>
    );
  }
}