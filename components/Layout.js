import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import { Josefin_Sans } from 'next/font/google'

const josefinSans = Josefin_Sans({
    subsets: ['latin'],
    weight: ['400', '600']
})

const Layout = ( {children} ) => {
    return (
        <div className={josefinSans.className}>
            <Nav/>
            { children }
            <Footer/>
        </div>
    )
}
    
export default Layout