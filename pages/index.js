import Head from 'next/head'
import { Image } from 'cloudinary-react'
import React from 'react'
import styles from '../styles/Home.module.css'
import { Cormorant_Unicase } from 'next/font/google'

const cormorantUnicase = Cormorant_Unicase({
    subsets: ['latin'],
    weight: '700'
})

const Home = () => {
    return (
        <>
            <Head>
                <title>The Star | Home</title>
                <link rel='icon' type='image/ico' src='/public/favicon.ico' />
            </Head>
            <main>
                <section className={`${styles.welcome}`}>
                    <div className={`${styles.welcome_inner}`}>
                        <div className={`${styles.home_logo}`}>
                            <Image
                                cloudName='drkqjlsvr'
                                publicID='thestar/starLogo'
                                secure="true"
                                alt='The Star'
                                width='100%'
                            />
                        </div>
                        <h1 className={`${'heading'} ${cormorantUnicase.className}`}>Welcome!</h1>
                        <p>
                            The Star has a rich history dating back to 1832, where a charming tavern stood on the very same site. The
                            present building, constructed in the 1600s, has retained its &#39;Olde Worlde&#39; character and charm, making it a
                            unique and inviting destination. With a passion for providing great food and drinks to great people, The Star
                            offers an array of events such as folk music nights, beer & cider festivals, and an everchanging
                            selection of real ales and ciders, continuing a long-standing tradition.
                        </p>
                        <p>
                            Not an ale or cider fan? No problem! The Star also offers an extensive wine list, a wide range of craft beers,
                            and a selection of locally-produced gin, as well as a variety of rums that will surely satisfy your taste buds.
                            Whether you&#39;re in the mood for something classic or exotic, The Star has got you covered.
                        </p>
                        <p>
                            But the real gem of this establishment is the stunning beer garden. Filled with lush greenery and ample
                            seating, it creates an incredibly atmospheric feel that transports you to another world. And while you&#39;re there,
                            don&#39;t miss out on the chance to sample our delicious home-cooked food, perfect for any season of the year.
                        </p>
                        <p>
                            The Star&#39;s garden lounge and back section of the garden are perfect for private events, accommodating up to
                            50 people with no hire charge and a £100 deposit. Please note that there is a minimum requirement of 20
                            people for private events.
                        </p>
                        <p>
                            So what are you waiting for? Come and join us at The Star and experience the charm and character of this
                            unique tavern!
                        </p>
                        <div className={`${styles.welcome_img}`}>
                            <Image
                                cloudName='drkqjlsvr'
                                publicID='thestar/team'
                                secure="true"
                                alt='The Star staff'
                                width='100%'
                            />
                        </div>
                    </div>
                </section>
                <section>
                    <h2 className={`${'heading'} ${cormorantUnicase.className}`} >Awards</h2>
                    <p>
                        The Star is more than just a pub, it&#39;s a multi-award-winning establishment. For a record-breaking 10 years,
                        we have proudly held the title of Surrey and Hants borders Cider pub of the year, as well as recently
                        being awarded the regional Surrey and Sussex CAMRA Cider Pub of the Year 2023.
                    </p>
                    <p>
                        We were first featured in the CAMRA Good Beer Guide in 2007 and have since continued to excel in our
                        craft, earning a place as finalists for the Greene King Beer Pub of the Year 2023.
                    </p>
                    <p>
                        But we don&#39;t just excel in beer and cider. Our beautiful floral displays have won us the prestigious &#39;Best
                        Overall Pub&#39; in &#39;Godalming in Bloom&#39; and our newly renovated garden is a tranquil oasis for all.
                    </p>
                    <p>
                        At The Star, customer service is at the heart of everything we do. We are proud to announce that our
                        dedicated team has been awarded the Gold &#39;Compete on the Street&#39; award for customer service by the
                        Godalming Chamber of Commerce.
                    </p>
                </section>
            </main>
        </>
    )
}
    
export default Home