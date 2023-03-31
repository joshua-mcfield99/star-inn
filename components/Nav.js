import Link from 'next/link'
import React, { useState } from 'react'
import { Cormorant_Unicase } from 'next/font/google'

const cormorantUnicase = Cormorant_Unicase({
    subsets: ['latin'],
    weight: '700'
})



const Nav = () => {
    const [openMenu, setOpenMenu ] = useState( false );

    const handleToggle = () => {
        return setOpenMenu(!openMenu)
    }
    
  return (
    <nav>
        <div className='navinner'>
            <div className='navlogo'>
                <h1 className={`${cormorantUnicase.className}`}>The Star</h1>
            </div>
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
        </div>
    </nav>
  )
}

export default Nav