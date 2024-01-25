import styles from "./NewProductModal.module.css";
import { NewProductModalProps } from "./NewProductModal.utils";
import CustomInput from "../CustomInput";
import { useState } from "react";
import Button from "../Button";
import { apiFetch } from "@/service/Api";

const NewProductModal = ({
  isVisible,
  onClose,
  onFinishRegister,
}: NewProductModalProps) => {
  const [code, setCode] = useState("");
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [error, setError] = useState("");

  const handleClose = () => {
    onClose();
    setProductName("");
    setCode("");
    setDescription("");
    setPrice(0);
    setError("");
  };
  const newProduct = async (
    code: string,
    productName: string,
    description: string,
    price: number
  ) => {
    try {
      await apiFetch("/registerProduct", "POST", {
        code: code,
        name: productName,
        description: description,
        price: price,
      });
      onFinishRegister && onFinishRegister();
      handleClose();
    } catch (error) {
      setError("Codigo ja cadastrado");
    }
  };

  return isVisible ? (
    <div className={styles["container"]}>
      <div onClick={() => handleClose()} className={styles["backdrop"]} />
      <div className={styles["modal-content"]}>
        <CustomInput
          title="Nome"
          placeholder="Digite o nome do produto"
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
        />
        <CustomInput
          title="Codigo do Produto"
          placeholder="Digite o codigo do produto"
          onChange={(e) => setCode(e.target.value)}
          value={code}
          error={error}
          type="number"
        />

        <CustomInput
          title="Descrição"
          placeholder="Digite uma descrição"
          onChange={(e) => setDescription(e.target.value)}
          height={60}
          value={description}
        />
        <CustomInput
          title="Preço"
          placeholder="Digite o preço do produto"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          type="number"
        />
        <div className={styles["button-section"]}>
          <Button
            onClick={() => {
              newProduct(code, productName, description, price);
            }}
          >
            Salvar
          </Button>
          <Button onClick={handleClose}>Fechar</Button>
        </div>
      </div>
    </div>
  ) : null;
};

export default NewProductModal;
