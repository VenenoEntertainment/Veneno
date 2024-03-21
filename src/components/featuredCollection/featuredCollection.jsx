import React, {useContext} from 'react';
import { ProductsContext } from '../context/productContext';
import FeaturedProduct from '../shared/featuredProduct/featuredProduct';
import './featuredCollection.css'

const FeaturedCollection = () => {
    const {products} = useContext(ProductsContext);
    const productItems = products.filter((product, i) => i < 3).map(product => (
        <FeaturedProduct {...product} key={product.id} />
    ));

    return (
        <div className='featured-collection container'>
            <h2 className='featured-section-title'>Coleção</h2>
            <div className='products'>
                {productItems}
            </div>
        </div>
    )
}


export default FeaturedCollection;