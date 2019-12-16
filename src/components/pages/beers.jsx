import React, { Component } from 'react';
import axios from 'axios';

import ListOfBeers from '../listOfBeers';
import TitlePage from '../pages/titlePageBeers';

const URL = `https://api.punkapi.com/v2/beers`;
// https://api.punkapi.com/v2/beers?page=2&per_page=80
// `${URL}?page=${state.currentPage}&per_page=${this.state.perPage}`
export default class Beer extends Component{
  constructor(props){
    super(props)
    this.state = {
      beers: [],
      perPage: 2,
      currentPage: 0,
      pageCount: null
    }

    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount(){
    axios.get(URL)
      .then(res => {
        this.setState({
          ...this.state, 
          beers: res.data});
      })
  }
  
  
  render(){
    return(
      <>
      <TitlePage/>
      <ListOfBeers beers={this.state.beers}/>
      </>
    )
  }
}