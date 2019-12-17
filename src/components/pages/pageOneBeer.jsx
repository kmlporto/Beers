import React, { Component } from 'react';
import axios from 'axios';

import OneBeer from '../oneBeer';

const URL = `https://api.punkapi.com/v2/beers`;

export default class Beer extends Component{
  constructor(props){
    super(props)
    this.state = {
      beer:[]
    }

    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount(){
      
    axios.get(`${URL}/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
        ...this.state, 
        beer: res.data
        });
      })
}


  render() {
  return (
    <OneBeer beer={this.state.beer}/>
      )
  }
}