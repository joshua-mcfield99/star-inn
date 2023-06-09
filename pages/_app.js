import Layout from '@/components/Layout'
import '@/styles/globals.css'
import AuthContext from '@/context/auth-context'
import { useState } from 'react'
import Router from 'next/router'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {
    const [ token, setToken ] = useState(null)
    const [ userId, setUserId ] = useState(null)

    const login = (token, userId, tokenExpiration) => {
        setToken(token);
        setUserId(userId);
        Router.push('/Admin/Panel');
    }

    const logout = () => {
        setToken(null);
        setUserId(null);
        Router.push('/')
    }
    
    const colors = {
        backgrounds: {
            100: '#fff0da',
            200: '#FFF',
            300: '#000'
        }
    }

    const theme = extendTheme({colors});

    return (

        <AuthContext.Provider value={{ 
            token: token, 
            userId: userId, 
            login: login, 
            logout: logout 
        }}>
            <Layout logout={logout}>
                <Component {...pageProps} />
            </Layout>  
        </AuthContext.Provider>

    ) 
}
