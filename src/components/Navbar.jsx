import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    let activeClassName="active";
    return (
        <>
            <nav className='nav'>
                <ul className='nav'>
                    <NavLink  className='link' to='/'>
                        <strong>Home</strong>
                    </NavLink>
                    <NavLink className='link' to='/imc'>
                        <strong>IMC Calculator</strong>
                    </NavLink>
                    <NavLink className='link' to='/edad'>
                        <strong>Age Calculator</strong>
                    </NavLink>
                    <div className='kruger'>
                        <img className='logo'
                            src={require(`../assets/K.png`)}
                            alt='Logo de Kruger'
                        />
                        <p className='k'><strong>KrugerStar</strong></p>
                    </div>
                    <NavLink className='link' to='/clock'>
                        <strong>My Clock</strong>
                    </NavLink>
                    <NavLink className='link' to='/about'>
                        <strong>About Me</strong>
                    </NavLink>
                    <NavLink className='link' to='/contact'>
                        <strong>Contact</strong>
                    </NavLink>
                </ul>
            </nav>
            <div className="linea"></div>
        </>
    )
}

export default Navbar