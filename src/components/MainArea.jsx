/** @format */

import React from "react";
import styles from "./MainArea.module.css";
import ItemCard from "./ItemCard";
import SelectedFood from "./SelectedFood";

const MainArea = (props) => {
  const foundItem = props.data.find((item) => item.id === props.selected);

  return (
    <div className={styles.mainArea}>
      <div className={styles.mainAreaCover}>
        {props.data.length ? (
          <div className={styles.mainAreaContent}>
            <div className={styles.mainAreaSelectedContent}>
              {props.selected && props.data.length && (
                <SelectedFood
                  data={foundItem ? foundItem : props.data[0]}
                  billing={props.billing}
                  setBilling={props.setBilling}
                />
              )}
            </div>
            <div className={styles.mainAreaAllContent}>
              {props.data.map((item, index) => (
                <ItemCard
                  key={index}
                  {...item}
                  IsSelected={props.IsSelected}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.error}>Error 404 : Nothing matched your search</div>
        )}
      </div>
    </div>
  );
};

export default MainArea;
