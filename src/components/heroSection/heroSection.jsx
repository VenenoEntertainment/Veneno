import React from 'react'
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
    <h1>Bem-vindo ao universo Veneno</h1>
        <p>Onde a Música Encontra a Inovação</p>
            <div className='hero-btns'>    
                <Link to='#cards' smooth> <button class='btn btn-success'>CONFIRA</button></Link>
            </div>
    </div>
  )
}

export default HeroSection;