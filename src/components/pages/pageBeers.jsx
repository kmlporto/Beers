import React, { Component } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';


import '../pagination.css'

import ListOfBeers from '../listOfBeers';
import TitlePage from './titlePageBeers';

const URL = `https://api.punkapi.com/v2/beers`;

export default class Beer extends Component{
  constructor(props){
    super(props)
    this.state = {
      beers: [],
      perPage: 30,
      currentPage: 0,
      pageCount: 8
    }

    this.handlePageClick = this.handlePageClick.bind(this);
  }

  receivedData(){
    const currentPage = this.state.currentPage + 1
    const per_page = this.state.perPage 
    axios.get(`${URL}?page=${currentPage}&per_page=${per_page}`)
      .then(res => {
        this.setState({
          ...this.state, 
          beers: res.data
        });
      })
  }

  componentDidMount(){
    this.receivedData()
  }

  
  handlePageClick = (e) => {
    const selectedPage = e.selected;

    this.setState({
      currentPage: selectedPage
    }, () => {
      this.receivedData()
    });

};
  
  render(){
    return(
      <div className="container bg-orange">
        <TitlePage/>
        <ListOfBeers beers={this.state.beers}/>
        <div className="flex-center">
          <ReactPaginate
              previousLabel={"prev"}
              nextLabel={"next"}
              pageCount={this.state.pageCount}
              marginPagesDisplayed={3}
              pageRangeDisplayed={5}
              onPageChange={this.handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}/>
        </div>
      </div>
    )
  }
}