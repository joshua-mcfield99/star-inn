import Head from 'next/head'
import React from 'react'
import styles from '../styles/Drinks.module.css'
import { Cormorant_Unicase } from 'next/font/google'
import altText from '../data/liveBarAlts.json'
import { Image } from 'cloudinary-react';

const cormorantUnicase = Cormorant_Unicase({
    subsets: ['latin'],
    weight: '700'
})

const Drinks = () => {

  return (
    <>
        <Head>
            <title>The Star | Drinks</title>
        </Head>
        <main>
            <section>
                <h1 className={`${'heading'} ${cormorantUnicase.className}`} >Drinks</h1>
                <p>
                    Looking for the perfect pint? Look no further than The Star! With our passion for beer and cider, we offer an ever-changing selection of up to 15 real ales and over 35 ciders. You&#39;ll be spoilt for choice, and your palate will be satisfied. Come join us and discover your new favourite drink!
                </p>
            </section>
            {
            //<section>
            //    <h2 className={`${'heading'} ${cormorantUnicase.className}`} >Godalming Beer Works</h2>
            //    <p>Welcome to our microbrewery, where we craft exceptional ales to satisfy every beer enthusiast. Our lineup includes:</p>
            //    <ul className={`${styles.gbw_drinks}`}>
            //        <li><strong>First Light:</strong> An American IPA with vibrant citrus and pine flavors.</li>
            //        <li><strong>Ravenscroft:</strong> A modern twist on the best bitter, combining caramel sweetness and earthy hops.</li>
            //        <li><strong>Pepper Pot Porter:</strong> A velvety brew with hints of coconut and vanilla, offering a touch of exotic allure.</li>
            //        <li><strong>Wagon and Horses:</strong> An Amber IPA blending toasty malt sweetness with tropical fruit flavors.</li>
            //    </ul>
            //    <p>
            //        Experience the artistry behind each pint we pour as we push the boundaries of beer craftsmanship. From hoppy IPAs to rich porters, we offer a range of flavors to elevate your beer-drinking experience. Join us in celebrating the perfect blend of tradition and innovation. Cheers to great beer!
            //    </p>
            //    <p>Want to find out more? Check out the contact page about how to get intouch with GBW (Godalming Beer Works).</p>
            //</section>
}
            <section>
                <h2 className={`${'heading'} ${cormorantUnicase.className}`} >Live Bar</h2>
                <p>
                We&#39;re all about keeping things fresh and up-to-date, but during peak hours, it can be a challenge. Our ales have a tendency to change throughout the day, so even if we&#39;ve made updates, accuracy can still be a bit elusive. Rest assured, though, we&#39;re here to make your experience amazing!
                </p>
                <div className={`${styles.live_img}`}>
                        <Image
                            cloudName='drkqjlsvr'
                            publicID='livebarimage/LiveBarImage'
                            secure="true"
                            width='100%'
                            alt='This is our live bar image, It should show our current selection of ales.'
                        />
                </div>
            </section>
        </main>
    </>
  )
}

export default Drinks