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
import Pagination from "../Pagination";

interface Product {
  code: string;
  name: string;
  price: number;
  description: string;
}

const SIZE = 5;

const ProductBoard = ({}: ProductBoardProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleEditModal, setIsVisibleEditModal] = useState(false);

  const [page, setPage] = useState(0);
  const [totalItens, setTotalItens] = useState(0);

  const getProducts = async () => {
    try {
      const response = await apiFetch(`/products?page=${page}`, "GET");
      console.log(JSON.stringify(response));
      setProducts(response.products);
      setTotalItens(response.totalItems);
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
  }, [page]);
  return (
    <div>
      <Button onClick={() => setIsVisible(true)}>Novo</Button>
      {products.length === 0 ? (
        <div className={styles["empty-list"]}>
          <h3>
            Lista vazia <br /> Adicione um Produto
          </h3>
        </div>
      ) : (
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
      )}
      <Pagination
        page={page}
        setPage={setPage}
        size={SIZE}
        total={totalItens}
      />
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
