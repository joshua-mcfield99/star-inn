import Link from 'next/link';
import React, { useState } from 'react';
import { Cormorant_Unicase } from 'next/font/google';
import { Josefin_Sans } from 'next/font/google'
import AuthContext from '@/context/auth-context';

const josefinSans = Josefin_Sans({
    subsets: ['latin'],
    weight: ['400', '600']
})


const cormorantUnicase = Cormorant_Unicase({
    subsets: ['latin'],
    weight: '700'
})



const Nav = (props) => {
    const [openMenu, setOpenMenu ] = useState( false );

    const handleToggle = () => {
        return setOpenMenu(!openMenu)
    }
    


  return (
    <nav>
        <AuthContext.Consumer>
            {(context) => {
                return (
                    
                    <div className='navinner'>
                        <div className='navlogo'>
                            <h1 className={`${cormorantUnicase.className}`}>The Star</h1>
                        </div>
                        {!context.token && (

                            <div className='navlinks'>
                                <div className='mobilenav'>
                                    <div className='toggle' onClick={handleToggle}>
                                        <div className={`${'togglebar'} ${'topbar'} ${openMenu ? 'open' : 'closed'}`}></div>
                                        <div className={`${'togglebar'} ${'midbar'} ${openMenu ? 'open' : 'closed'}`}></div>
                                        <div className={`${'togglebar'} ${'botbar'} ${openMenu ? 'open' : 'closed'}`}></div>
                                    </div>
                                    <div className={`${'mobilelinks'} ${openMenu ? 'open' : 'closed'}`}>
                                        <ul>
                                            <li><Link href='/'>Home</Link></li>
                                            <li><Link href='/Drinks'>Drinks</Link></li>
                                            <li><Link href='/Food'>Food</Link></li>
                                            <li><Link href='/Events'>Events</Link></li>
                                            <li><Link href='/Gallery'>Gallery</Link></li>
                                            <li><Link href='/Contact'>Contact</Link></li>
                                            <li><Link href='/JoinUs'>Join Us</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <ul className='links'>
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
                            <div className='navlinks'>
                            <div className='mobilenav'>
                                <div className='toggle' onClick={handleToggle}>
                                    <div className={`${'togglebar'} ${'topbar'} ${openMenu ? 'open' : 'closed'}`}></div>
                                    <div className={`${'togglebar'} ${'midbar'} ${openMenu ? 'open' : 'closed'}`}></div>
                                    <div className={`${'togglebar'} ${'botbar'} ${openMenu ? 'open' : 'closed'}`}></div>
                                </div>
                                <div className={`${'mobilelinks'} ${openMenu ? 'open' : 'closed'}`}>
                                    <ul>
                                        <li><Link href='/Admin/Panel'>Admin Panel</Link></li>
                                        <li><button onClick={props.logout}>Logout</button></li>
                                    </ul>
                                </div>
                            </div>
                            <ul className='links'>
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