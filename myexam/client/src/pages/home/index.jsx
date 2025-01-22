import React from 'react'
import styles from "./index.module.scss"
const Home = () => {
  return (
    <>
    <section className={styles["home"]}>
    <div className="container">
        <div className={styles["texts"]}>

    <h1>Shop With Us</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
    <div className={styles["btns"]}>
        <button className={styles['shop']}>SHOP NOW</button>
        <button className={styles['member']}>CLUB MEMBERSHIP</button>

    </div>
        </div>
    </div>

    </section>
    </>
  )
}

export default Home
