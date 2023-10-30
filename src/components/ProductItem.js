import React from 'react'
import { Link } from 'react-router-dom'
import { useStateContext } from './StateContext'

function ProductItem(props) {

  const { onAdd } = useStateContext();
  return (
    <>
      <li className='cards-item'>
        <Link className='cards-item-link'>
            <figure className='cards-item-pic-wrap' data-category={props.label}>
                <img src={props.src} alt='Travel Image'
                    className='cards-item-img'/>
            </figure>
            <div className='cards-item-info'>
                <h5 className='cards-item-text'>{props.text}</h5>
                <h6 className='cards-item-price'>R${props.price}.00</h6>
            </div>
            <button class='btn btn-outline-success'>Adicionar ao carrinho</button>
        </Link>
      </li>
    </>
  )
}

export default ProductItem
