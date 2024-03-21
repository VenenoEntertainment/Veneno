import React from 'react';
import './mainSection.css';

const MainSection = () => {

    return (
        <div className='main-section-container'>
            <div className='main-section-middle'>
                <div className='ms-m-image'>
                    <img src={''} alt='background'/>
                </div>
                <div className='ms-m-description'>
                    <h2>CD Liquido</h2>
                    <p>
                        Fazemos o cd de forma caseira e enviamos para os nosso ouvintes
                        para que tenham esse clássico na sua coleção.
                    </p>
                    <button className='button is-black' id='shop-now' onClick={()=> {}}>
                        Compra agora
                    </button>
                </div>
            </div>
        </div>
    )

}

export default MainSection;