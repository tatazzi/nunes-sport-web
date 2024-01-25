import styles from "./EditProductModal.module.css";
import { EditProductModalProps } from "./EditProductModal.utils";
import CustomInput from "../CustomInput";
import { useState } from "react";
import Button from "../Button";
import { apiFetch } from "@/service/Api";

const EditProductModal = ({
  isVisible,
  onClose,
  code,
  onFinishEdit,
  initialName,
  initialDescription,
  initialPrice,
}: EditProductModalProps) => {
  const [productName, setProductName] = useState(initialName);
  const [description, setDescription] = useState(initialDescription);
  const [price, setPrice] = useState(initialPrice);

  const handleClose = () => {
    onClose();
    setProductName("");
    setDescription("");
    setPrice(0);
  };

  const editProduct = async (
    code?: string,
    productName?: string,
    description?: string,
    price?: number
  ) => {
    try {
      await apiFetch(`/editProduct/${code}`, "PUT", {
        name: productName,
        description: description,
        price: price,
      });
      onFinishEdit && onFinishEdit();
      handleClose();
    } catch (error) {}
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
        />
        <div className={styles["button-section"]}>
          <Button
            onClick={() => editProduct(code, productName, description, price)}
          >
            Editar
          </Button>
          <Button onClick={handleClose}>Fechar</Button>
        </div>
      </div>
    </div>
  ) : null;
};

export default EditProductModal;
