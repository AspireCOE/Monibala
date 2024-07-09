import Reacts, { Component } from 'react'
import axios from 'axios'

export  class ProductList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      product:[]
       
    }
  }
  getAllProduct(){
    axios.get("http://localhost:3000/products")
    .then((response)=>{void
    this.setState({
      product:response.data
    })
    })
    //fetch and not showing data
    // .then(response=>{
    //   console.log(response.data);
    // })
    .catch((error)=>{
    console.log("unable to fetch data");
  })
  }
  
  render() {
    const products=this.state.product.map
    ((products)=>{
      return(<tr>
        <td>{products.id}</td>
        <td>{products.title}</td>
        <td>{products.price}</td>
      </tr>)
    })
    return (
      <div>
        <h2>Products</h2>
        <table border="2">
          <thead>
            <td>Product Id</td>
            <td>Product Name</td>
            <td>Product Price</td>
          </thead>
          <tbody>
            {products}
          </tbody>
        </table>
        <button onClick={this.getAllProduct()}>View products</button>
      </div>
    )
  }
}
export default ProductList