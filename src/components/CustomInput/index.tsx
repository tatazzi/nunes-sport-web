import Image from "next/image";
import styles from "./CustomInput.module.css";
import { CustomInputProps } from "./CustomInput.utils";

const CustomInput = ({
  title,
  placeholder,
  onChange,
  value,
  type,
}: CustomInputProps) => {
  return (
    <div className={styles["container"]}>
      <p>{title}</p>

      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default CustomInput;
