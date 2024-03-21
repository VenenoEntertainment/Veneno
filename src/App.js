import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import SignUp from './components/pages/SignUp';
import Records from './components/pages/Records';
import Login from './components/pages/Login';
import Shop from './components/pages/shop/shop';
import Navbar from './components/Navbar/Navbar';
import {auth, db} from './components/config/Firebase';
import SingleProduct from './components/singleProduct/singleProduct';
import CartPage from './components/pages/cartPage/cartPage';
import 'bootstrap/dist/css/bootstrap.css';


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
      <Navbar user={this.state.user}/>
      <Routes>      
        <Route exact path='/' element={<Home/>}/>  
        <Route exact path='/shop' element={<Shop/>}/>
        <Route exact path='/product/:id' element={<SingleProduct/>}/>
        <Route exact path='/cart' element={<CartPage/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/records' element={<Records/>}/>
      </Routes>
    </>
)};
}

export default App;