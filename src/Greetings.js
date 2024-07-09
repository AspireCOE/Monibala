import React from 'react'
import ReactDOM from 'react-dom/client';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';

export default function Greetings(props) {
    const isLoggedin=props.isLoggedin;
    if(isLoggedin){
        return<UserGreeting/>;
    }
        return<GuestGreeting/>;
    }

  const root=ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Greetings isLoggedin={false}/>);


