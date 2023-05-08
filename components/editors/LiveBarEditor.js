import React, { useState } from 'react'
import styles from '/styles/Editors.module.css'
import axios from 'axios';


const LiveBarEditor = () => {
    const [newImage, setNewImage] = useState(null);
    const [altText, setAltText] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      const formData = new FormData();
      formData.append('newImage', newImage);
      formData.append('altText', altText);
  
      try {
        const response = await axios.post('/api/change-live-bar-image', formData);
        setMessage(response.data.message);
      } catch (error) {
        console.error(error);
        setMessage('Error uploading file');
      }
    };
  
    const handleFileChange = (e) => {
      setNewImage(e.target.files[0]);
      
    };
  
    const handleAltTextChange = (e) => {
      setAltText(e.target.value);
    };

    return (
        <section className={`${styles.editor_section}`}>
            <form className={`${styles.editor_form}`} onSubmit={handleSubmit} method="post" action="/api/upload" encType="multipart/form-data">
                <div className={`${styles.form_control}`}>
                    <label htmlFor='newImage'>
                        Choose a live bar image.
                    </label>
                    <input 
                        name='newImage'
                        type='file'
                        onChange={handleFileChange}
                    />
                </div>
                <div className={`${styles.form_control}`}>
                    <label htmlFor='altText'>
                        Write a short sentence introducing the ales in the photo.
                    </label>
                    <textarea
                        name='altText'
                        type='text'
                        rows={4}
                        onChange={handleAltTextChange}
                    />
                </div>
                <button>Submit</button>
                {message && <p>{message}</p>}
            </form>
        </section>
    )
}
    
export default LiveBarEditor