
import React from 'react';
import '../App.css';
import Footer from './Footer/Footer';
import CardsCollection from './cardsCollection/cardsCollection';
import HeroSection from './heroSection/heroSection';
import MainSection from './mainSection/mainSection';
import FeaturedCollection from './featuredCollection/featuredCollection';

function Home (){
    return(
        <>
        <HeroSection/>
        <CardsCollection/>
        <MainSection/>
        <FeaturedCollection/>
        <Footer/>
        </>
    )
}

export default Home;
