import React, { Component } from 'react';
import moment from 'moment';

import Portfolio from "./portfolio-container"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Bennett Scoresby React Portfolio</h1>
        <Portfolio />
        <div>
          {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
      </div>
    );
  }
}
