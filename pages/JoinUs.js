import Head from 'next/head'
import React, { useState } from 'react'
import axios from 'axios'
import { Cormorant_Unicase } from 'next/font/google'
import styles from '../styles/JoinUs.module.css'

const cormorantUnicase = Cormorant_Unicase({
    subsets: ['latin'],
    weight: '700'
})

const JoinUs = () => {
    const [fileName, setFileName] = useState('');
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cv, setCv] = useState(null);
    const [message, setMessage] = useState("");
    const [resMessage, setResMessage] = useState("");
    
    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    
    
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };
    
    const handleCvChange = (e) => {
        setFileName(e.target.files[0].name);
        setCv(e.target.files[0]);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("message", message)
        formData.append("cv", cv);
        
        try {
            const res = await axios.post("/api/send-job-application", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            setResMessage(res.data);
        } catch (error) {
            setResMessage(`Something went wrong. Please try again later. ${error}`);
        }
    };
    
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
                <form className={`${styles.form_container}`} method="POST" encType="multipart/form-data">
                    <div className={`${styles.form_control}`}>
                        <label htmlFor='name' >Full name:</label>
                        <input type={'text'} id='name' name='name' value={name} onChange={handleNameChange} required/>
                    </div>
                    <div className={`${styles.form_control}`}>
                        <label htmlFor='email' >Email:</label>
                        <input type={'email'} id='email' name='email' value={email} onChange={handleEmailChange} required/>
                    </div>
                    <div className={`${styles.form_control}`}>
                        <label htmlFor='message' >Your message:</label>
                        <textarea rows='10' cols='40' id='message' name='message' value={message} onChange={handleMessageChange} required>
                        </textarea>
                    </div>
                    <div className={`${styles.form_control}`}>
                        <label>
                            CV:
                            <input type="file" accept=".pdf,.doc,.docx" onChange={handleCvChange} />
                        </label>
                    </div>
                    <div className={`${styles.form_submit}`}>
                        <button type='submit' onClick={handleSubmit}>Submit</button>
                    </div>
                    <p>{resMessage}</p>
                </form>
            </section>
        </main>
        </>
    )
}
    
export default JoinUs