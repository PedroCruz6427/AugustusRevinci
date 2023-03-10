import Head from "next/head";
import styles from "/styles/Shop.module.css";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { useState, useContext } from "react";
import AppContext from "../../components/AppContext";

export default function Home() {
  const imageList = [
    {
      key: 0,
      image:
        "https://images.unsplash.com/photo-1583312572805-32ece488eb6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      description: "Seiko Yacht",
      price: 10000,
    },
    {
      key: 1,
      image:
        "https://images.unsplash.com/photo-1548171916-c0dea7f94ca6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      description: "Breitling Navi",
      price: 5000,
    },
    {
      key: 2,
      image:
        "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      description: "Citizen Ultra",
      price: 20000,
    },
    {
      key: 3,
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      description: "Omega Mariner",
      price: 15000,
    },
    {
      key: 4,
      image:
        "https://images.unsplash.com/photo-1617617877206-bcdb7990ef2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
      description: "Seiko Chrono Red",
      price: 8000,
    },
    {
      key: 5,
      image:
        "https://images.unsplash.com/photo-1628701070169-6cce6b9ce50d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
      description: "Seiko Auto Brown",
      price: 11000,
    },
  ];

  return (
    <html>
      <Head>
        <title>Augustus Revinci</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/nomos.jpg/" />
      </Head>
      <body className={styles.page}>
        <main className={styles.mainBody}>
          <Navbar>
            <div className={styles.navContainer}>
              <div className={styles.linkContainer}>
                <Link href="http://localhost:3000/">HOME</Link>
              </div>
            </div>
          </Navbar>
          <section className={styles.productsContainer}>
            {imageList.map((watch) => {
              return (
                <section key={watch.key} className={styles.watchBox}>
                  <img
                    src={watch.image}
                    alt="idk"
                    className={styles.watchImage}
                  ></img>
                  <div className={styles.watchDescription}>
                    {watch.description}
                  </div>
                  <div className={styles.watchDescription}></div>
                  <div className={styles.watchPrice}>Price: ${watch.price}</div>
                  <div className={styles.buttonContainer}>
                    <Link
                      className={styles.link}
                      href={{
                        pathname: "/shop/[id]",
                        query: {
                          id: watch.key,
                          image: watch.image,
                          description: watch.description,
                          price: watch.price,
                        },
                      }}
                    >
                      <button
                        key={watch.key}
                        image={watch.image}
                        price={watch.price}
                        description={watch.description}
                        className={styles.cartButton}
                      >
                        BUY
                      </button>
                    </Link>
                  </div>
                </section>
              );
            })}
          </section>
        </main>
      </body>
    </html>
  );
}
