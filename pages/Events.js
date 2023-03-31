import Head from 'next/head'
import React from 'react'
import { Cormorant_Unicase } from 'next/font/google'

const cormorantUnicase = Cormorant_Unicase({
    subsets: ['latin'],
    weight: '700'
})

const Events = () => {
  return (
    <>
        <Head>

        </Head>
        <main>
            <section>
                <h1 className={`${'heading'} ${cormorantUnicase.className}`} >Events</h1>
                <p>
                    Our regular events include a free Quiz Night on Sunday evening from 8pm and local folk musicians playing in the bar from 9pm on Mondays. 
                </p>
            </section>
            <section>
                <h2 className={`${'heading'} ${cormorantUnicase.className}`} >Upcoming Events</h2>
                <div>
                    <p>events section</p>
                </div>
            </section>
        </main>
    </>
  )
}

export default Events