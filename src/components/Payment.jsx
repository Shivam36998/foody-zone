import React from 'react'
import styles from './Payment.module.css'

const Payment = (props) => {
  return (
    <div className={styles.wholeArea}>
      <div className={styles.navArea}>Payment</div>
      <div className={styles.mainArea}>
        <form
          action=""
          className={styles.form}>
          <div>
            <label
              htmlFor="name"
              className={styles.label}>
              Name
            </label>
            <input
              type="text"
              id="name"
              className={styles.input}
            />
          </div>
          <div>
            <label
              htmlFor="number"
              className={styles.label}>
              Number
            </label>
            <input
              type="number"
              className={styles.input}
              id="number"
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className={styles.label}>
              Address
            </label>
            <input
              type="text"
              className={styles.input}
              id="address"
            />
          </div>
          <div>
            <label
              htmlFor="upiId"
              className={styles.label}>
              UPI Id
            </label>
            <input
              className={styles.input}
              type="text"
              id="upiId"
            />
          </div>
          <div className={styles.paydiv}>
            <button className={styles.paybutton}>Pay ${props.total}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Payment
