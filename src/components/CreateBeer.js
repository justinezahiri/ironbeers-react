import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

class CreateBeer extends Component {

  render() {
    return (
      <div>
        <header>
          <Navbar></Navbar>
        </header>
        <p>create new beer</p>
      </div>
    )
  }
}

export default CreateBeer;