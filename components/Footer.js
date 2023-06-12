import React from 'react'
import styles from '../styles/Footer.module.css'
import Link from 'next/link'
import AuthContext from '@/context/auth-context';
import { Image, CloudinaryContext } from 'cloudinary-react';


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <AuthContext.Consumer>
                {(context) => {
                    return (

                        <div className={`${styles.inner_footer}`}>

                            <div className={[styles.main_section]}>
                                <div className={`${styles.logo} ${styles.footer_section}`}>
                                    <CloudinaryContext cloud_name='drkqjlsvr'>
                                        <Image
                                            publicId='thestar/StarLogo_white'
                                            alt='The Star logo'
                                            width='100%'
    
                                        />
                                    </CloudinaryContext>
                                </div>
                                <div className={`${styles.links} ${styles.footer_section}`}>
                                    {!context.token && 
                                        <ul className={styles.link_list}>
                                            <li><Link href='/'>Home</Link></li>
                                            <li><Link href='/Drinks'>Drinks</Link></li>
                                            <li><Link href='/Food'>Food</Link></li>
                                            <li><Link href='/Events'>Events</Link></li>
                                            <li><Link href='/Gallery'>Gallery</Link></li>
                                            <li><Link href='/Contact'>Contact</Link></li>
                                            <li><Link href='/JoinUs'>Join Us</Link></li>
                                            <li><Link href='/Admin/Login'>Admin Login</Link></li>
                                        </ul>
                                    }
                                </div>
                                {
                                //<div className={`${styles.socials} ${styles.footer_section}`}>

                                //</div>
                                }
                            </div>
                            <div className={styles.copyright}>
                                <p>Copyright 2023 The Star inn</p>
                            </div>
                        </div>
                    )
                }}
            </AuthContext.Consumer>
    </footer>
  )
}

export default Footer