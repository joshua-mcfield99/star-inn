import Head from 'next/head'
import React, { useState } from 'react'
import { Cormorant_Unicase } from 'next/font/google'
import styles from '../styles/JoinUs.module.css'
import { Button, Container, FormControl, FormErrorMessage, FormLabel, Input, Text, Textarea, useToast } from '@chakra-ui/react'
import { sendJobApplication } from '@/lib/api'


const cormorantUnicase = Cormorant_Unicase({
    subsets: ['latin'],
    weight: '700'
})

const initValues = {
    name: "",
    email: "",
    message: ""
}

const initState = { values: initValues, isLoading: false, validEmail: false }

const JoinUs = () => {
    const toast = useToast();
    const [ state, setState] = useState(initState);
    const [ touched, setTouched ] = useState({});

    const { values, isLoading, validEmail, error } = state;

    const onBlur = ({ target }) => 
    setTouched((prev) => ({
        ...prev,
        [target.name]: true
    }));

    const handleChange = ({ target }) => {
        const { name, value } = target;
        let error = '';
      
        if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            error = 'Invalid email format';
            setState((prev) => ({
                ...prev,
                validEmail: false
            }))
        } else if (name === 'email') {
            setState((prev) => ({
                ...prev,
                validEmail: true
            }))
        }
      
        setState((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                [name]: value,
            },
            error: error,
        }));
    };

    const onSubmit = async () => {
        setState((prev) => ({
            ...prev,
            isLoading: true
        }));
        try {
            await sendJobApplication(values);
            setTouched({});
            setState(initState);
            setValidEmail(false);
            toast({
                title: "Message sent.",
                status: "success",
                duration: 2000,
                position: "top"
            })
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error.message
            }));
        }
    }

    return (
        <>
        <Head>
        
        </Head>
        <main>
            <section>
                <h1 className={`${styles.heading} ${cormorantUnicase.className}`} >Work at the Star</h1>
                <p>
                    We are constantly seeking exceptional individuals to join our team at The Star. As a member of our team, you&#39;ll have the chance to work in a dynamic and lively pub that upholds the values of tradition while staying up-to-date with the latest trends.
                </p>
                <p>
                    If you possess a deep understanding of beer styles ranging from plum porter to oyster stout 🍻 (or are willing to learn 😉), and are committed to delivering exceptional customer service within a warm, family-run setting, we would be delighted to hear from you. 
                </p>
                <p>
                    Please feel free to contact us using the form below. Even if there are no immediate openings, we&#39;ll keep your information on file and reach out to you when an opportunity arises!
                </p>
                <Container maxW='450px'>
                    {error && (
                        <Text color='red.300' my={4} fontSize='xl'>
                            {error}
                        </Text>
                    )}
                    <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
                        <FormLabel>Name</FormLabel>
                        <Input 
                            type='text'
                            name='name'
                            errorBorderColor='red.300'
                            value={values.name}
                            onChange={handleChange}
                            onBlur={onBlur}
                        />
                        <FormErrorMessage>Required</FormErrorMessage>
                    </FormControl>
                    <FormControl isRequired isInvalid={touched.email && !validEmail} mb={5}>
                        <FormLabel>Email</FormLabel>
                        <Input 
                            type='email'
                            name='email'
                            errorBorderColor='red.300'
                            value={values.email}
                            onChange={handleChange}
                            onBlur={onBlur}
                        />
                        <FormErrorMessage>Required {!validEmail ? "Invalid Email" : ""}</FormErrorMessage>
                    </FormControl>
                    <FormControl isRequired isInvalid={touched.message && !values.message} mb={5}>
                        <FormLabel>Message</FormLabel>
                        <Textarea
                            type='text'
                            name='message'
                            rows={4}
                            errorBorderColor='red.300'
                            value={values.meassage}
                            onChange={handleChange}
                            onBlur={onBlur}
                        />
                        <FormErrorMessage>Required</FormErrorMessage>
                    </FormControl>
                    <Button
                        variant="outline"
                        colorScheme='black'
                        isLoading={isLoading}
                        isDisabled={!values.name || !values.email || !values.message || !validEmail}
                        onClick={onSubmit}
                    >Submit</Button>
                </Container>
            </section>
        </main>
        </>
    )
}
    
export default JoinUs