/** @format */

import React from "react";
import styles from "./MainArea.module.css";
import ItemCard from "./ItemCard";


const MainArea = (props) => {
  return (
    <div className={styles.mainArea}>
      <div className={styles.mainAreaCover}>
        <div className={styles.mainAreaContent}>
          {props.data.map((item, index) => (
            <ItemCard
              key={index}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainArea;
