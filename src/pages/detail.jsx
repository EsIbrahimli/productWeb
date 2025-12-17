
import React from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../api/product';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Detail = () => {

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if(id){
      const fetchProductById = async () => {
        try{
          const data = await getProductById(id);
          console.log(data);
          setProduct(data);
        } catch (error) {
          console.error('Error fetching product by id:', error);
        }
      }
      fetchProductById();
    }
  }, [id]);

  if(!product){
    return <p>Loading...</p>;
  }

  return (
    <div className='container'>
      <Header />
      <div className='product-detail'>
        <img src={product.thumbnail} alt={product.title} className='product-img' />
        <h1 className='product-title'>{product.title}</h1>
        <p className='product-description'>{product.description}</p>
        <p className='product-price'>{product.price}</p>
      </div>
      <Footer />
    </div>
  )
}

export default Detail