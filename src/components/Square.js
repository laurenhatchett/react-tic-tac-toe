import React from "react";
import styles from '../components/Square.module.css'



const Square = ({ value, onClick }) => (
  <div className={styles.square}>
    <button className={styles.squareButton} onClick={onClick}>
      {value}
    </button>
  </div>
)

export default Square