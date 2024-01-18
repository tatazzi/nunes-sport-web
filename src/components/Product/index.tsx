"use client";

import Image from "next/image";
import styles from "./Product.module.css";
import { ProductProps } from "./Product.utils";
import Edit from "../../assets/Svgs/edit.svg";
import Trash from "../../assets/Svgs/trash.svg";

const Product = ({
  id,
  productName,
  price,
  description,
  onClickEdit,
  onClickDelete,
}: ProductProps) => {
  return (
    <div className={styles["product-wrapper"]}>
      <div className={styles["info-section"]}>
        <a>{id}</a>
        <a>{productName}</a>
        <a>{price}</a>
        <a>{description}</a>
      </div>
      <div className={styles["button-section"]}>
        <div className={styles.button} onClick={onClickEdit}>
          <Image width={35} height={35} alt="Logo" src={Edit} />
        </div>
        <div className={styles.button} onClick={onClickDelete}>
          <Image width={30} height={30} alt="Logo" src={Trash} />
        </div>
      </div>
    </div>
  );
};

export default Product;
