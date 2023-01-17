import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Carousel from "../components/Carousel.js";
import Link from "next/link";
import Navbar from "../components/Navbar.js";

export default function Home() {
  return (
    <html>
      <Head>
        <title>Augustus Revinci</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/nomos.jpg/" />
      </Head>
      <body className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.imgContainer}>
            <Navbar />
            <Image
              className={styles.watch}
              src={"/watch3.jpg"}
              alt="Seiko Watch"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>
        <section className={styles.siteIntro}>
          <div className={styles.womanContainer}>
            <img src="femaleWatch.jpg" className={styles.femaleImg}></img>
          </div>
          <div className={styles.introInfoContainer}>
            <h1 className={styles.introInfoHeader}>
              The Gold Standard watch exchange.
            </h1>
            <h3 className={styles.introInfoText}>
              Since 2001 we&apos;ve provided only the highest quality watches,
              thoroughly inspected by our experts in Milan Italy.
            </h3>
          </div>
        </section>
        <Carousel />
        <section className={styles.footerContainer}>
          <Link href="/about">
            <button>ABOUT</button>
          </Link>
          <Link href="/about">
            <button>ACCESIBILITY</button>
          </Link>
          <Link href="/about">
            <button>CUSTOMER CARE</button>
          </Link>
          <Link href="/shop">
            <button>SHOP PAGE</button>
          </Link>
        </section>
      </body>
    </html>
  );
}
