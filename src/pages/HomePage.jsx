import React from 'react'
import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'
import Welcome from '../components/Welcome.jsx'

const homePage = () => {
  return (
    <div>
        <div>
        <Navbar />
        <Welcome  />
        <Footer />
    </div>
    </div>
  )
}

export default homePage