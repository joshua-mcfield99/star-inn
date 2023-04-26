import Head from 'next/head'
import React from 'react'
import { Cormorant_Unicase } from 'next/font/google'
import styles from '../styles/Events.module.css'

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
                <div className={`${styles.event_list_container}`}>
                    <ul className={`${styles.event_card_list}`}>
                        <li className={`${styles.event_card}`}>
                            <h3 className={`${cormorantUnicase.className}`}>Staycation</h3>
                            <p className={`${styles.date}`}>Test date</p>
                            <p className={`${styles.description}`}>Test description, Events Coming soon!</p>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    </>
  )
}

export default Events