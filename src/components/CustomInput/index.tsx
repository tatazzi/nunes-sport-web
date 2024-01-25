import styles from "./CustomInput.module.css";
import { CustomInputProps } from "./CustomInput.utils";

const CustomInput = ({
  title,
  placeholder,
  onChange,
  value,
  type,
  height,
  error,
}: CustomInputProps) => {
  return (
    <div className={styles["container"]}>
      <p>{title}</p>
      <input
        style={{ height: height }}
        className={styles.input}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default CustomInput;
