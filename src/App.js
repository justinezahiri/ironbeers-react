import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Switch, Route, Link } from 'react-router-dom';
import BeersList from './components/BeersList';
import RandomBeer from './components/RandomBeer';
import CreateBeer from './components/CreateBeer';
import BeerDetail from './components/BeerDetail';
import HomePage from './components/HomePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
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
