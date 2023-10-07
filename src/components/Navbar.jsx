import React from 'react'
import styles from './Navbar.module.css'
import { AiOutlineSearch } from "react-icons/ai"; 

const Navbar = (props) => {
    
    return (
      <div className={styles.navArea}>
        <div className={styles.navAreaFirstRow}>
          <div className={styles.logoArea}>
            <span className={styles.white}>F</span>
            <span className={styles.red}>o</span>
            <span className={styles.red}>o</span>
            <span className={styles.white}>d</span>
            <span className={styles.white}>y</span>
            <span className={styles.white}> </span>
            <span className={styles.white}>Z</span>
            <span className={styles.red}>o</span>
            <span className={styles.white}>n</span>
            <span className={styles.white}>e</span>
          </div>
          <div className={styles.searchArea}>
            <input
              placeholder="Search"
              className={styles.searchNav}
              onChange={props.searchHandler}
            />{" "}
            <AiOutlineSearch />
          </div>
        </div>
        <div className={styles.navAreaSecondRow}>
          <button
            className={styles.navAreaSecondRowButton}
            onClick={props.menuSelector}>
            All
          </button>
          <button
            className={styles.navAreaSecondRowButton}
            onClick={props.menuSelector}
            value={"breakfast"}>
            BreakFast
          </button>
          <button
            className={styles.navAreaSecondRowButton}
            onClick={props.menuSelector}
            value={"lunch"}>
            Lunch
          </button>
          <button
            className={styles.navAreaSecondRowButton}
            onClick={props.menuSelector}
            value={"dinner"}>
            Dinner
          </button>
        </div>
      </div>
    );
}

export default Navbar
