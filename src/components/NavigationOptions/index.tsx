"use client";

import Image from "next/image";
import styles from "./NavigationOptions.module.css";
import { NavigationOptionsProps } from "./NavigationOptions.utils";

const NavigationOptions = ({ label, icon }: NavigationOptionsProps) => {
  return (
    <div className={styles["button-wrapper"]}>
      {icon && (
        <Image
          className={styles["add-icon"]}
          alt="button icon"
          src={icon}
          width={30}
          height={30}
        />
      )}
      <p className={styles.paragraph}>{label}</p>
    </div>
  );
};

export default NavigationOptions;
