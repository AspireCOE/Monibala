
import './App.css';
//import Cart from './Cart';
//import UserData from './UserData';
//import Wishing from './Wishing';
//import Label from './Label';
//import Visitors from './Visitors';
//import Conditionalrender from './Conditionalrender';
// import Logconditionalrender from './Logconditionalrender';
//import Greetings from './Greetings';
import {Route,Link,BrowserRouter as Router, BrowserRouter, Routes} from 'react-router-dom'
import Home from './Home';
import Navigation from './Navigation';
import Contact from './Contact';
import Product from './Product';
import Laptop from './Laptop';
import ProductList from './ProductList';
import Mounting from './Mounting';
import Hook from './Hook';
import { LoginForm } from './LoginForm';
import ControlledLoginForm from './ControlledLoginForm';
function App() {
  return (
    <div>
      <h1 style={{color:"green"}}>hello everyone</h1>
      {/* <Wishing username="moni/"></Wishing> */}

      {/* <UserData name = "john" age='23' email='john@gmail.com'/>
      <UserData name = "ram" age='24' email='ram@gmail.com'/>
      <UserData name = "sam" age='25' email='sam@gmail.com'/> */}
      
      {/* <Conditionalrender/> */}
      {/* <Logconditionalrender/> */}
      //routing
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='Home' element={<Home/>}></Route>
        <Route path='Contact' element={<Contact/>}></Route>
        <Route path='Product' element={<Product/>}></Route>
        <Route path='/Product/Laptop' element={<Laptop/>}></Route>
      </Routes>
      </BrowserRouter>
      //Axios
      <ProductList/>
      <Mounting/>
      <Hook/>
      <LoginForm/>
      <ControlledLoginForm/>

    </div>
  );
}

export default App;
