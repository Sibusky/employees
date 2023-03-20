import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export function Header() {
  return (
    <header className='header section'>
        <div className='header__container container'>
            <Link to='/'><p className='text'>LOGO</p></Link>
            <p className='header__text text'>HEADER</p>
        </div>
    </header>
  )
}
