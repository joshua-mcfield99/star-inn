import Head from 'next/head'
import React, { useState } from 'react'
import styles from '../styles/Food.module.css'
import { Cormorant_Unicase } from 'next/font/google'
import PdfViewer from '../components/PdfViewer';
import MenuPopUp from '@/components/MenuPopUp';

const cormorantUnicase = Cormorant_Unicase({
    subsets: ['latin'],
    weight: '700'
})


const Food = () => {
    const [ trigger, setTrigger ] = useState(false);
    const [ menuClicked, setMenuClicked ] = useState('');

  return (
    <>
        <Head>
            <title>The Star | Food</title>
        </Head>
        <main className={`${styles.food}`}>
            <section>
                <h1 className={`${'heading'} ${cormorantUnicase.className}`} >Food</h1>
                <p>
                    Indulge in our mouth-watering pub food that is all freshly prepared in-house with locally-sourced ingredients. Our Sunday roast is simply legendary and will leave your taste buds singing with joy! Don&#39;t just take our word for it, check out our gallery for some tantalizing pictures that will make you want to visit us right away.
                </p>
                <div className={`${styles.kitchen_hours}`}>
                    <h2 className={`${'heading'} ${cormorantUnicase.className}`} >Kitchen Hours</h2>
                    <ul>
                    
                        <li>
                            <h3 className={`${cormorantUnicase.className}`} >Weekdays</h3>
                            <p>Lunch: 12-2:15pm</p>
                            <p>Evening: 5-8pm</p>
                        </li>
                        <li>
                            <h3 className={`${cormorantUnicase.className}`} >Saturday</h3>
                            <p>Lunch: 12-3:30pm</p>
                            <p>Evening: 5-8pm</p>

                        </li>
                        <li>
                            <h3 className={`${cormorantUnicase.className}`} >Sunday</h3>
                            <p>Lunch: 12-3pm</p>
                            <p>Evening: Closed</p>
                        </li>
                    </ul>
                </div>

                <div className={`${styles.menus_container}`}>
                    <h2 className={`${'heading'} ${cormorantUnicase.className}`} >Menu</h2>
                    <p>Click a menu for an enlarged view.</p>
                    <div className={`${styles.menu_select}`}>
                        <div className={`${styles.menus}`} onClick={() => {setTrigger(true); setMenuClicked('/StarmenuLunchtime2023March.pdf')}}>
                            <h3>Lunch Menu</h3>
                            <PdfViewer pdfUrl={'/StarmenuLunchtime2023March.pdf'}/>
                        </div>
                        <div className={`${styles.menus}`} onClick={() => {setTrigger(true); setMenuClicked('/Star Evening menu March 2023.pdf')}}>
                            <h3>Evening Menu</h3>
                            <PdfViewer pdfUrl={'/Star Evening menu March 2023.pdf'}/>
                        </div>
                        <div className={`${styles.menus}`} onClick={() => {setTrigger(true); setMenuClicked('/Star chip shop menu March 2023.pdf')}}>
                            <h3>Chip Shop Menu</h3>
                            <PdfViewer pdfUrl={'/Star chip shop menu March 2023.pdf'}/>
                        </div>
                        <div className={`${styles.menus}`} onClick={() => {setTrigger(true); setMenuClicked('/Star Burger menu 2023.pdf')}}>
                            <h3>Burger Night Menu</h3>
                            <PdfViewer pdfUrl={'/Star Burger menu 2023.pdf'}/>
                        </div>
                        <div className={`${styles.menus}`} onClick={() => {setTrigger(true); setMenuClicked('/Star Pizza menu 2023.pdf')}}>
                            <h3>Pizza Night Menu</h3>
                            <PdfViewer pdfUrl={'/Star Pizza menu 2023.pdf'}/>
                        </div>
                        <div className={`${styles.menus}`} onClick={() => {setTrigger(true); setMenuClicked('/Star menu Sunday 2023 March.pdf')}}>
                            <h3>Sunday Lunch Menu</h3>
                            <PdfViewer pdfUrl={'/Star menu Sunday 2023 March.pdf'}/>
                        </div>
                    </div>
                    <MenuPopUp trigger={trigger} setTrigger={setTrigger} pdfUrl={menuClicked} />
                </div>
            </section>

        </main>
    </>
  )
}

export default Food