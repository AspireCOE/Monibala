import React, { Component } from 'react'

class Conditionalrender extends Component {
  render() {
    let value=1
    let layout=null
    if(value=1){
        layout=<div style={{color:'red',background:'yellow'}}>
            <h1>This is a layout 1</h1>

        </div>
    }
    else{
        layout=<div style={{color:'blue',background:'green'}}>
           <h2>This is a layout 2</h2>
            </div>


    }
    return layout
    
  }
}
export default Conditionalrender