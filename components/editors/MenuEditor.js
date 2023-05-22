import axios from 'axios';
import React, { useState } from 'react';
import styles from '/styles/components/Editors.module.css';

const MenuEditor = () => {
    const [selectedPDF, setSelectedPDF] = useState(null);
    const [message, setMessage] = useState('');
    const [menuSelection, setMenuSelection] = useState('');
    
    const handlePDFChange = (event) => {
        const file = event.target.files[0];
        setSelectedPDF(file);
    };
    
    const handleMenuChange = (event) => {
        const selection = event.target.value;
        setMenuSelection(selection);
    };
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        if (!selectedPDF || !menuSelection) {
            // Handle error if no PDF or menu selection is made
            return;
        }
        
        try {
            // Fetch the signature from the API route
            const response = await axios.get('https://www.starinngodalming.co.uk/.netlify/functions/sign-gen', {
            params: {
                timestamp: Math.floor(Date.now() / 1000),
                upload_preset: 'vw9icdpp',
            },
        });
        
        const { signature } = response.data;
        
        const formData = new FormData();
        formData.append('file', selectedPDF, 'PDFFile');
        formData.append('upload_preset', 'vw9icdpp');
        formData.append('signature', signature);
        formData.append('api_key', '585686486369695');
        formData.append('timestamp', Math.floor(Date.now() / 1000));
        formData.append('public_id', menuSelection); // Set the publicId based on the menu selection
        
        const uploadResponse = await axios.post(
            'https://api.cloudinary.com/v1_1/drkqjlsvr/upload/image',
            formData
            );
            
            console.log(uploadResponse.data);
            setMessage('PDF uploaded successfully.');
        } catch (error) {
            console.error(error);
            setMessage('PDF upload failed.');
        }
    };
    
    return (
        <section className={`${styles.editor_section}`}>
            <form
                className={`${styles.editor_form}`}
                onSubmit={handleFormSubmit}
                method="POST"
                encType="multipart/form-data"
            >
                <div className={`${styles.form_control}`}>
                    <label htmlFor="newPDF">Choose a PDF file.</label>
                    <input name="newPDF" type="file" onChange={handlePDFChange} />
                </div>
                <div className={`${styles.form_control}`}>
                    <label htmlFor="menuSelection">Select which menu to change.</label>
                    <select name="menuSelection" onChange={handleMenuChange}>
                        <option value="">Select an option</option>
                        <option value="LunchMenu">Lunch Menu</option>
                        <option value="EveningMenu">Evening Menu</option>
                        <option value="ChipShopMenu">Chip Shop Menu</option>
                        <option value="BurgerMenu">Burger Menu</option>
                        <option value="PizzaMenu">Pizza Menu</option>
                        <option value="SundayMenu">Sunday Lunch Menu</option>
                    </select>
                </div>
                <div className={`${styles.form_control}`}>
                    <button type="submit">Upload PDF</button>
                </div>
            </form>
            {message && <div>{message}</div>}
        </section>
    );
};
    
export default MenuEditor;