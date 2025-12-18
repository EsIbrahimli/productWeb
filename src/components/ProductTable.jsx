
import React, { useState, useMemo } from 'react'

const ProductTable = ({ cart, updateQuantity, removeFromCart }) => {
  const [sortOrder, setSortOrder] = useState('highToLow');

  const sortedCart = useMemo(() => {
    const sorted = [...cart];
    if (sortOrder === 'highToLow') {
      return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else {
      return sorted.sort((a, b) => (a.rating || 0) - (b.rating || 0));
    }
  }, [cart, sortOrder]);

  const totalSum = useMemo(() => {
    return sortedCart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
  }, [sortedCart]);

  const getRatingIcon = (rating, index) => {
    if (index === 0 && rating < 3) {
      return <span className='rating-arrow'>↓</span>;
    }
    if (rating >= 4) {
      return <span className='rating-arrow'>↑</span>;
    }
    return null;
  };

  return (
    <div className='product-table-wrapper'>
      <div className='product-table-header-controls'>
        <select 
          className='rating-sort-dropdown'
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value='highToLow'>Rating: High to Low</option>
          <option value='lowToHigh'>Rating: Low to High</option>
        </select>
      </div>

      <div className='product-table-container'>
        <table className='product-table'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Brand</th>
              <th>Quantity</th>
              <th>Rating</th>
              <th>Sum</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {sortedCart.length > 0 ? (
              sortedCart.map((item, index) => {
                const sum = (item.price * item.quantity).toFixed(2);
                const rowClass = index % 2 === 0 ? 'table-row-red' : 'table-row-green';
                return (
                  <tr key={item.id} className={rowClass}>
                    <td>
                      <img 
                        src={item.thumbnail || item.img} 
                        alt={item.title} 
                        className='table-product-img'
                      />
                    </td>
                    <td className='table-product-name'>{item.title}</td>
                    <td className='table-product-price'>${item.price}</td>
                    <td className='table-product-brand'>{item.brand || 'N/A'}</td>
                    <td>
                      <div className='quantity-controls'>
                        <button 
                          className='quantity-btn quantity-minus'
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className='quantity-value'>{item.quantity}</span>
                        <button 
                          className='quantity-btn quantity-plus'
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className='table-product-rating'>
                      <span className='table-product-rating-content'>
                        {item.rating || 'N/A'}
                        {getRatingIcon(item.rating, index)}
                      </span>
                    </td>
                    <td className='table-product-sum'>${sum}</td>
                    <td>
                      <button 
                        className='delete-button'
                        onClick={() => removeFromCart(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="8" className='table-empty'>Cart is empty</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {sortedCart.length > 0 && (
        <div className='total-sum-container'>
          <span className='total-sum-text'>Total Sum: ${totalSum}</span>
        </div>
      )}
    </div>
  )
}

export default ProductTable