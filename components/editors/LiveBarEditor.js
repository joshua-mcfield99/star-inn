import React, { useState } from 'react'
import styles from '/styles/Editors.module.css'
import axios from 'axios';
import cloudinary from 'cloudinary-core';





const LiveBarEditor = () => {

    //const handleFileUpload = async (event) => {
    //    const file = event.target.files[0];
    //    const formData = new FormData();
    //    formData.append('file', file);
    //    formData.append('upload_preset', 'ez2vk527');
    //    formData.append('public_id', 'LiveBarImage');
    //    const response = await fetch(`https://api.cloudinary.com/v1_1/drkqjlsvr/upload`, {
    //      method: 'POST',
    //      body: formData
    //    });
    //    const data = await response.json();
    //    console.log(data);
    //    console.log(data.secure_url);
    //}

    const [newImage, setNewImage] = useState(null);
    const [altText, setAltText] = useState('');
    const [message, setMessage] = useState('');
    
   
    
    return (
        <section className={`${styles.editor_section}`}>
        <form className={`${styles.editor_form}`} method="post" action="/api/upload" encType="multipart/form-data">
        <div className={`${styles.form_control}`}>
        <label htmlFor='newImage'>
        Choose a live bar image.
        </label>
        <input 
        name='newImage'
        type='file'
        onChange={console.log('changed')}
        />
        </div>
        </form>
        </section>
        )
    }
    
    export default LiveBarEditor