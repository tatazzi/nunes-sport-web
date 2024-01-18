import Image from "next/image";
import styles from "./NewProductModal.module.css";
import { NewProductModalProps } from "./NewProductModal.utils";
import Product from "../Product";

const NewProductModal = ({}: NewProductModalProps) => {
  return <div className={styles["container"]}></div>;
};

export default NewProductModal;
