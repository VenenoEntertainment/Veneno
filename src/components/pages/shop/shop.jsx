import React, { useContext } from 'react';
import FeaturedProduct from '../../shared/featuredProduct/featuredProduct';
import { ProductsContext } from '../../context/productContext';
import './shop.css';
import Footer from '../../Footer/Footer';

const Shop = () => {
    const { products } = useContext(ProductsContext);
    const allProducts = products.map(product => (
        <FeaturedProduct { ...product} key={product.id}/>
    ))
    return (
        <>
        <div className='product-list-container'>
            <h2 className='product-list-title'>Shop</h2>
            <div className='product-list'>
                {
                    allProducts
                }
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Shop;