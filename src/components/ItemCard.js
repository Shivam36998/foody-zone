import React from 'react'
import styles from './ItemCard.module.css'
const ItemCard = (props) => {
  let newImage = props.image
  if(!newImage) newImage = "/images/general.png"
  console.log(newImage)
  return (
    <div className={styles.cardArea}>
        <div className={styles.cardAreaPic}> 
        <img src={newImage} alt=""/>
        </div>
        <div className={styles.cardAreaContent}>
            <h1 className={styles.cardAreaContentHeading}>{props.name}</h1>
            <div className={styles.cardAreaContentDescription}>{props.text}</div>
            <button className={styles.ItemCost}>${props.price}</button>
        </div>
    </div>
  )
}

export default ItemCard
