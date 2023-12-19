import React from "react";
import styles from "./HeaderCart.module.scss";
import CartIcon from "../CartIcon";

type CartButtonProps = {
  itemsCount: number;
};

const CartButton: React.FC<CartButtonProps> = ({ itemsCount }) => {
  return (
    <button className={styles.button}>
      <CartIcon />
      Корзина
      <span className={styles.badge}>{itemsCount}</span>
    </button>
  );
};

export default CartButton;
