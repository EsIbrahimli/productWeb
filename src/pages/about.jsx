
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../App.css'


const About = () => {
  return (
    <div className='container'>
      <Header />
      <div className='about-wrapper'>
        <div className='about-hero'>
          <div className='about-hero-content'>
            <h1 className='about-title'>About Us</h1>
            <p className='about-description'>We are a team of passionate developers who are dedicated to creating a website for a restaurant.</p>
          </div>
        </div>
        
        <div className='about-sections'>
          <div className='about-card'>
            <h2 className='about-card-title'>Our Mission</h2>
            <p className='about-card-text'>To provide exceptional dining experiences through innovative technology and outstanding service.</p>
          </div>
          
          <div className='about-card'>
            <h2 className='about-card-title'>Our Vision</h2>
            <p className='about-card-text'>To become the leading restaurant platform that connects food lovers with quality dining experiences.</p>
          </div>
          
          <div className='about-card'>
            <h2 className='about-card-title'>Our Values</h2>
            <p className='about-card-text'>Quality, innovation, customer satisfaction, and continuous improvement drive everything we do.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About