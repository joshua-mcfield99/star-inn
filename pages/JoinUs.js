import Head from 'next/head'
import React, { useState } from 'react'
import { Cormorant_Unicase } from 'next/font/google'
import styles from '../styles/JoinUs.module.css'

const cormorantUnicase = Cormorant_Unicase({
    subsets: ['latin'],
    weight: '700'
})

const JoinUs = () => {
    const [fileName, setFileName] = useState('');

    function handleFileSelect(event) {
        setFileName(event.target.files[0].name);
    }

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
                <form className={`${styles.form_container}`}>
                    <div className={`${styles.form_control}`}>
                        <label htmlFor='email' >Email:</label>
                        <input type={'email'} id='email' name='email' required/>
                    </div>
                    <div className={`${styles.form_control}`}>
                        <label htmlFor='name' >Full name:</label>
                        <input type={'text'} id='name' name='name' required/>
                    </div>
                    <div className={`${styles.form_control}`}>
                        <label htmlFor='message' >Your message:</label>
                        <textarea rows='10' cols='40' id='message' name='message' required>
                        </textarea>
                    </div>
                    <div className={`${styles.form_control}`}>
                        <label htmlFor="cv">Upload your CV:</label>
                        <div className={`${styles.file_input_container}`}>
                            <input
                                type="file"
                                id="cv"
                                name="cv"
                                className={`${styles.file_input}`}
                                onChange={handleFileSelect}
                            />
                            <label htmlFor="cv" className={`${styles.file_input_label}`}>
                                {fileName || 'Choose a file'}
                            </label>
                        </div>
                    </div>
                    <div className={`${styles.form_submit}`}>
                        <button>Submit</button>
                    </div>
                </form>
            </section>
        </main>
    </>
  )
}

export default JoinUs