import React from 'react'
import { useRouter } from 'next/router';
import Footer from './Footer'
import Nav from './Nav'
import { Josefin_Sans } from 'next/font/google'


const josefinSans = Josefin_Sans({
    subsets: ['latin'],
    weight: ['400', '600'],
    style: 'normal'
})

const Layout = ( {children} ) => {
    const router = useRouter();
    const { pathname } = router;
    
    const showVideo = pathname === '/'; // Set the condition for displaying the video
    return (
        <div className={`${josefinSans.className} ${'page'}`}>
            {showVideo && (
                <div className={`video_container`}>
                    <div className={`${'overlay'}`}></div>
                    <video src="/StarPromo.mp4" autoPlay loop muted />
                    <div className={`instructions`}>
                        <p>Scroll down</p>
                        <div className={`arrow_container`}>
                            <div className={`${'arrow'} ${'a_left'}`}></div>
                            <div className={`${'arrow'} ${'a_right'}`}></div>
                        </div>
                    </div>
                </div>
            )}
            <Nav/>
                { children }
            <Footer/>
        </div>
    )
}
    
export default Layout