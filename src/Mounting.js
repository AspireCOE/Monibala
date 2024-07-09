import React, { Component } from 'react'

export  class Mounting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'ram'
      }
    }
    
  render() {
    return (
      <div>Mounting
      <h1>welcome {this.state.name}</h1>
      </div>
    )
  }
  static getDerivedStateFromProps(props,state){
    return{
        name:"moni"
    }
  }
  componentDidMount(){
    console.log("component is mounted");
}
}
export default Mounting
