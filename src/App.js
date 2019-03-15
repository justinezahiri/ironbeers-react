import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Switch, Route, Link } from 'react-router-dom';
import BeersList from './components/BeersList';
import RandomBeer from './components/RandomBeer';
import CreateBeer from './components/CreateBeer';
import BeerDetail from './components/BeerDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => {
            return <div>
              <h1>IronBeers</h1>
              <img className="beer-picture" src="https://images.unsplash.com/photo-1518176258769-f227c798150e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"></img>
              <Link to={`/beers`}>All Beers</Link>
              <p>LoremIpsum</p>
              <img className="beer-picture" src="https://images.unsplash.com/photo-1517091869083-a411d638c435?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"></img>
              <Link to={`/random-beer`}>Random Beer</Link>
              <p>LoremIpsum</p>
              <img className="beer-picture" src="https://images.unsplash.com/photo-1514359574627-9bc41f732ae6?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"></img>
              <Link to={`/new-beer`}>New Beer</Link>
              <p>LoremIpsum</p>

            </div>
              ;
          }} />
          <Route exact path="/beers" component={BeersList} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={CreateBeer} />
          <Route exact path="/beers/:id" component={BeerDetail} />
        </Switch>


      </div>
    );
  }
}

export default App;
