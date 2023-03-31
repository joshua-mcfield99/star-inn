import Head from 'next/head'
import React from 'react'
import { Cormorant_Unicase } from 'next/font/google'

const cormorantUnicase = Cormorant_Unicase({
    subsets: ['latin'],
    weight: '700'
})

const Food = () => {
  return (
    <>
        <Head>

        </Head>
        <main>
            <section className='left'>
                <h1 className={`${'heading'} ${cormorantUnicase.className}`} >Food</h1>
                <p>
                    Indulge in our mouth-watering pub food that is all freshly prepared in-house with locally-sourced ingredients. Our Sunday roast is simply legendary and will leave your taste buds singing with joy! Don&#39;t just take our word for it, check out our gallery for some tantalizing pictures that will make you want to visit us right away.
                </p>

                <div>
                    <h2 className={`${'heading'} ${cormorantUnicase.className}`} >menu</h2>
                    <p><strong>VEGAN</strong> = vegan | <strong>v</strong> = Vegetarian | <strong>g</strong> = Gluten free</p>
                </div>
            </section>
            <section className='right'>
                <div>
                    <h2 className={`${'heading'} ${cormorantUnicase.className}`} >Kitchen Hours</h2>
                    <h3>Weekdays</h3>
                    <p>Lunch: 12-2:15pm</p>
                    <p>Evening: 5-8pm</p>
                    <h3>Saturday</h3>
                    <p>Lunch: 12-3:45pm</p>
                    <p>Evening: 5-8pm</p>
                    <h3>Sunday</h3>
                    <p>Lunch: 12-3pm</p>
                    <p>Evening: Closed</p>
                </div>
            </section>
        </main>
    </>
  )
}

export default Food