
import React from 'react'
import ProductCard from '../components/ProductCard'
import { useEffect, useState } from 'react'
import {getProducts} from '../api/product.js'
import '../App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Menu = () => {
  const [products, setProducts] = useState([]);

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

  return (
  <div className='container'>
    <Header />
    <h1 className='menu-title'>Our Products</h1>
    <div className='menu-container'>
      {products.map((product) => (
        <ProductCard key={product.id} id={product.id} img={product.thumbnail} title={product.title} desc={product.description} price={product.price} />
      ))}
    </div>
    <Footer />
    </div>
  );
}

export default Menu