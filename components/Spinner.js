import React from 'react'
import styles from '../styles/components/Spinner.module.css'

const Spinner = () => {
  return (
    <div className={`${styles.spinner_container}`}>
        <div className={`${styles.lds_dual_ring}`}></div>
    </div>
  )
}

export default Spinner