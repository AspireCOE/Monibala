import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export  class Product extends Component {
  render() {
    return (
      <div>
        product
        <h1>Laptops</h1>
       <li><Link to='/Product/laptop'>View all brands</Link>
      </li></div>
    )
  }
}
export default Product
