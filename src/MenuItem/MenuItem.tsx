import React, { useState, MouseEvent } from "react";
import styles from "./MenuItem.module.scss";
import Button from "../Button/Button";
import Counter from "../Counter/Counter";

type MenuItemProps = {
  title: string;
  description: string;
  price: string;
  onSaveCounter: (count: number) => void;
};

const MenuItem: React.FC<MenuItemProps> = ({ title, description, price, onSaveCounter }) => {

    const [counter, setCounter] = useState<number>(0);

    const saveCounter = (count: number) => {
        console.log("MenuItem,saveCounter",count);
        setCounter(count);
    }


  const submitHandler = () => {
    console.log("MenuItem,submitHandler",counter);
    saveCounter(counter || 0);
    onSaveCounter(counter || 0);
    if (counter !== undefined && counter !== 0) {
      setCounter(0);
      saveCounter(0);
    }
  };

  return (
    <div className={styles.menuItem}>
      <div className={styles.itemDetails}>
        <h3 className={styles.itemTitle}>{title}</h3>
        <p className={styles.itemDescription}>{description}</p>
        <div className={styles.itemPriceSection}>
          <p className={styles.itemPrice}>{price}</p>
          <div className={styles.itemActions}>
            <Counter onCount={saveCounter} value={counter} />
            <Button onAddCount={submitHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
