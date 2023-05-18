import Link from 'next/link';
import React, { useState } from 'react';
import styles from '../styles/components/Nav.module.css';
import { Cormorant_Unicase } from 'next/font/google';
import { Josefin_Sans } from 'next/font/google'
import AuthContext from '@/context/auth-context';

const josefinSans = Josefin_Sans({
    subsets: ['latin'],
    weight: ['400', '600']
})


const cormorantUnicase = Cormorant_Unicase({
    subsets: ['latin'],
    weight: '700',
    style: 'normal'
})



const Nav = (props) => {
    const [openMenu, setOpenMenu ] = useState( false );

    const handleToggle = () => {
        return setOpenMenu(!openMenu)
    }
    


  return (
    <nav className={`${styles.nav}`}>
        <AuthContext.Consumer>
            {(context) => {
                return (
                    
                    <div className={`${styles.nav_inner}`}>
                        <div className={`${styles.nav_logo}`}>
                            <h1 className={`${cormorantUnicase.className}`}>The Star</h1>
                        </div>
                        {!context.token && (

                            <div className={`${styles.nav_links}`}>
                                <div className={`${styles.mobile_nav}`}>
                                    <div className={`${styles.toggle}`} onClick={handleToggle}>
                                        <div className={`${styles.togglebar} ${styles.topbar} ${openMenu ? `${styles.open}` : `${styles.closed}`}`}></div>
                                        <div className={`${styles.togglebar} ${styles.midbar} ${openMenu ? `${styles.open}` : `${styles.closed}`}`}></div>
                                        <div className={`${styles.togglebar} ${styles.botbar} ${openMenu ? `${styles.open}` : `${styles.closed}`}`}></div>
                                    </div>
                                    <div className={`${styles.mobile_links} ${openMenu ? `${styles.open}` : `${styles.closed}`}`}>
                                        <ul>
                                            <li><Link href='/' onClick={handleToggle}>Home</Link></li>
                                            <li><Link href='/Drinks' onClick={handleToggle}>Drinks</Link></li>
                                            <li><Link href='/Food' onClick={handleToggle}>Food</Link></li>
                                            <li><Link href='/Events' onClick={handleToggle}>Events</Link></li>
                                            <li><Link href='/Gallery' onClick={handleToggle}>Gallery</Link></li>
                                            <li><Link href='/Contact' onClick={handleToggle}>Contact</Link></li>
                                            <li><Link href='/JoinUs' onClick={handleToggle}>Join Us</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <ul className={`${styles.links}`}>
                                    <li><Link href='/'>Home</Link></li>
                                    <li><Link href='/Drinks'>Drinks</Link></li>
                                    <li><Link href='/Food'>Food</Link></li>
                                    <li><Link href='/Events'>Events</Link></li>
                                    <li><Link href='/Gallery'>Gallery</Link></li>
                                    <li><Link href='/Contact'>Contact</Link></li>
                                    <li><Link href='/JoinUs'>Join Us</Link></li>
                                </ul>
                            </div>
                        )}
                        {context.token && (
                            <div className={`${styles.nav_links}`}>
                            <div className={`${styles.mobile_nav}`}>
                                <div className={`${styles.toggle}`} onClick={handleToggle}>
                                    <div className={`${styles.togglebar} ${styles.topbar} ${openMenu ? `${styles.open}` : `${styles.closed}`}`}></div>
                                    <div className={`${styles.togglebar} ${styles.midbar} ${openMenu ? `${styles.open}` : `${styles.closed}`}`}></div>
                                    <div className={`${styles.togglebar} ${styles.botbar} ${openMenu ? `${styles.open}` : `${styles.closed}`}`}></div>
                                </div>
                                <div className={`${styles.mobile_links} ${openMenu ? `${styles.open}` : `${styles.closed}`}`}>
                                    <ul>
                                        <li><Link href='/Admin/Panel'>Admin Panel</Link></li>
                                        <li><button onClick={props.logout}>Logout</button></li>
                                    </ul>
                                </div>
                            </div>
                            <ul className={`${styles.links}`}>
                                <li className='panel_link'><Link href='/Admin/Panel'>Admin Panel</Link></li>
                                <li><button className={`${josefinSans.className}`} onClick={context.logout}>Logout</button></li>
                            </ul>
                        </div>
                        )}
                    </div>
                )
            }}
        </AuthContext.Consumer>
    </nav>
  )
}

export default Nav