import React from "react";
import styles from '../components/Square.module.css'



const Square = ({ value, onClick }) => (
  <div>
    <button className={styles.square} onClick={onClick}>
      {value}
    </button>
  </div>
)

export default Square