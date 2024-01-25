"use client";

import styles from "./page.module.css";
import Logo from "../assets/images/Logo.png";
import HomeSvg from "../assets/Svgs/home.svg";
import Image from "next/image";
import ProductBoard from "@/components/ProductBoard";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles["nav-bar"]}>
        <Image width={150} height={150} alt="Logo" src={Logo} />
        <div className={styles["button-wrapper"]}>
          <Image
            className={styles["add-icon"]}
            alt="button icon"
            src={HomeSvg}
            width={50}
            height={50}
          />
          <p className={styles.paragraph}>Home</p>
        </div>
      </div>
      <div className={styles.hero}>
        <div className={styles["product-display"]}>
          <ProductBoard />
        </div>
      </div>
    </main>
  );
}
