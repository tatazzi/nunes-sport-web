"use client";

import Image from "next/image";
import styles from "./ProductBoard.module.css";
import { ProductBoardProps } from "./ProductBoard.utils";
import Product from "../Product";
import { apiFetch } from "@/service/Api";
import { useEffect, useState } from "react";
import Button from "../Button";
import NewProductModal from "../NewProductModal";
import EditProductModal from "../EditProductModal";

interface Product {
  code: string;
  name: string;
  price: number;
  description: string;
}

const ProductBoard = ({}: ProductBoardProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleEditModal, setIsVisibleEditModal] = useState(false);

  const getProducts = async () => {
    try {
      const product = await apiFetch("/products", "GET");
      setProducts(product);
    } catch (error) {}
  };

  const deleteProduct = async (code: string) => {
    try {
      await apiFetch(`/deleteProduct/${code}`, "DELETE");
      getProducts();
    } catch (error) {}
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <Button onClick={() => setIsVisible(true)}>Novo</Button>
      <div className={styles["container"]}>
        {products.map((product) => (
          <Product
            key={product.code}
            code={product.code}
            productName={product.name}
            price={product.price}
            description={product.description}
            onClickDelete={() => deleteProduct(product.code)}
            onClickEdit={() => {
              setSelectedProduct(product);
              setIsVisibleEditModal(true);
            }}
          />
        ))}
      </div>
      <NewProductModal
        onFinishRegister={getProducts}
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
      />
      {selectedProduct && (
        <EditProductModal
          initialDescription={selectedProduct.description}
          initialName={selectedProduct.name}
          initialPrice={selectedProduct.price}
          code={selectedProduct.code}
          onFinishEdit={getProducts}
          isVisible={isVisibleEditModal}
          onClose={() => setIsVisibleEditModal(false)}
        />
      )}
    </div>
  );
};

export default ProductBoard;
