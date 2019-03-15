import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

class BeersList extends Component {
  constructor(props) {
    super(props);
    this.state = { listOfBeers: [] };
  }

  getAllBeers = () => {
    axios.get(`https://ironbeer-api.herokuapp.com/beers/all`)
      .then(responseFromApi => {
        this.setState({
          listOfBeers: responseFromApi.data
        })
        console.log();


      })
  }

  componentDidMount() { //quand le composant sera rendu dans la page, requete pour setter les states et comme ils ont changé rendre de nouveaux les projets 
    this.getAllBeers();
  }
  render() {
    return (
      <div>
        <header>
          <Navbar></Navbar>
        </header>
        <ul>
          {this.state.listOfBeers.map(beer => {
            return (
              <div key={beer._id}>
                <img className="single-beer" src={beer.image_url} alt={beer.name} />
                <h1>{beer.name}</h1>
                <p>{beer.tagline}</p>
                <p>{beer.contributed_by}</p>
                <Link to={`/beers/${beer._id}`}>See more</Link>

              </div>

            )
          })}
        </ul>

      </div>
    )
  }
}

export default BeersList;