import React from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import  Cart from './Cart';
import { useStateContext } from './StateContext';
import 'bootstrap/dist/css/bootstrap.css';
import {signOut} from 'firebase/auth'
import {auth} from './config/Firebase'
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit'
import { cart } from 'react-icons-kit/entypo/cart'
import '../App.css'
 
 function Navbar({user}) {

    const { showCart, setShowCart, totalQuantities } = useStateContext();

    const logout = async () => {
        try{
            await signOut(auth);
        }catch(err){
            console.error(err);
        }
    };
    
     return (
     <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class='logo-link active' href='/'><img className='logo-fluid' src='images/logo.png'/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" styles="--bs-scroll-height: 100px;">
            <li class="nav-item">
                <a class="nav-link active" href="/">Inicio</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" href="/products">Produtos</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" href="/records">Gravadora</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" href="/games">Jogos</a>
            </li>
        </ul>
        {!user && <div className='rightSide'>
                    <a href='/Login'><button class="btn btn-outline-success">Login</button></a>
                    <span><button className='navlinks' onClick={() => setShowCart(true)}> <Icon icon={cart}/></button></span>
                    </div>}
        {user && <div className='rightSide'>
                <span><Link to='/' className='navlinks'>{user}</Link></span>
                <span><button className='navlinks' onClick={() => setShowCart(true)}> <Icon icon={cart}/></button></span>
                <span><button className='logout-btn' onClick={logout}>LOGOUT</button></span>    
            </div>}
        {showCart && <Cart/>}
        </div>
        </div>
    </nav>
     </>
   ) 
 }
 
 export default Navbar
 