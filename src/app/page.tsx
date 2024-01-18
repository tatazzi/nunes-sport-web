"use client";

import styles from "./page.module.css";
import Logo from "../assets/images/Logo.png";
import Image from "next/image";
import Button from "@/components/Button";
import HomeIcon from "../assets/Svgs/home.svg";
import NavigationOptions from "@/components/NavigationOptions";
import ProductBoard from "@/components/ProductBoard";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles["nav-bar"]}>
        <Image width={150} height={150} alt="Logo" src={Logo} />
      </div>
      <div className={styles.hero}>
        <div className={styles["aside-nav"]}>
          <NavigationOptions icon={HomeIcon} label="Inicio" />
        </div>
        <div className={styles["product-display"]}>
          <Button onClick={() => console.log("quasds")}>Novo</Button>
          <ProductBoard />
        </div>
      </div>
    </main>
  );
}
