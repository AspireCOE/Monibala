import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export  class Navigation extends Component {
  render() {
    return (
      <div>
        <Link to='Home'><li>Home</li></Link>
        <Link to='Contact'><li>Contact</li></Link>
        <Link to='Product'><li>Product</li></Link>
      </div>
    )
  }
}
export default Navigation
