import React from "react";
import { Link } from "react-router-dom";
import '../../App.css';
import ProductItem from "../ProductItem";

function Products(){

    return (
    <>
    <div className="product-hero-container"><h1>Produtos</h1></div>
    <div className='shop-container'>    
    <aside class='sidebar'>
        <header class='sidebar-header'>
            Categorias
        </header>
        <nav className='menu-container'>
            <button className='menu-option'>Todos</button>
            <button className='menu-option'>Camiseta</button>
            <button className='menu-option'>Blusa</button>
            <button className='menu-option'>Caneca</button>
            <button className='menu-option'>Boné</button>
        </nav>

    </aside>
    <div className='cards-container'>
        <input placeholder="Pesquisar"/>
        <div className='cards-wrapper'>
            <ul className='cards-items'>
                <ProductItem
                src="images/cobratshirt.jpg"
                text="Camiseta Cobra"
                label="Camiseta"
                price="60"/>
            </ul>
        </div>
    </div>
    </div>
    </>
    )
}

export default Products;