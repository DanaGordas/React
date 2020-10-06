import React, { Component } from 'react';

export default class Hobby extends Component{
    render() {
      const hobbies = ['eat', 'sleep', 'cuddle'];
      const liStyle = {fontSize: '1.5em'};
      return(
        <ul>
          {hobbies.map((h,i) => {
            return <li key={i} style={liStyle}>{h}</li>
          })}
        </ul>
      );
    }
  }