import Head from 'next/head'
import React from 'react'
import { Cormorant_Unicase } from 'next/font/google'
import Image from 'next/image'

const cormorantUnicase = Cormorant_Unicase({
    subsets: ['latin'],
    weight: '700'
})

const Drinks = () => {
  return (
    <>
        <Head>

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
                    While we endeavor to maintain an up-to-date bar image, during peak hours, we may not always be able to do so.
                </p>
                <div className='livebar'>
                    <Image
                        src='/Live bar place holder.jpg'
                        alt='This is a live picture of our current ales.'
                        fill='fit'
                        className={`${'imagefill'}`}
                    />
                </div>
            </section>
        </main>
    </>
  )
}

export default Drinks