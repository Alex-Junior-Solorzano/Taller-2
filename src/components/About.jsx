import React from 'react'

const About = () => {
  return (
    <div className='clock-contenedor'>
    <div className='about'>
            <img className='imagen'
                src= {require(`../assets/i.jpg`)}
                alt='Foto de Alex'/>
            <div className='contenedor'>
                <p className='p1'>Alex Junior Solórzano  </p>
                <p className='p3'>Hello, I am a Computer Systems Engineer graduated from the Technical University of Manabí. I am currently participating in the Kruger Star reality show. My hobbies are watching movies, listening to music, playing video games and seeing information about the advances of artificial intelligence.</p>
            </div>
            </div>
        </div>
  )
}

export default About