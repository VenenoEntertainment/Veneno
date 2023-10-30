
import React from 'react';
import '../../App.css';
import '../HeroSection.css';
import CardItem from '../CardItem'
import '../Cards.css'
import Footer from '../Footer';
import { Link } from 'react-router-dom';

function Home (){
    return(
        <>
        <div className='hero-container'>
        <h1>Seja bem vindo</h1>
        <p>Conheça nossa nação Veneno</p>
        <div className='hero-btns'>    
         <Link to='#cards' smooth> <button class='btn btn-success'>CONFIRA</button></Link>
        </div>
        </div>
        c
        <div className='cards'>
        <h1>Novidades</h1>
        <div className='cards-container'>
            <div className='cards-wrapper'>
                <ul className='cards-items'>
                    <CardItem
                    src="images/img-9.jpg"
                    text="Confira o ultimo lançamento do nosso artista MC Veneno"
                    label="Fogo na festa"
                    path="/"/>
                    <CardItem
                    src="images/img-4.jpg"
                    text="Confira nossa incrivel coleçao de roupas, com promoções imprediveis"
                    label="Vestuario"
                    path="/products"/>
                </ul>
                <ul className='cards-items'>
                    <CardItem
                    src="images/img-9.jpg"
                    text="Confira o jogo xxxxxx produzido pela Veneno Entertainment"
                    label="Entretenimento"
                    path="/"/>
                    <CardItem
                    src="images/img-4.jpg"
                    text="Confira nossa incrivel coleçao de roupas, com promoções imprediveis"
                    label="Vestuario"
                    path="/products"/>
                </ul>
            </div>
        </div>
      
    </div>
        <Footer/>
        </>
    )
}

export default Home;
