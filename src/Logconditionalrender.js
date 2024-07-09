import React,{Component } from 'react';
import ReactDOM from 'react-dom/client'
//import ReactDOM from'react-dom/client';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Greetings from './Greetings';
export default class Logconditionalrender extends Component {
    constructor(props) {
      super(props)
      this.handleLogin=this.handleLogin.bind(this);
      this.handleLogout=this.handleLogout.bind(this);

    
      this.state= {

      isLoggedin:false
         
       };
    }
    handleLogin(){
      this.setState({
      isLoggedin:true
       });

    }
    handleLogout(){
      this.setState({
        isLoggedin:false
      });

    }
    
  render() {
    const isLoggedin=this.state.isLoggedin;
    let button;
    if(isLoggedin){
        button=<LogoutButton onClick={this.handleLogout}/>;
    }
    else{
        button=<LoginButton onClick={this.handleLogin}/>;
    }
    return (
      <div>
        <Greetings isLoggedin={isLoggedin}/>
        {button}
      </div>
    );

  }
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Logconditionalrender/>)

