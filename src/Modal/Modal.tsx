import React, { FC, useState } from "react";
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
  const [items, setItems] = useState(
    menuItems.map((item) => ({ ...item, countItem: item.countItem || 0 }))
  );

  const updateItemCount = (id: string, delta: number) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, countItem: Math.max(item.countItem + delta, 0) }
          : item
      )
    );
  };

  const total = items.reduce(
    (acc, item) =>
      acc + item.countItem * parseFloat(item.price.replace(/\$/g, "")),
    0
  );

  return (
    <div className={styles.backdrop} onClick={() => onModalClose()}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalContent}>
          {items.map((item) => (
            <div key={item.id} className={styles.modalItem}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <div className={styles.itemBottom}>
                <div className={styles.priceAndCounter}>
                  <span className={styles.itemPrice}>{item.price}</span>
                  <span
                    className={styles.itemCount}
                  >{`x${item.countItem}`}</span>{" "}
                </div>
                <div className={styles.itemActions}>
                  <button
                    className={styles.actionButton}
                    onClick={() => updateItemCount(item.id, -1)}
                  >
                    −
                  </button>
                  <button
                    className={styles.actionButton}
                    onClick={() => updateItemCount(item.id, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className={styles.totalLine}>
            <span>Gesamt</span>
            <span>{`$${total.toFixed(2)}`}</span>
          </div>
          <div className={styles.modalActions}>
            <Button variant="cancel" onAction={() => onModalClose()}>
              Abbrechen
            </Button>
            <Button variant="action">Bestellen</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
