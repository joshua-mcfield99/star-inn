import Head from 'next/head'
import React from 'react'
import { Cormorant_Unicase } from 'next/font/google'

const cormorantUnicase = Cormorant_Unicase({
    subsets: ['latin'],
    weight: '700'
})

const JoinUs = () => {
  return (
    <>
        <Head>

        </Head>
        <main>
            <section>
                <h1 className={`${'heading'} ${cormorantUnicase.className}`} >Work at the Star</h1>
                <p>
                    We are constantly seeking exceptional individuals to join our team at The Star. As a member of our team, you&#39;ll have the chance to work in a dynamic and lively pub that upholds the values of tradition while staying up-to-date with the latest trends.
                </p>
                <p>
                    If you possess a deep understanding of beer styles ranging from plum porter to oyster stout 🍻 (or are willing to learn 😉), and are committed to delivering exceptional customer service within a warm, family-run setting, we would be delighted to hear from you. 
                </p>
                <p>
                    Please feel free to contact us using the form below. Even if there are no immediate openings, we&#39;ll keep your information on file and reach out to you when an opportunity arises!
                </p>
                <form>
                    <label htmlFor='email' >Email:</label>
                    <input type={'email'} id='email' name='email' />
                    <label htmlFor='name' >Full name:</label>
                    <input type={'text'} id='name' name='name' />
                    <label htmlFor='message' >Your message:</label>
                    <input type={'text'} id='message' name='message' />
                    <label htmlFor='cv' >Upload your CV:</label>
                    <input type={'file'} id='cv' name='cv' />
                </form>
            </section>
        </main>
    </>
  )
}

export default JoinUs