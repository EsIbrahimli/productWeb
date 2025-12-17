import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import '../App.css'

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className='container'>
      <Header />
      <div className='notfound-wrapper'>
        <div className='notfound-content'>
          <h1 className='notfound-title'>404</h1>
          <h2 className='notfound-subtitle'>Page Not Found</h2>
          <p className='notfound-description'>
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
          <button 
            className='notfound-button' 
            onClick={() => navigate('/')}
          >
            Go Back Home
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default NotFound

