import React from 'react'
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import styles from '../../styles/Panel.module.css';
import AuthContext from '@/context/auth-context';

const Panel = () => {
    const router = useRouter();
    const authContext = useContext(AuthContext);
    
    useEffect(() => {
        if (!authContext.token) {
            router.push('/Admin/Login');
        }
    }, [authContext.token]);

    return (
        <main className={`${styles.panel_container}`}>
            
        </main>
    )
}
    
export default Panel