import Head from 'next/head'
import React from 'react'
import Script from 'next/script';
import styles from '../styles/Contact.module.css'
import { Cormorant_Unicase } from 'next/font/google'
import Map from '@/components/Map'
import { ChakraProvider, Container } from '@chakra-ui/react'
import ContactForm from '@/components/ContactForm';

const cormorantUnicase = Cormorant_Unicase({
    subsets: ['latin'],
    weight: '700'
})

const Contact = () => {

    return (
        <ChakraProvider>
            <Head>
                <title>The Star | Contact</title>
            </Head>
            <Container maxW="none" bg="#f8f1e7" paddingTop="0" paddingBottom="2rem">
                <main>

                    <section>
                        <h1 className={`${'heading'} ${cormorantUnicase.className}`} >Contact</h1>
                        <p>
                            Welcome to our Contacts page! Here, you will find our location and contact details, including our phone number and email address. We are always happy to hear from you, so please don&#39;t hesitate to reach out if you have any questions or feedback.
                        </p>
                        <h2 className={`${'heading'} ${cormorantUnicase.className}`}>Location</h2>
                        <p>
                            Nestled in the heart of the enchanting town of Godalming, Surrey, lies The Star inn - a true gem amongst the historic buildings and scenic views. As you wander down Church Street, keep an eye out for the distinctive pepper pot, and you&#39;ll find The Star just a stone&#39;s throw away. With its charming ambiance and welcoming atmosphere, The Star is the perfect place to relax and indulge in some delicious food and drinks after a day of exploring the town&#39;s stunning surroundings.
                        </p>
                        <Map/>
                    </section>
                    <section>
                        <div className={`${styles.inner_section}`}>
                            <h2 className={`${'heading'} ${cormorantUnicase.className}`} >Contact details</h2>
                            <div className={`${styles.details_container}`}>
                                <div className={`${styles.detail_card}`}>
                                    <h3 className={`${cormorantUnicase.className}`}>Address:</h3>
                                    <p>
                                        17 Church Street
                                    </p>
                                    <p>
                                        Godalming
                                    </p>
                                    <p>
                                        Surrey
                                    </p>
                                    <p>
                                        GU7 1EL
                                    </p>
                                </div>
                                <div className={`${styles.detail_card}`}>
                                    <h3 className={`${cormorantUnicase.className}`}>Phone:</h3>
                                    <p>
                                        01483 417 717
                                    </p>
                                </div>
                                <div className={`${styles.detail_card}`}>
                                    <h3 className={`${cormorantUnicase.className}`}>Email:</h3>
                                    <p>
                                        stargodalming@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.inner_section}`}>
                            <h2 className={`${'heading'} ${cormorantUnicase.className}`} >GBW (Godalming Beer Works)</h2>
                            <p>Want to find out more about our microbrewery? You can contact us on the email below!</p>
                            <div className={`${styles.detail_card}`} >
                                <h3 className={`${cormorantUnicase.className}`} >Email:</h3>
                                <p>info@godalming.beer</p>
                            </div>
                        </div> 
                        <div>
                            <h2 className={`${'heading'} ${cormorantUnicase.className}`} >Get in touch</h2>
                            <p>
                                We&#39;d love to hear from you! Whether you&#39;re looking to book a table or simply have a question about The Star, we&#39;re here to help. Just fill out the form below and our friendly team will get back to you as soon as possible with all the information you need.
                            </p>
                            <ContactForm/>
                        </div>
                    </section>
                </main>
            </Container>
        </ChakraProvider>
    )
}
    
export default Contact