import React from 'react'
import PdfViewer from './PdfViewer'

function MenuPopUp( props ) {
  return (props.trigger) ? (
    <div className='menu_popup'>
        <div className='popup_inner'>
            <div className='close' onClick={() => {props.setTrigger(false)}}>
                <div className='close_icon_top'></div>
                <div className='close_icon_bot'></div>
            </div>
            <PdfViewer pdfUrl={props.pdfUrl}/>
        </div>
    </div>
  ) : ''
}

export default MenuPopUp