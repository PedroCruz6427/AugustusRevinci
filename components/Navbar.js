import { useState, useContext } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import AppContext from "./AppContext";

function Navbar() {
  const context = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);
  return (
    <section>
      {showModal ? (
        <section className={styles.modalContainer}>
          <Link href="/shop">
            <button className={styles.modalText}>SHOP</button>
          </Link>
          <Link href="/">
            <button className={styles.modalText}>HOME</button>
          </Link>
          <Link href="/about">
            <button className={styles.modalText}>ABOUT</button>
          </Link>
          <Link href="/about">
            <button className={styles.modalText}>CUSTOMER CARE</button>
          </Link>
          <Link href="/accessibility">
            <button className={styles.modalText}>ACCESIBILITY</button>
          </Link>

          <button onClick={() => setShowModal(false)}>Close</button>
        </section>
      ) : null}
      <nav className={styles.navBar}>
        <button className={styles.navButton} onClick={() => setShowModal(true)}>
          Menu
        </button>
        <div className={styles.siteLogo}>
          <p>Augustus</p>
          <p>Revinci</p>
        </div>
        <Link href="/cart/">
          <button className={styles.navButton}>
            Cart : {context.nameContext}
          </button>
        </Link>
      </nav>
    </section>
  );
}
export default Navbar;
