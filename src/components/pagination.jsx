import React from 'react'
import ReactPaginate from 'react-paginate';

import './pagination.css'

export default props => {
  return(
    <div className="flex-center">
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        pageCount={props.pageCount}
        marginPagesDisplayed={3}
        pageRangeDisplayed={5}
        onPageChange={props.handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}/>
    </div>
  )
}