import React from 'react';
import moment from 'moment';

export default class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <h1>Bennett Scoresby React Portfolio</h1>
        <div>
          {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
      </div>
    );
  }
}
