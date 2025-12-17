

import React from 'react'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../App.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <div className='container'>
      <Header />
      <div className='contact-wrapper'>
        <div className='contact-hero'>
          <h1 className='contact-title'>Contact Us</h1>
          <p className='contact-subtitle'>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>

        <div className='contact-content'>
          <div className='contact-form-container'>
            <form className='contact-form' onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor='name' className='form-label'>Name</label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='form-input'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='form-group'>
                <label htmlFor='email' className='form-label'>Email</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='form-input'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='form-group'>
                <label htmlFor='message' className='form-label'>Message</label>
                <textarea
                  id='message'
                  name='message'
                  className='form-textarea'
                  rows='6'
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type='submit' className='contact-submit-button'>Send Message</button>
            </form>
          </div>

          <div className='contact-info'>
            <div className='contact-info-card'>
              <h3 className='contact-info-title'>Email</h3>
              <p className='contact-info-text'>info@restaurant.com</p>
            </div>

            <div className='contact-info-card'>
              <h3 className='contact-info-title'>Phone</h3>
              <p className='contact-info-text'>+1 (555) 123-4567</p>
            </div>

            <div className='contact-info-card'>
              <h3 className='contact-info-title'>Address</h3>
              <p className='contact-info-text'>123 Main Street<br />City, State 12345</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact