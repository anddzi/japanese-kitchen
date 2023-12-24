import React, { useState } from "react";
import styles from "./HeaderCart.module.scss";
import CartIcon from "../CartIcon";

type CartButtonProps = {
  itemsCount: number;
  onOpenModal: (isOpen: boolean) => void;
 
};

const CartButton: React.FC<CartButtonProps> = ({ itemsCount, onOpenModal }) => {


  const openModalHandler = () => {
    onOpenModal(true)
  }

  const itemProof = itemsCount < 0 ? 0 : itemsCount;

  return (
    <button className={styles.button} onClick={openModalHandler}>
      <CartIcon />
      Warenkorb
      <span className={styles.badge}>{itemProof}</span>
    </button>
  );
};

export default CartButton;
