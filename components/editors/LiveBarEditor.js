import axios from 'axios';
import React, { useState } from 'react';
import styles from '/styles/components/Editors.module.css';
import { CloudinaryContext, Image } from 'cloudinary-react';

const LiveBarEditor = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [message, setMessage] = useState('');
    
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        if (!selectedImage) {
            // Handle error if no image is selected
            return;
        }
        
        try {
            // Fetch the signature from the API route
            const response = await axios.get('https://www.starinngodalming.co.uk/.netlify/functions/sign-gen', {
            params: {
                timestamp: Math.floor(Date.now() / 1000),
                upload_preset: 'ez2vk527',
            },
        });
        
        const { signature } = response.data;
        
        const formData = new FormData();
        formData.append('file', selectedImage, 'LiveBarImage');
        formData.append('upload_preset', 'ez2vk527');
        formData.append('signature', signature);
        formData.append('api_key', '585686486369695');
        formData.append('timestamp', Math.floor(Date.now() / 1000));
        
        const uploadResponse = await axios.post(
            'https://api.cloudinary.com/v1_1/drkqjlsvr/image/upload',
            formData
            );
            
            console.log(uploadResponse.data);
            setMessage('Image uploaded successfully.');
            setImageUrl(uploadResponse.data.secure_url);
        } catch (error) {
            console.error(error);
            setMessage('Image upload failed.');
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
                    <label htmlFor="newImage">Choose a live bar image.</label>
                    <input name="newImage" type="file" onChange={handleImageChange} />
                </div>
                <div className={`${styles.form_control}`}>
                    <button type="submit">Upload Image</button>
                </div>
            </form>
            <div className={`${styles.upload_info}`}>
                {message && <div>{message}</div>}
                {imageUrl && 
                    <CloudinaryContext cloudName="drkqjlsvr">
                        <Image src={imageUrl} alt="Uploaded Image" />
                    </CloudinaryContext>
                }
            </div>
        </section>
    );
};
    
    export default LiveBarEditor;