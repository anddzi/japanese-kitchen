import { FC, MouseEvent } from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  onAddCount: (event: MouseEvent<HTMLButtonElement>) => void;
};
const Button: FC<ButtonProps> = ({onAddCount}) => {
  return <button className={styles.button} type="submit" onClick={onAddCount}>Hinzufügen</button>;
};
export default Button;
