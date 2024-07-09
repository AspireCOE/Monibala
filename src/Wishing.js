import React, { Component } from 'react'

export default class Wishing extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        username:"monibala"
         
      }
    }
    changeName(event){
        this.setState({
            username:event.target.value
        })
    }
    
  render() {
    return (
      <div>Wishing
        <h>hi users {this.state.username}</h>
   Enter your name:<input type='text' name='username' value={this.state.username} onChange={(event)=>this.ChangeName(event)}/>
   </div>
    )
  }
}
