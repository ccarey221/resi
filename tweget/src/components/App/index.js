// src/components/App/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import Header from '../Header';
import Info from '../ReusableComponents/Info';
import ContentLeft from '../ReusableComponents/ContentLeft';
import ContentRight from '../ReusableComponents/ContentRight';

import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoText: {},
      infoImages: {}
    }
  }

  componentDidMount() {
    this.setState({
      infoText: {
        introInfo: "Real Estate Investing Made For Everyone",
        introSubText: "Investing in housing is no longer for the rich."
      }
    })
  }

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <div className="intro">
          <Header />
          <div className="AppIntro">
            <Info text={this.state.infoText.introInfo} />
            <Info className='subText' text={this.state.infoText.introSubText} />
          </div>
        </div>
        <ContentLeft className="investmentImage" />
        <ContentRight className="investingImage" />
      </div>
    );
  }
}

export default App;