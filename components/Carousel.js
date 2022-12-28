// import App from "next/app";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

function Carousel() {
  const [currentIndex, SetCurrentIndex] = useState(2);

  function goForwardHandler() {
    const isLastWatch = currentIndex === slides.length - 1;
    const newIndex = isLastWatch ? 0 : currentIndex + 1;
    SetCurrentIndex(newIndex);
  }

  function goBackHandler() {
    const isFirstWatch = currentIndex === 0;
    const newIndex = isFirstWatch ? slides.length - 1 : currentIndex - 1;
    SetCurrentIndex(newIndex);
  }

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1629581678313-36cf745a9af9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1548171916-c0dea7f94ca6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=730&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=694&q=80",
    },
  ];

  return (
    <section className={styles.watchSectionContainer}>
      <div className={styles.watchSectionLeft}>
        <h1 className={styles.watchSectionLeftH1}>All your favorite brands.</h1>
        {/* <h1 className={styles.watchSectionLeftH2}>One place</h1> */}
        <div className={styles.watchListContainer}>
          <div className={styles.watchList}>Rolex,</div>
          <div className={styles.watchList}>Breitling,</div>
          <div className={styles.watchList}>Patek,</div>
          <div className={styles.watchList}>Seiko,</div>
        </div>

        <Link href="/shop">
          <button href="/shop" className={styles.shopButton}>
            SHOP NOW
          </button>
        </Link>
        {/* <button href="/shop" className={styles.shopButton}>
          SHOP NOW
        </button> */}
      </div>
      <div className={styles.watchSectionRight}>
        <div className={styles.carouselContainer}>
          <div className={styles.leftArrow} onClick={goBackHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
              />
            </svg>
          </div>
          <div className={styles.watchContainer}>
            <img
              className={styles.watchImage}
              src={slides[currentIndex].url}
              alt="Current Displayed Watch"
            ></img>
          </div>

          <div className={styles.rightArrow} onClick={goForwardHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
