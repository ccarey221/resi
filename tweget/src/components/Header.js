// src/components/App/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import Links from './ReusableComponents/Links';

import './styles.css';

export default class Header extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Header', className)} {...props}>
          <h1 className="title">RESI</h1>
          <nav className="nav">
            <Links link="/" linkName="Home" />
            <Links link="/homes" linkName="Homes" />
            <Links link="/about" linkName="About" />
            <Links link="/investments" linkName="Investments" />
          </nav>
      </div>
    );
  }
}