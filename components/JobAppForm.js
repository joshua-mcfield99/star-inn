import React, { useState } from 'react'
import { Button, ChakraProvider, Container, FormControl, FormErrorMessage, FormLabel, Input, Text, Textarea, useToast } from '@chakra-ui/react'
import { sendJobApplication } from '../functions/api'

const initValues = {
    name: "",
    email: "",
    message: ""
}

const initState = { values: initValues, isLoading: false, validEmail: false }

const JobAppForm = () => {
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
            await sendJobApplication({
                name: values.name,
                email: values.email,
                message: values.message
            });
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
        <ChakraProvider>
            <Container maxW='450px' bg="#FFF" padding="2rem" borderRadius="25px" marginLeft="0" marginRight="auto">
                {error && (
                    <Text color='red.300' my={4} fontSize='xl'>
                        {error}
                    </Text>
                )}
                <FormControl isRequired netlify isInvalid={touched.name && !values.name} mb={5}>
                    <FormLabel>Name</FormLabel>
                    <Input 
                    type='text'
                    name='name'
                    errorBorderColor='red.300'
                    value={values.name}
                    onChange={handleChange}
                    onBlur={onBlur}
                    bg="#FFF"
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
                    bg="#FFF"
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
                    bg="#FFF"
                    />
                    <FormErrorMessage>Required</FormErrorMessage>
                </FormControl>
                <Button
                    variant="outline"
                    colorScheme='black'
                    isLoading={isLoading}
                    isDisabled={!values.name || !values.email || !values.message || !validEmail}
                    onClick={onSubmit}
                    bg="#FFF"
                >Submit</Button>
            </Container>
            </ChakraProvider>
            )
        }
        
        export default JobAppForm