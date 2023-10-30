import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/home';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Records from './components/pages/Records';
import AboutUs from './components/pages/AboutUs';
import Login from './components/pages/Login';
import Navbar from './components/Navbar';
import Admin from './components/pages/Admin';
import {auth, db} from './components/config/Firebase';
import { StateContext } from './components/StateContext';
import Cart from './components/Cart';


export class App extends Component{
  
  state={
    user: null
  }

  componentDidMount(){
    auth.onAuthStateChanged(user=>{
      if(user){
        db.collection('SignedUpUserData').doc(user.uid).get().then(snapshot=>{
          this.setState({
            user: snapshot.data().Name
          })
        })
      }
      else{
        this.setState({
          user: null
        })
      }
    })
  }

  render() {
    return(
    <>
    <StateContext>
    <Router>
      <Navbar user={this.state.user}/>
      <Routes>      
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/' element={<Home/>}/>  
        <Route path='/products' element={<Products/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/records' element={<Records/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
      </Routes>
    </Router>
    </StateContext> 
    </>
)};
}

export default App;
