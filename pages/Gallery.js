import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../styles/Gallery.module.css';
import { Cormorant_Unicase } from 'next/font/google';
import GalleryWSP from '@/components/GalleryWSP';

const cormorantUnicase = Cormorant_Unicase({
    subsets: ['latin'],
    weight: '700'
})

const GalleryPage = ({ images }) => {
    const [ trigger, setTrigger ] = useState(false);
    const [ imageClicked, setImageClicked ] = useState('');

    const galleryImages = images.map((image) => ({
        src: image.image,
        thumbnail: image.secure_url,
        thumbnailWidth: image.width,
        thumbnailHeight: image.height,
    }));

    return (
        <>
            <Head>
                <title>The Star | Gallery</title>
            </Head>
            <main>
                <section>
                    <h1 className={`${'heading'} ${cormorantUnicase.className}`} >Gallery</h1>
                    <p>Experience our pub&#39;s gallery of culinary delights, thirst-quenching drinks, and inviting ambiance through our stunning collection of photographs. Immerse yourself in the warm and welcoming atmosphere of our space, from cozy nooks to vibrant bar scenes. Come join us and enjoy the mouth-watering flavors of our menu for an unforgettable dining adventure!</p>
                    <GalleryWSP galleryImages={galleryImages}/>
                </section>
            </main>
        </>
        )
    };
    
    export async function getStaticProps() {
        try {
            const response = await fetch(
                `https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/resources/image/upload?prefix=starGallery`, {
                    headers: {
                        Authorization: `Basic ${Buffer.from(process.env.CLOUD_KEY + ':' + process.env.CLOUD_SEC).toString('base64')}`
                    }
                });   
                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`);
                }
                    
                const results = await response.json();
                console.log('Results:', results);
                
                const { resources } = results;
                
                const images = resources.map(resource => {
                    const { width, height } = resource;
                    return {
                        id: resource.asset_id,
                        title: resource.public_id,
                        image: resource.secure_url,
                        width,
                        height
                    };
                });
                    
                return {
                    props: { images }
                };

        } catch (error) {
            console.log('Error:', error);
                    
            return {
                props: { images: [] }
            };
        }
    }
            
export default GalleryPage;