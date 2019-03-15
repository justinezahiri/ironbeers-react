import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

class RandomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getRandomBeer();
  }

  getRandomBeer = () => {
    axios.get(`https://ironbeer-api.herokuapp.com/beers/random`)
      .then(responseFromApi => {
        const randomBeer = responseFromApi.data;
        console.log("randomBeer");
        console.log(randomBeer);
        this.setState(randomBeer[0]);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <header>
          <Navbar></Navbar>
        </header>
        <img className="beer" src={this.state.image_url} alt={this.state.name} />
        <h1>{this.state.name}</h1>
        <p>{this.state.tagline}</p>
        <p>{this.state.first_brewed}</p>
        <p>{this.state.attenuation_level}</p>
        <p>{this.state.description}</p>
        <p>{this.state.contributed_by}</p>

      </div>
    )
  }
}

export default RandomBeer;