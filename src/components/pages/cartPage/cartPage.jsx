import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext';
import CartItem from './cartItem';
import Total from './total';
import './cartPage.css';
import Footer from '../../Footer/Footer';

const CartPage = () =>{
    const { cartItems, itemCount, total, increase, decrease, removeProduct, clearCart } = useContext(CartContext);
    const funcs = {increase, decrease, removeProduct}
    return(
            <>
                <h1>Cart</h1>
                {
                    cartItems.length === 0 ? <div className='empty-cart'>Your cart is empty</div>
                    :
                    <>
                    <div className='cart-page'>
                        <div className='cart-item-container'>
                            {
                                cartItems.map(item => <CartItem { ...item } key={item.id} {...funcs}/>)
                            }
                        </div>
                        <Total itemCount={itemCount} total={total} clearCart={clearCart}/>
                    </div>
                   
                    </>
                }
        <Footer/>
        </>
    );

}

export default CartPage