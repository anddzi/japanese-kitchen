import { FC } from "react";
import styles from "./Button.module.scss";

const Button: FC = () => {
  return <button className={styles.button} type="button">Hinzufügen</button>;
};
export default Button;
