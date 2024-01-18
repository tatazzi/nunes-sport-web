import styles from "./NewProductModal.module.css";
import { NewProductModalProps } from "./NewProductModal.utils";
import CustomInput from "../CustomInput";
import { useState } from "react";
import Button from "../Button";

const NewProductModal = ({ isVisible, onClose }: NewProductModalProps) => {
  const [id, setId] = useState("");
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(undefined);

  const handleClose = () => {
    onClose();
    setProductName("");
    setId("");
    setDescription("");
    setPrice(undefined);
  };

  return isVisible ? (
    <div className={styles["container"]}>
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
          onChange={(e) => setId(e.target.value)}
          value={id}
        />

        <CustomInput
          title="Descrição"
          placeholder="Digite uma descrição"
          onChange={(e) => setDescription(e.target.value)}
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
          <Button onClick={onClose}>Salvar</Button>
          <Button onClick={handleClose}>Fechar</Button>
        </div>
      </div>
    </div>
  ) : null;
};

export default NewProductModal;
