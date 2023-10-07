/** @format */

import React, { useState } from "react";
import styles from "./SelectedFood.module.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io"; 
import { Link } from "react-router-dom";

const SelectedFood = (props) => {
  let [quantity, setQuantity] = useState(1);
  let price = props.data.price * quantity;
  let newImage = props.image;
  if (!newImage) newImage = "/images/general.png";
  const iconStyle={
    fontWeight: "700",
    fontSize: "23px"
  }
  let billingHandler = () => {
  props.setBilling((prevBilling) => {
    return [
      ...prevBilling, // Spread the previous billing array
      {
        ...props.data, // Spread the existing properties in data
        quantity: quantity, // Add the 'quantity' property to data
      }
    ];
  });
}
  return (
    <div className={styles.selectedFoodArea}>
      <div className={styles.headingArea}>
        <img
          src={newImage}
          width={220}
          alt=""
        />
        <div className={styles.heading}>{props.data.name}</div>
      </div>
      <div className={styles.description}>{props.data.text}</div>
      <div className={styles.row}>
        <div className={styles.btn}>Price: ${props.data.price}</div>
        <div className={styles.quantityArea}>
          <div className={styles.quantity}>Quantity</div>
          <button
            className={styles.quantitybtn}
            onClick={() => {
              setQuantity((quantity) => quantity - 1);
            }}>
            {" "}
            <FaMinus />
          </button>
          <div className={styles.quantitybtn}>{quantity}</div>
          <button
            className={styles.quantitybtn}
            onClick={() => {
              setQuantity((quantity) => quantity + 1);
            }}>
            <FaPlus />
          </button>
        </div>
      </div>
      <div className={styles.lastrow}>
        <div className={styles.btn}>Total - ${price}</div>
        <Link
          to="/billing"
          style={{ color: "red", textDecoration: "none" }}>
          <div
            className={`${styles.buybtn}`}
            style={{ marginLeft: "-20" }}
            onClick={billingHandler}>
            Billing <IoIosArrowForward style={iconStyle} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SelectedFood;
