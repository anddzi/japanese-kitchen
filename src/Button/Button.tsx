import React, { FC, MouseEvent } from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  onAction?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  variant: "cancel" | "action";
};

const Button: FC<ButtonProps> = ({ onAction, children, variant }) => {
  const buttonClass = `${styles.button} ${styles[variant]}`;

  return (
    <button className={buttonClass} type="submit" onClick={onAction}>
      {children}
    </button>
  );
};

export default Button;
