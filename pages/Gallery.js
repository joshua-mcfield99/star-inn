import Head from 'next/head'
import React from 'react'
import styles from '../styles/Gallery.module.css'
import { Cormorant_Unicase } from 'next/font/google'

const cormorantUnicase = Cormorant_Unicase({
    subsets: ['latin'],
    weight: '700'
})

const Gallery = () => {
  return (
    <>
        <Head>
            <title>The Star | Gallery</title>
        </Head>
        <main>
            <section>
                <h1 className={`${'heading'} ${cormorantUnicase.className}`} >Gallery</h1>
                <p>Experience our pub&#39;s gallery of culinary delights, thirst-quenching drinks, and inviting ambiance through our stunning collection of photographs. Immerse yourself in the warm and welcoming atmosphere of our space, from cozy nooks to vibrant bar scenes. Come join us and enjoy the mouth-watering flavors of our menu for an unforgettable dining adventure!</p>
                <div className={`${styles.gallery}`}>
                    <p>Gallery coming soon!</p>
                </div>
            </section>
        </main>
    </>
  )
}

export default Gallery