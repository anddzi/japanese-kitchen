import React from "react";
import styles from "./MenuItem.module.scss";
import Button from "../Button/Button";
import Counter from "../Counter/Counter";

type MenuItemProps = {
  title: string;
  description: string;
  price: string;
};

const MenuItem: React.FC<MenuItemProps> = ({ title, description, price }) => {

    const saveCounter = (count: number) => {
        console.log("HIIIERRR",count);
    }

  return (
    <div className={styles.menuItem}>
      <div className={styles.itemDetails}>
        <h3 className={styles.itemTitle}>{title}</h3>
        <p className={styles.itemDescription}>{description}</p>
        <div className={styles.itemPriceSection}>
          <p className={styles.itemPrice}>{price}</p>
          <div className={styles.itemActions}>
            <Counter onCount={saveCounter} />
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
