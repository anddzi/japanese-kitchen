import { FC } from "react";
import styles from "./HeaderCart.module.scss";
import CartIcon from "../CartIcon";

type CartButtonProps = {
  itemsCount: number;
  onOpenModal: (isOpen: boolean) => void;
};

const CartButton: FC<CartButtonProps> = ({ itemsCount, onOpenModal }) => {
  const openModalHandler = () => {
    onOpenModal(true);
  };

  return (
    <button className={styles.button} onClick={openModalHandler}>
      <CartIcon />
      Warenkorb
      <span className={styles.badge}>{itemsCount < 0 ? 0 : itemsCount}</span>
    </button>
  );
};

export default CartButton;
