import React, { Component } from 'react'
import HoC from './Modifiedcomponent'

export class Cart extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //     cart:2
         
    //   }
    // }
    //   incrementcounter(event){
    //     this.setState({
    //         cart:this.state.cart +1
    //     })
    //   }

    
  render() {
    return (
      <div>
        Add to cart  :

        {/* //<button OnClick={(event)=>this.incrementcounter(event)}>{this.state.cart}</button> */}
        <button onClick={this.props.incrementCounter}><br/> Counter:{this.props.count}</button>
      </div>
    )
  
}
}

export default HoC(Cart)
