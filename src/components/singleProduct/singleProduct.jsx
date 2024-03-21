import React, { useContext, useState, useEffect } from "react";
import { useNavigate , useParams} from 'react-router-dom';
import { ProductsContext } from '../context/productContext';
import { CartContext } from "../context/cartContext";
import { isInCart } from "../helpers";
import './singleProduct.css';


const SingleProduct = ({ match }) => {
    const { products } = useContext(ProductsContext);
    const { addProduct, cartItems, increase } = useContext(CartContext);
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const product = products.find(item => Number(item.id) === Number(id));

        //if product does not exist, redirect to shop page
        if (!product) {
            navigate('/shop')
        }

        setProduct(product);
    }, [id, product, products]);

    if(!product) { return null };
    const {imageUrl, title, price, description } = product;
    return (
            <div className="single-product-container">
                <div className="product-image">
                    <img src={imageUrl} alt='product' />
                </div>
                <div className="product-details">
                    <div className="name-price">
                        <h3>{title}</h3>
                        <p>R${price},00</p>
                    </div>
                    <div className="add-to-cart-btns">
                    {
                        !isInCart(product, cartItems) && 
                        <button 
                            className="button is-white nomad-btn"
                            id='btn-white-outline'
                            onClick={() => addProduct(product)}>
                        ADD TO CART
                        </button>
                    }
                    {
                        isInCart(product, cartItems) &&
                        <button 
                            className="button is-white nomad-btn"
                            id='btn-white-outline'
                            onClick={() => increase(product)}>
                        ADD MORE
                        </button>
                    }
                        <button className="button is-black nomad-btn" id='btn-white-outline'>
                            PROCEED TO CHECKOUT
                        </button>
                    </div>
                    <div className="product-description">
                        <p>
                            { description }
                        </p>
                    </div>
                </div>
            </div>
    )

}

export default SingleProduct;