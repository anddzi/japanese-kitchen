import React, { FC } from "react";
import styles from "./Modal.module.scss";
import Button from "../Button/Button";
import Counter from "../Counter/Counter";

type ModalProps = {
  onModalClose: () => void;
  menuItems: {
    id: string;
    title: string;
    price: string;
    countItem: number;
  }[];
};

const Modal: FC<ModalProps> = ({ onModalClose, menuItems }) => {
  const closeModalHandler = () => {
    onModalClose();
  };

  const total = menuItems.reduce((acc, item) => acc + item.countItem * parseFloat(item.price.replace(/\$/g, '')), 0);

  return (
    <div className={styles.backdrop} onClick={closeModalHandler}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalContent}>
          {menuItems.map(item => (
            <div key={item.id} className={styles.modalItem}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <div className={styles.itemPriceAndCount}>
                <span className={styles.itemPrice}>{item.price}</span>
                <Counter value={item.countItem} onCount={() =>{console.log("hier counter")}}/>
                <span className={styles.itemCount}>x {item.countItem}</span>
              </div>
            </div>
          ))}
          <div className={styles.totalLine}>
            <span>Total</span>
            <span>{`$${total.toFixed(2)}`}</span>
          </div>
          <div className={styles.modalActions}>
            <Button variant="cancel" onAction={closeModalHandler}>Abbrechen</Button>
            <Button variant="action">Bestellen</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
