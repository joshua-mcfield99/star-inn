import React, { useState } from 'react'
import styles from '../styles/Gallery.module.css'
import { Image } from 'cloudinary-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faChevronRight, 
    faChevronLeft,
    faXmark 
} from '@fortawesome/free-solid-svg-icons';

const GalleryWSP = ({ galleryImages }) => {
    //console.log(galleryImages)
    const [ slideNumber, setSlideNumber ] = useState(0);
    const [ openModal, setOpenModal ] = useState(false);
    
    const handleOpenModal = (index) => {
        setSlideNumber(index);
        setOpenModal(true);
    }

    //close modal
    const handleClose = () => {
        setOpenModal(false);
    };

    //previous slide
    const handlePrev = () => {
        slideNumber === 0 
        ? setSlideNumber(galleryImages.length -1) 
        : setSlideNumber(slideNumber - 1)
    };

    //next slide
    const handleNext = () => {
        slideNumber + 1 === galleryImages.length 
        ? setSlideNumber(0)
        : setSlideNumber(slideNumber + 1)
    };

    return (
        <div>
            {   openModal && 
                <div className={`${styles.slider_wrap}`}>
                    <FontAwesomeIcon icon={faXmark} className={`${styles.close}`} onClick={handleClose}/>
                    <FontAwesomeIcon icon={faChevronLeft} className={`${styles.prev}`} onClick={handlePrev}/>
                    <FontAwesomeIcon icon={faChevronRight} className={`${styles.next}`} onClick={handleNext}/>
                    <div className={`${styles.full_image}`}>
                        <Image 
                            cloudName='drkqjlsvr'
                            publicId={galleryImages[slideNumber].src}
                            width={galleryImages[slideNumber].width}
                            height={galleryImages[slideNumber].height}
                            crop='fill'
                            alt={galleryImages[slideNumber].title}
                        />
                    </div>
                </div>
            }
            <div className={`${styles.gallery_wrapper}`}>
                {
                    galleryImages && galleryImages.map((slide, index) => {
                        return (
                            <div 
                                className={`${styles.single}`} 
                                key={index}
                                onClick={() => handleOpenModal(index)}
                            >
                                <Image
                                    cloudName='drkqjlsvr'
                                    publicId={slide.src}
                                    width={slide.width}
                                    height={slide.height}
                                    crop='fill'
                                    alt={slide.title}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
    
export default GalleryWSP