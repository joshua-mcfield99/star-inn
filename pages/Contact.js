import Head from 'next/head'
import React from 'react'
import { Cormorant_Unicase } from 'next/font/google'

const cormorantUnicase = Cormorant_Unicase({
    subsets: ['latin'],
    weight: '700'
})

const Contact = () => {
    return (
        <>
            <Head>

            </Head>
            <main>
                <section>
                    <h1 className={`${'heading'} ${cormorantUnicase.className}`} >Contact</h1>
                    <h2 className={`${'heading'} ${cormorantUnicase.className}`}>Loaction</h2>
                    <p>
                        Nestled in the heart of the enchanting town of Godalming, Surrey, lies The Star inn - a true gem amongst the historic buildings and scenic views. As you wander down Church Street, keep an eye out for the distinctive pepper pot, and you&#39;ll find The Star just a stone&#39;s throw away. With its charming ambiance and welcoming atmosphere, The Star is the perfect place to relax and indulge in some delicious food and drinks after a day of exploring the town&#39;s stunning surroundings.
                    </p>
                    <p>Google map here</p>
                </section>
                <section>
                    <div>
                        <h2 className={`${'heading'} ${cormorantUnicase.className}`} >Contact details</h2>
                        <h3>Address:</h3>
                        <p>
                            17 Church Street
                            <br/>
                            Godalming
                            <br/>
                            Surrey
                            <br/>
                            GU7 1EL
                        </p>
                        <h3>Phone:</h3>
                        <p>
                            01483 417 717
                        </p>
                    </div>
                    <div>
                        <h2 className={`${'heading'}`} >Get in touch</h2>
                        <p>
                            We&#39;d love to hear from you! Whether you&#39;re looking to book a table or simply have a question about The Star, we&#39;re here to help. Just fill out the form below and our friendly team will get back to you as soon as possible with all the information you need.
                        </p>
                    </div>
                </section>
            </main>
        </>
    )
}
    
export default Contact