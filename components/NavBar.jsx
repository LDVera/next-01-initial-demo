import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css'
import {ActiveLink} from './ActiveLink.jsx'


export const NavBar = () => {
  return (
    
    <nav className={styles['menu-container']} >
      <ActiveLink text="Home" href="/" />
      <ActiveLink text="About" href="/about" />
      <ActiveLink text="Contact" href="/contact" />
    </nav>
  )
}
