import React from 'react';
import CardItem from '../shared/cardItem/cardItem'

function CardsCollection(){

    return(
        <div className='cards'>
            <h1>Novidades</h1>
                <div className='cards-container'>
                    <div className='cards-wrapper'>
                        <ul className='cards-items'>
                            <CardItem
                            src=""
                            text="Confira os ultimos lançamentos da nossa gravadora"
                            label="Arte"
                            path="/records"/>
                            <CardItem
                            src=""
                            text="Compre agora nossos CDs"
                            label="Coleção"
                            path="/shop"/>
                        </ul>
                    </div>
                </div>
        </div>
    )
}

export default CardsCollection;