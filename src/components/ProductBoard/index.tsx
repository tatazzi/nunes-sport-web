"use client";

import Image from "next/image";
import styles from "./ProductBoard.module.css";
import { ProductBoardProps } from "./ProductBoard.utils";
import Product from "../Product";

type products = {
  id: string;
  productName: string;
  price: number;
  description: string;
};
const DATA: products[] = [
  {
    id: "2",
    productName: "Bicicleta",
    price: 2000,
    description: "descricão completa do produto",
  },
  {
    id: "3",
    productName: "Bicicleta",
    price: 2000,
    description: "Descricão completa do produto",
  },
  {
    id: "4",
    productName: "Bicicleta",
    price: 2000,
    description: "Descricão completa do produto",
  },
  {
    id: "5",
    productName: "Bicicleta",
    price: 2000,
    description: "Descricão completa do produto",
  },
  {
    id: "6",
    productName: "Bicicleta",
    price: 2000,
    description: "Descricão completa do produto",
  },
  {
    id: "7",
    productName: "Bicicleta",
    price: 2000,
    description: "Descricão completa do produto",
  },
  {
    id: "8",
    productName: "Bicicleta",
    price: 2000,
    description: "Descricão completa do produto",
  },
  {
    id: "9",
    productName: "Bicicleta",
    price: 2000,
    description: "Descricão completa do produto",
  },
  {
    id: "10",
    productName: "Bicicleta",
    price: 2000,
    description: "Descricão completa do produto",
  },
];

const ProductBoard = ({}: ProductBoardProps) => {
  return (
    <div className={styles["container"]}>
      {DATA.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          productName={product.productName}
          price={product.price}
          description={product.description}
          onClickDelete={() => {}}
          onClickEdit={() => {}}
        />
      ))}
    </div>
  );
};

export default ProductBoard;
