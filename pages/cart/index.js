import Head from "next/head";
import { useContext } from "react";
import AppContext from "/components/AppContext.js";
import styles from "/styles/CartPage.module.css";
import Navbar from "../../components/Navbar";
export default function CartCheckOutInfo() {
  const context = useContext(AppContext);
  const cart = context.cartListFinal;

  const total = cart.map(([item]) => {
    return Number(item.price);
  });
  console.log(total);

  let sum = 0;

  total.forEach((item) => {
    sum += item;
  });
  const finalTotal = sum;
  console.log("Total:" + finalTotal);

  return (
    <section className={styles.cartPageSection}>
      <Head>
        <title>Augustus Revinci</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/nomos.jpg/" />
      </Head>
      <Navbar />
      <div className={styles.cartContainer}>
        {cart.map(([item]) => {
          return (
            <section className={styles.watchCartBox} key={item.id}>
              <div className={styles.imageContainer}>
                <img className={styles.image} src={item.image}></img>
              </div>
              <div className={styles.rightContainer}>
                <div className={styles.itemDescription}>
                  {item.description}{" "}
                </div>
                <div className={styles.itemPrice}>Price: ${item.price}</div>
              </div>
            </section>
          );
        })}
        <section className={styles.totalPrice}>
          <h1>Total Price: ${finalTotal}</h1>
        </section>
      </div>
    </section>
  );
}
