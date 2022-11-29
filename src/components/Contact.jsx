import React from 'react'
import Button from '@mui/joy/Button';

const Contact = () => {
  return (
    <>
      <div className='contact-Padre'>
        <p className='p1'>Ready to connect with me?</p>
        <div className='contact'>
          <p className='p4'><strong>Let’s Connect!</strong></p>
          <div className=''>
            <input className='name'type="text" placeholder='First Name'></input>
            <input className='name'type="text" placeholder='Last Name'></input>
          </div>
          <div className='inputs'>
            <br />
            <input className='email' type="text" placeholder='Email address'></input>
          </div>
          <div className='inputs'>
          <br />
            <textarea placeholder='Enter text here'></textarea>
          </div>
          <div className='botonC'>
          <button className='booton'>Get in Touch</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact