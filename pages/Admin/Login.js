import React, { useContext, useRef, useState } from 'react'
import styles from '../../styles/Login.module.css'
import AuthContext from '@/context/auth-context'
import Spinner from '@/components/Spinner';


const AdminLogin = () => {
    const [ isLoading, setIsLoading ] = useState(false);

    const authContext = useContext(AuthContext);

    const emailEl = useRef(null);
    const passwordEl = useRef(null);

    const submitHandler = (event) => {
        setIsLoading(true);
        event.preventDefault();
        const email = emailEl.current.value;
        const password = passwordEl.current.value;

        if(email.trim().length === 0 || password.trim().length === 0) {
            return;
        }

        const requestBody = {
            query: `
                query {
                    login(email: "${email}", password: "${password}") {
                        userId
                        token
                        tokenExpiration
                    }
                }
            `
        };

        fetch('https://star-backend.onrender.com/graphql' , {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if(res.status !== 200 && res.status !== 201) {
                throw new Error('Failed!');
            }
            return res.json();
        })
        .then(resData => {
            if (resData.data.login.token) {
                setIsLoading(false);
                authContext.login(
                    resData.data.login.token,
                    resData.data.login.userId,
                    resData.data.login.tokenExpiration
                );
            }
        })
        .catch(err  => {
            console.log(err)
            setIsLoading(false);
        })
    };

  return (
    <main className={`${styles.main}`}>
        {isLoading ? (<Spinner />) : (
        <form className={`${styles.login_container}`} onSubmit={submitHandler}>
            <div>
                <h1 className={`${styles.title}`}>Login</h1>
            </div>
            <div className={`${styles.form_control}`}>
                <label htmlFor='email' >E-mail:</label>
                <input type='email' id='email' ref={emailEl} placeholder='example@email.com' />
            </div>
            <div className={`${styles.form_control}`}>
                <label htmlFor='password'>Password:</label>
                <input type='password' id='password' ref={passwordEl}/>
            </div>
            <div className={`${styles.form_control}`}>
                <button type='submit' style={{margin: '0.5rem 0'}}>Login</button>
                <p>Button disabled</p>
            </div>
        </form>)}
        
    </main>
  )
}

export default AdminLogin