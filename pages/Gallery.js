import Head from 'next/head'
import React from 'react'
import { Cormorant_Unicase } from 'next/font/google'

const cormorantUnicase = Cormorant_Unicase({
    subsets: ['latin'],
    weight: '700'
})

const Gallery = () => {
  return (
    <>
        <Head>

        </Head>
        <main>
            <section>
                <h1 className={`${'heading'} ${cormorantUnicase.className}`} >Gallery</h1>
                
            </section>
        </main>
    </>
  )
}

export default Gallery