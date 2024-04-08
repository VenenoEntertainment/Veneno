import React, { useContext } from 'react';
import './featuredProduct.css';
import  { isInCart } from '../../helpers'
import  { CartContext } from '../../context/cartContext'
import { useNavigate } from 'react-router-dom';



const FeaturedProduct = (props) => {
    const { title, imageUrl, price, id} = props;
    const product = {title, imageUrl, price, id}
    const { addProduct , cartItems, increase } = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <div className='featured-product' onClick={() => navigate(`/product/${id}`)}>
            <div className='featured-image' >
                <img src={imageUrl} className='image-holder' alt='product'/>
            </div>
            <div className='name-price'>
                <h3>{title}</h3>
                <p> R$ {price},00</p>
                {
                 !isInCart(product, cartItems) &&
                <button className='button is-black nomad-btn'
                        onClick={() => addProduct(product)}>
                            Adicionar</button>
                
                }    
                {
                    isInCart(product, cartItems) &&
                    <button className='button is-black nomad-btn'
                    id='btn-white-outline'
                    onClick={()=> increase(product)}>
                        Adicionar mais</button>
            
                }
            </div>
        </div>
    )
}

export default FeaturedProduct