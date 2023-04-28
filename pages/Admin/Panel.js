import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import styles from '../../styles/Panel.module.css';
import AuthContext from '@/context/auth-context';
import EventEditor from '@/components/editors/EventEditor';
import MenuEditor from '@/components/editors/MenuEditor';
import GalleryEditor from '@/components/editors/GalleryEditor';
import LiveBarEditor from '@/components/editors/LiveBarEditor';

const Panel = () => {
    const [ currentEditor, setCurrentEditor ] = useState('');

    const router = useRouter();
    const authContext = useContext(AuthContext);

    const handleSelect = (e) => {
        setCurrentEditor(e.target.id);
    };
    
    useEffect(() => {
        if (!authContext.token) {
            router.push('/Admin/Login');
        }
    }, [authContext.token]);

    return (
        <main className={`${styles.panel_container}`}>
            <h1>Admin Panel</h1>
            <div className={`${styles.editor_menu} `}>
                <p className={`${styles.editor_select} ${currentEditor === 'livebar' ? styles.active : ''}`} id='livebar' onClick={handleSelect}>Live bar image</p>
                <p className={`${styles.editor_select} ${currentEditor === 'gallery' ? styles.active : ''}`} id='gallery' onClick={handleSelect}>Gallery</p>
                <p className={`${styles.editor_select} ${currentEditor === 'menus' ? styles.active : ''}`} id='menus' onClick={handleSelect}>Menus</p>
                <p className={`${styles.editor_select} ${currentEditor === 'events' ? styles.active : ''}`} id='events' onClick={handleSelect}>Events</p>
            </div>
            {currentEditor === 'livebar' ? 
            (
                <div className={`${styles.editor_container}`}>
                    <h2>Live bar editor</h2>
                    <div className={`${styles.editor_component}`}>
                        <LiveBarEditor />
                    </div>
                </div>
            ) : currentEditor === 'gallery' ? (
                <div className={`${styles.editor_container}`}>
                    <h2>Gallery editor</h2>
                    <div className={`${styles.editor_component}`}>
                        <GalleryEditor />
                    </div>
                </div>
            ) : currentEditor === 'menus' ? (
                <div className={`${styles.editor_container}`}>
                    <h2>Menus editor</h2>
                    <div className={`${styles.editor_component}`}>
                        <MenuEditor />
                    </div>
                </div>
            ) : currentEditor === 'events' ? (
                <div className={`${styles.editor_container}`}>
                    <h2>Events editor</h2>
                    <div className={`${styles.editor_component}`}>
                        <EventEditor />
                    </div>
                </div>    
            ) : (null)}
        </main>
    )
}
    
export default Panel