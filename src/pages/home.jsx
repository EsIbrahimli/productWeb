
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='container'>
        <Header />
        <main>
          <button className='order-now-button' onClick={() => navigate('/menu')}>Order Now</button>
        </main>
        <Footer />
    </div>
  )
};

export default Home