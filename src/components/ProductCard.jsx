
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({img, title, desc, price, id, toggleCart, cart = []}) => {
  const navigate = useNavigate();
  const isInCart = cart.some(item => item.id === id);

  const handleToggleCart = () => {
    toggleCart();
  }
  
  return (
    <div className='product-card'>
        <img src={img} alt="product" className='product-img' />
        <h3 className='product-title'>{title}</h3>
        <p className='product-desc'>{desc}</p>
        <p className='product-price'>${price}</p>
        <button className='view-details-button' onClick={() => navigate(`/menu/${id}`)}>View Details</button>
        <button 
          className={`add-to-cart-button ${isInCart ? 'added-to-cart' : ''}`} 
          onClick={handleToggleCart}
        >
          {isInCart ? 'Added' : 'Add to Cart'}
        </button>
    </div>
  );
};

export default ProductCard;