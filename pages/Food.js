import Head from 'next/head'
import React, { useState } from 'react'
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

        </Head>
        <main className='food'>
            <section>
                <h1 className={`${'heading'} ${cormorantUnicase.className}`} >Food</h1>
                <p>
                    Indulge in our mouth-watering pub food that is all freshly prepared in-house with locally-sourced ingredients. Our Sunday roast is simply legendary and will leave your taste buds singing with joy! Don&#39;t just take our word for it, check out our gallery for some tantalizing pictures that will make you want to visit us right away.
                </p>
                <div className='kitchen_hours'>
                    <h2 className={`${'heading'} ${cormorantUnicase.className}`} >Kitchen Hours</h2>
                    <ul>
                    
                        <li>
                            <h3>Weekdays</h3>
                            <p>Lunch: 12-2:15pm</p>
                            <p>Evening: 5-8pm</p>
                        </li>
                        <li>
                            <h3>Saturday</h3>
                            <p>Lunch: 12-3:45pm</p>
                            <p>Evening: 5-8pm</p>

                        </li>
                        <li>
                            <h3>Sunday</h3>
                            <p>Lunch: 12-3pm</p>
                            <p>Evening: Closed</p>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className={`${'heading'} ${cormorantUnicase.className}`} >Menu</h2>
                    <p>Click a menu for an enlrged view.</p>
                    <div className='menu_select'>
                        <div className='menus' onClick={() => {setTrigger(true); setMenuClicked('/StarmenuLunchtime2023March.pdf')}}>
                            <h3>Lunch Menu</h3>
                            <PdfViewer pdfUrl={'/StarmenuLunchtime2023March.pdf'}/>
                        </div>
                        <div className='menus' onClick={() => {setTrigger(true); setMenuClicked('/Star Evening menu March 2023.pdf')}}>
                            <h3>Evening Menu</h3>
                            <PdfViewer pdfUrl={'/Star Evening menu March 2023.pdf'}/>
                        </div>
                        <div className='menus' onClick={() => {setTrigger(true); setMenuClicked('/Star chip shop menu March 2023.pdf')}}>
                            <h3>Chip Shop Menu</h3>
                            <PdfViewer pdfUrl={'/Star chip shop menu March 2023.pdf'}/>
                        </div>
                        <div className='menus' onClick={() => {setTrigger(true); setMenuClicked('/Star Burger menu 2023.pdf')}}>
                            <h3>Burger Night Menu</h3>
                            <PdfViewer pdfUrl={'/Star Burger menu 2023.pdf'}/>
                        </div>
                        <div className='menus' onClick={() => {setTrigger(true); setMenuClicked('/Star Pizza menu 2023.pdf')}}>
                            <h3>Pizza Night Menu</h3>
                            <PdfViewer pdfUrl={'/Star Pizza menu 2023.pdf'}/>
                        </div>
                        <div className='menus' onClick={() => {setTrigger(true); setMenuClicked('/Star menu Sunday 2023 March.pdf')}}>
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