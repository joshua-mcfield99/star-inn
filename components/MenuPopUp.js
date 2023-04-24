import React from 'react'
import PdfViewer from './PdfViewer'
import styles from '../styles/Food.module.css'


function MenuPopUp( props ) {
  return (props.trigger) ? (
    <div className={`${styles.menu_popup}`}>
        <div className={`${styles.popup_inner} ${'popup_inner'}`}>
            <div className={`${styles.close}`} onClick={() => {props.setTrigger(false)}}>
                <div className={`${styles.close_icon_top}`}></div>
                <div className={`${styles.close_icon_bot}`}></div>
            </div>
            <PdfViewer pdfUrl={props.pdfUrl}/>
        </div>
    </div>
  ) : ''
}

export default MenuPopUp