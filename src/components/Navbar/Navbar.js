import React from 'react';
import {signOut} from 'firebase/auth'
import {auth} from '../config/Firebase'
import { Link } from 'react-router-dom';
import '../../App.css'
import CartIcon from '../cartIcon/cartIcon';
 
 function Navbar({user}) {

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
            <a class='logo-link active' href='/'><img className='logo-fluid' src='images/logo.png' alt='logo'/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" styles="--bs-scroll-height: 100px;">
            <li class="nav-item">
                <a class="nav-link active" href="/">Inicio</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" href="/shop">Produtos</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" href="/records">Gravadora</a>
            </li>
        </ul>
        {!user && <div className='rightSide'>
                    <a href='/Login'><button class="btn btn-outline-success">Login</button></a>
                    <CartIcon/>
                     </div>}
        {user && <div className='rightSide'>
                <span><Link to='/' className='navlinks'>{user}</Link></span>
                <CartIcon/>
                <span><button className='logout-btn' onClick={logout}>LOGOUT</button></span>    
            </div>}
        </div>
        </div>
    </nav>
     </>
   ) 
 }
 
 export default Navbar
 