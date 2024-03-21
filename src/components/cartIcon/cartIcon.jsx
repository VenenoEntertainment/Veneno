import React, { useContext }from 'react';
import {useNavigate} from 'react-router-dom';
import { CartContext } from '../context/cartContext'
import './cartIcon.css';
import { Icon } from 'react-icons-kit'
import { cart } from 'react-icons-kit/entypo/cart'

const CartIcon = () => {
    const navigate = useNavigate();
    const { itemCount } = useContext(CartContext);
    return(
        <div className='cart-container' onClick={() => {navigate('/cart')}}>
            <Icon icon={cart}/>  
            {
                itemCount > 0 ? <span className='cart-count'> { itemCount } </span> : null
            }
            
        </div>
    )
}

export default CartIcon;