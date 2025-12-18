
import React from 'react'
import ProductCard from '../components/ProductCard'
import { useEffect, useState } from 'react'
import {getProducts} from '../api/product.js'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductTable from '../components/ProductTable'
import '../App.css'

const Menu = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchProducts = async () => {
    try{
      const response = await getProducts();
      const data = response.data;
      setProducts(data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const toggleCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      removeFromCart(product.id);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
    } else {
      setCart(cart.map(item => 
        item.id === id 
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className='container'>
      <Header />
      <h1 className='product-table-title'>Product Table</h1>
      <ProductTable 
        cart={cart} 
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
      <h1 className='menu-title'>Our Products</h1>
      <div className='menu-container'>
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            id={product.id} 
            img={product.thumbnail} 
            title={product.title} 
            desc={product.description} 
            price={product.price}
            brand={product.brand}
            rating={product.rating}
            cart={cart}
            toggleCart={() => toggleCart(product)}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Menu