/** @format */

import React from "react";
import { useState, useEffect } from "react";
import styles from "./BillingArea.module.css";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const BillingArea = (props) => {
  const cellstyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "16vw",
    height: "30px",
  };
  let [total, setTotal] = useState(0);
  useEffect(() => {
    let newTotal = 0;
    for (let i = 0; i < props.billing.length; i++) {
      newTotal += props.billing[i].price * props.billing[i].quantity;
    }
    setTotal(newTotal);
    props.setTotal(newTotal);
  }, [props.billing]);
  let srno = 1;
  return (
    <div className={styles.billingArea}>
      <div className={styles.nav}>
        Billing{" "}
      </div>
      <div className={styles.mainArea}>
        <div className={styles.tableArea}>
          <div className={styles.row}>
            <div className={styles.tableheader}>S.R. No.</div>
            <div className={styles.tableheader}>Name</div>
            <div className={styles.tableheader}>Quantity</div>
            <div className={styles.tableheader}>Total</div>
            <div className={styles.tableheader}>Delete</div>
          </div>
          <div className={styles.foodArea}>
            {props.billing.map((data, index) => (
              <div
                key={index}
                className={styles.row}>
                <div style={cellstyle}>{srno++}</div>
                <div style={cellstyle}>{data.name}</div>
                <div style={cellstyle}>{data.quantity}</div>
                <div style={cellstyle}>{data.price * data.quantity}</div>
                <div style={cellstyle}>
                  <FaTrash />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.lastrow}>
          <Link
            to="/"
            className={styles.getmore}>
            Get More
          </Link>
          <Link to="/payment">
          <button className={styles.paybutton}>Pay ${total}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BillingArea;
