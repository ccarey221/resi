import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import Header from '../Header';
import ContentLeft from '../ReusableComponents/ContentLeft'
import ContentRight from '../ReusableComponents/ContentRight'

import './style.css';

export default class About extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
        <div className={classnames('About', className)} {...props}>
         <Header />
          <h1>
            About
          </h1>
          <ContentLeft className="investmentImage" />
          <ContentRight className="investingImage" />
        </div>
    );
  }
}