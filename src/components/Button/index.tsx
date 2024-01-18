"use client";

import Image from "next/image";
import styles from "./button.module.css";
import { ButtonProps } from "./button.utils";

const Button = ({ children, icon, onClick }: ButtonProps) => {
  return (
    <div className={styles["button-wrapper"]} onClick={onClick}>
      {icon && (
        <Image
          className={styles["add-icon"]}
          alt="button icon"
          src={icon}
          width={15}
          height={15}
        />
      )}
      <button className={styles.button}>{children}</button>
    </div>
  );
};

export default Button;
