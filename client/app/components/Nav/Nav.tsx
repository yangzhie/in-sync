import React from 'react'
import styles from './nav.module.scss'

function Nav() {
    return (
        <>
            <nav className={styles.nav}>
                <div className='logo'>
                    <img src="" alt="" />
                </div>
                <ul className='nav-list'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                    <li>Login</li>
                    <li>Signup</li>
                </ul>
            </nav>
        </>
    )
}

export default Nav