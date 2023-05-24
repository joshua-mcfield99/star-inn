import Head from 'next/head'
import React from 'react'
import styles from '../styles/Drinks.module.css'
import { Cormorant_Unicase } from 'next/font/google'
import altText from '../data/liveBarAlts.json'
import { CloudinaryContext, Image } from 'cloudinary-react';

const cormorantUnicase = Cormorant_Unicase({
    subsets: ['latin'],
    weight: '700'
})

const Drinks = () => {

  return (
    <>
        <Head>

            <title>The Star | Drinks</title>
        </Head>
        <main>
            <section>
                <h1 className={`${'heading'} ${cormorantUnicase.className}`} >Drinks</h1>
                <p>
                    Looking for the perfect pint? Look no further than The Star! With our passion for beer and cider, we offer an ever-changing selection of up to 15 real ales and over 35 ciders. You&#39;ll be spoilt for choice, and your palate will be satisfied. Come join us and discover your new favourite drink!
                </p>
            </section>
            <section>
                <h2 className={`${'heading'} ${cormorantUnicase.className}`} >Live Bar</h2>
                <p>
                We&#39;re all about keeping things fresh and up-to-date, but during peak hours, it can be a challenge. Our ales have a tendency to change throughout the day, so even if we&#39;ve made updates, accuracy can still be a bit elusive. Rest assured, though, we&#39;re here to make your experience amazing!
                </p>
                <div className={`${styles.live_img}`}>
                    <CloudinaryContext cloudName='drkqjlsvr'>
                        <Image
                            publicID='livebarimage/LiveBarImage'
                            width='100%'
                            alt='This is our live bar image, It should show our current selection of ales.'
                        />
                    </CloudinaryContext>
                </div>
            </section>
        </main>
    </>
  )
}

export default Drinks