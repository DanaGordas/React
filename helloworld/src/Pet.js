import React, { Component } from 'react';
import Hobby from './Hobby';
import './Pet.css'; // if it's not a JS file we need to add the css extension

export default class Pet extends Component {
    render() {
      return (
        <div className="card">
          <h2 className="name">Moxie</h2>
          <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg/1200px-An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg" 
          alt="Moxie" />
          <h5 style={{fontSize: "2em", margin:"2px"}}>Hobbies</h5>
          <Hobby />
        </div>
      );
    }
  }

  //export default Pet; - you can add the export either when defining the class or at the bottom
