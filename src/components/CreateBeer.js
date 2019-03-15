import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

class CreateBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: 0,
      contributed_by: ""
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const tagline = this.state.tagline;
    const description = this.state.description;
    const first_brewed = this.state.first_brewed;
    const brewers_tips = this.state.brewers_tips;
    const attenuation_level = this.state.attenuation_level;
    const contributed_by = this.state.contributed_by;
    //TODO: set the form
    axios.post("https://ironbeer-api.herokuapp.com/beers/new",
      { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by })
      .then(() => {
        // this.props.getData();
        // //pour rafraichir la liste
        this.setState({
          name: "",
          tagline: "",
          description: "",
          first_brewed: "",
          brewers_tips: "",
          attenuation_level: 0,
          contributed_by: ""
        });
      })
      .catch(error => console.log(error))
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }



  render() {
    return (
      <div>
        <header>
          <Navbar />
        </header>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)} />
          <label>Tagline</label>
          <textarea name="tagline" value={this.state.tagline} onChange={e => this.handleChange(e)} />
          <label>Description</label>
          <textarea name="description" value={this.state.description} onChange={e => this.handleChange(e)} />
          <label>First Brewed</label>
          <textarea name="first_brewed" value={this.state.first_brewed} onChange={e => this.handleChange(e)} />
          <label>Brewers Tips</label>
          <textarea name="brewers_tips" value={this.state.brewers_tips} onChange={e => this.handleChange(e)} />
          <label>Attenuation Level</label>
          <textarea name="attenuation_level" value={this.state.attenuation_level} onChange={e => this.handleChange(e)} />
          <label>Contributed By</label>
          <textarea name="contributed_by" value={this.state.contributed_by} onChange={e => this.handleChange(e)} />


          <input type="submit" value="ADD NEW" />
        </form>
      </div>
    )
  }
}

export default CreateBeer;